import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientData, PatientFilter } from "./patient.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PatientService {

    endPointBase = environment.apiURL + "/Patient/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: PatientData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "SavePatient" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: PatientData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeletePatient?session=" + this.authService.getToken(), data);
    }

    getData(filter: PatientFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {

        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetPatientList" + "?session=" + this.authService.getToken(), filterData);
    }

}
