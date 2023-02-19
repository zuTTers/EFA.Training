import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenuData, GenuFilter } from "./genu.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GenuService {

    endPointBase = environment.apiURL + "/Genu/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: GenuData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "SaveGenu" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: GenuData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeleteGenu?session=" + this.authService.getToken(), data);
    }

    getData(filter: GenuFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {

        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetGenuList" + "?session=" + this.authService.getToken(), filterData);
    }

}
