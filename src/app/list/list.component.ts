import { Component, OnInit } from '@angular/core';
import { CustomSweetAlertService } from '../services/custom-sweet-alert.service';
import { RouteNavigateService } from '../services/route-navigate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private alert: CustomSweetAlertService,
    private route: RouteNavigateService
  ) { }

  textInputList: any;
  choosenElement: any;

  ngOnInit(): void {
  }

  submitList(text) {
    var remove = /\s*;\s*/; //remove espaços e 'ponto e vírgula' 

    this.textInputList = text.split(remove);

    this.randomElementList();
  }

  randomElementList(){
    this.choosenElement = ''
    if (this.textInputList.length > 0) {
      const randomList = Math.floor(Math.random() * this.textInputList.length);

      this.choosenElement = this.textInputList[randomList];
      return this.choosenElement;
    } else {
      this.alert.alertListWarning('You need to fill the text area!');
    }
  }

  backHomeList(){
    this.route.navigateTo('home')
  }
}
