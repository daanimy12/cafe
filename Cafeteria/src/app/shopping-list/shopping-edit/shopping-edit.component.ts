import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 // @ViewChild('nameInput') nameInputRef: ElementRef;
 // @ViewChild('amountInput') amountInputRef: ElementRef;
 private subscription:Subscription;
 editMode=false;

  @ViewChild('f') slForm: NgForm;
  constructor() { }
indexEditedItem: number;

clear(){
  this.slForm.reset();
  this.editMode=false;
}

  ngOnInit() {
  
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
 
}
