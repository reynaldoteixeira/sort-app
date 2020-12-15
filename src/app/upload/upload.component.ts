import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { CustomSweetAlertService } from '../services/custom-sweet-alert.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  nameForSort: any = [];
  chosenElement:any;

  constructor(
    private alert: CustomSweetAlertService
  ) { }

  ngOnInit(): void {
  }

  fileUpload(files){
    if (files && files.length > 0) {

      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);

      reader.onload = (e) => {

        const res = reader.result as string; // pega todosos valores da planilha em csv e transforma em uma grande string
        const lines = res.split('\n'); // Splits you file into lines


        lines.forEach((line) => { // para cada linha que separamos na variável line
          this.nameForSort.push(line.split(',')[1]); // pega oo valor da segunda coluna e armazena na variável 'names'
        });
  
      };
    }

  }

  randomElement(){

    if (this.nameForSort.length > 0) {
      const random = Math.floor(Math.random() * this.nameForSort.length);

      this.chosenElement = this.nameForSort[random];

    } else {
      this.alert.alertWarning();
    }
 

    
  }

}
