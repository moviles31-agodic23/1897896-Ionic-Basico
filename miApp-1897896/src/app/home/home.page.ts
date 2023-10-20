import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  tittle: string='Mi nueva pagina';

  hazmeClick():void{
    alert("hiciste clic!");
  }

  imgUrl: string='https://somoskudasai.com/wp-content/uploads/2022/11/portada_hatsune-miku-35.jpg';

  nombreAlumno: string='';
}
