import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerData, CustomerFilter } from "./customer.component";
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    endPointBase = environment.apiURL + "/Customer/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

    save(data: CustomerData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "SaveCustomer" + "?session=" + this.authService.getToken(), data);
    }

    delete(data: CustomerData): Observable<object> {
        return this.httpClient.post(this.endPointBase + "DeleteCustomer?session=" + this.authService.getToken(), data);
    }

    getData(filter: CustomerFilter, queryInfo: QueryInfo, columnInfos: any, isExport: boolean): Observable<any> {

        let filterData = {
            filter: filter,
            queryInfo: queryInfo,
            isExport: isExport,
            columnInfos: columnInfos
        }

        return this.httpClient.post(this.endPointBase + "GetCustomerList" + "?session=" + this.authService.getToken(), filterData);
    }

}
