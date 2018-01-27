import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {AllEmpResComponent} from '../all-emp-res/all-emp-res.component';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-single-emp-res',
  templateUrl: './single-emp-res.component.html',
  styleUrls: ['./single-emp-res.component.css']
})
export class SingleEmpResComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
  pageTitle: string = "Employee Resources";
  private allItems: any;
  id ='';
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id")
    });
    this.http.get('http://18.217.102.53:8080/team2-service-webapp/api/SingleEmployeeResources/' + this.id)
      .subscribe(data => {
        this.allItems = data;
      });
  }
}
