import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileUpload(files){
    if (files && files.length > 0) {

      const file: File = files.item(0);
      const reader: FileReader = new FileReader();
      reader.readAsText(file);

      reader.onload = (e) => {

        const res = reader.result as string; // This variable contains your file as text
        const lines = res.split('\n'); // Splits you file into lines
        const ids = [];
        const names = [];

        lines.forEach((line) => {
          ids.push(line.split(',')[0]); // Get first item of line
        });

        lines.forEach((line) => { // para cada linha
          names.push(line.split(',')[1]); // pega oo valor da segunda coluna e armazena na variável 'names'
        });
        console.log(ids);
        console.log(names);
      };
    }
  }

}
