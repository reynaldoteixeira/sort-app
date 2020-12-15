import { Component, OnInit } from '@angular/core';
import { RouteNavigateService } from '../services/route-navigate.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(
    private route: RouteNavigateService
  ) { }

  ngOnInit(): void {
  }

  list(){
    this.route.navigateTo('list');
  }

  uploadFile(){
    this.route.navigateTo('upload-file');
  }

}
