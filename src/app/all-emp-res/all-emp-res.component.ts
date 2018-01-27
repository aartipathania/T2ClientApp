import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-all-emp-res',
  templateUrl: './all-emp-res.component.html',
  styleUrls: ['./all-emp-res.component.css']
})
export class AllEmpResComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }
  pageTitle: string = "All Employee Resources";
  private allItems;
  ngOnInit(): void {
    this.http.get('http://18.217.102.53:8080/team2-service-webapp/api/AllEmployeeResources')
      .subscribe(data => {
      console.log(data);
        this.allItems = data;
    });
  }
}
