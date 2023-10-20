import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent  implements OnInit {

  constructor() {}

  ngOnInit() {}

  tarjetas=[
    {
      nombre:'Erick Alejandro Alvarado Ferrer',
      numero:453718348519,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    },
    {
      nombre:'Erick Alejandro Alvarado Ferrer',
      numero:453718348519,
      vigenciaInicio:'08',
      vigenciaFin:'27',
      CVV:'088'
    }
  ];

  imgUrl:string='https://static.vecteezy.com/system/resources/previews/019/550/737/original/master-card-editorial-logo-free-vector.jpg';
}
