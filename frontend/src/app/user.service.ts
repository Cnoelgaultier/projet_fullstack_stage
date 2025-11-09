import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'

})
export class UserService{
    private apiURL = 'http://localhost:3333/users';


    constructor(private http: HttpClient){}

    
    
    getUsers(): Observable<any[]>{
        return this.http.get<any[]>(this.apiURL);
    }
    }
