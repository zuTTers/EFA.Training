import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationTransactionData, VaccinationTransactionDataNew, VaccinationTransactionFilter } from "./vaccinationtransaction.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})

export class VaccinationTransactionService {
    endPointBase = environment.apiURL + "/VaccinationTransaction/";
    
    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: any, isNew: boolean): Observable<object> {
        if (!isNew)
            return this.httpClient.post(this.endPointBase + "SaveVaccinationTransaction" + "?session=" + this.authService.getToken(), data);
        else
            return this.httpClient.post(this.endPointBase + "StartSaveVaccinationTransaction" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: VaccinationTransactionData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeleteVaccinationTransaction?session=" + this.authService.getToken(), data);
    }

    getData(filter: VaccinationTransactionFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {
        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetVaccinationTransactionList" + "?session=" + this.authService.getToken(), filterData);
    }
}
