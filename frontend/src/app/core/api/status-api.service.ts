import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusResponse } from './status.model';

@Injectable({
  providedIn: 'root'
})

export class StatusApiService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/v1/status';

  obterStatus(): Observable<StatusResponse>{
    return this.http.get<StatusResponse>(this.baseUrl);
  }
  
}
