import {Component,OnInit,OnDestroy}                           from '@angular/core';

@Component({
    templateUrl: 'js/app/view/home.view.html',
    directives : []
})
export class HomeView {

  /**************************************************************************
  * ATTRIBUTES
  **************************************************************************/
  private foo :string = "Hello";
  /**************************************************************************
  * CONSTRUCTOR
  **************************************************************************/
  constructor(){
      
  }

}
