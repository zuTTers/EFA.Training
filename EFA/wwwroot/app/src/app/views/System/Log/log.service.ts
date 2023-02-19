import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogData, LogFilter } from "./log.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LogService {

    endPointBase = environment.apiURL + "/Log/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: LogData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "SaveLog" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: LogData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeleteLog?session=" + this.authService.getToken(), data);
    }

    getData(filter: LogFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {

        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetLogList" + "?session=" + this.authService.getToken(), filterData);
    }

}
