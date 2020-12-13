import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nameForSort: any = [];

  constructor() { }

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

}
