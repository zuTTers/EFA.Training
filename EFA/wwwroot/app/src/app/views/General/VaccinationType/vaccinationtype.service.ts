import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationTypeData, VaccinationTypeFilter } from "./vaccinationtype.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class VaccinationTypeService {

    endPointBase = environment.apiURL + "/VaccinationType/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: VaccinationTypeData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "SaveVaccinationType" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: VaccinationTypeData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeleteVaccinationType?session=" + this.authService.getToken(), data);
    }

    getData(filter: VaccinationTypeFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {

        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetVaccinationTypeList" + "?session=" + this.authService.getToken(), filterData);
    }

}
