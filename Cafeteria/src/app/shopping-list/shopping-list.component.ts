import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy{

  constructor() { }
  private subscription:Subscription;
  ngOnInit() {
  
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    
  }

}
