import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QueryInfo } from "../../../shared/query-info";
import { JwtAuthService } from "../../../shared/services/auth/jwt-auth.service";
import { environment } from "environments/environment";

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    endPointBase = environment.apiURL + "/Dashboard/";

    constructor(private httpClient: HttpClient, private authService: JwtAuthService) { }

}
