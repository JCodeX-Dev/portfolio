import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AsyncSubject, BehaviorSubject, Observable, Subject} from "rxjs";
import {Profile} from "./profile";
import {environment} from "../../environments/environment";
import {Mail} from "./mail";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private data: AsyncSubject<any> = new AsyncSubject<any>();
  profileData = this.data.asObservable();

  private apiURL = environment.baseURL + environment.resource + environment.username;
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }



  setProfile(profile: Profile){
    this.data.next(profile);
    this.data.complete();
  }

  getProfile(): Observable<Profile>{
    return this.http.get<Profile>(this.apiURL);
  }

  sendMail(mail: Mail): Observable<Mail>{
    return this.http.post<Mail>(`${this.baseURL}/sendmail`,mail);
  }
}
