import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }
  ngOnChange(){
    console.log("AppComponent: ngOnChange");
  }
  ngOnInit(){
    console.log("AppComponent: ngOnInit");
  }
  ngDoCheck(){
    console.log("AppComponent: ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("AppComponent: ngAfterCotentnInit");
  }
  ngAfterContentChecked(){
    console.log("AppComponent: ngAfterCotentnChecked");
  }
  ngAfterViewInit(){
    console.log("AppComponent: ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AppComponent: ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("AppComponent: ngOnDestroy");
  }
}
