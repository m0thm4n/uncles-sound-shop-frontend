import { Injectable, NgModule, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface QueryRequest {
  Query: string,
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  http: HttpClient = inject(HttpClient)

  private emailUrl = "http://localhost:8080/send-email";

  constructor() {
  }

  sendEmail(email: string, subject: string, details: string) {
    var queryApiHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST,DELETE',
    };

    return this.http.post<QueryRequest>(this.emailUrl, { "email": email, "subject": subject, "details": details }, { headers: queryApiHeaders });
  }
}
