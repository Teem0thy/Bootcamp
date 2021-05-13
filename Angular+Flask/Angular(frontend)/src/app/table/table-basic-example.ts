import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {InvoiceHeaderClass, InvoiceHeaderInterface} from './table.model';
import {InvoiceHeaderApiService} from './table-api.sevice';

const myDate = new Date();


//const ELEMENT_DATA: InvoiceHeaderClass[] = [
const ELEMENT_DATA: InvoiceHeaderInterface[] = [
  {employee: 'Name Surname', customer: 'Customer Name', invoiceNr: '1', invoiceDate: myDate, invoiceTotal: 1.99},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})


export class TableBasicExample implements OnInit, OnDestroy {
  InvoiceHeaderListSubs: Subscription;
  InvoiceHeaderList: InvoiceHeaderInterface[];//InvoiceHeaderClass[];
  dataSource: InvoiceHeaderInterface[];//InvoiceHeaderClass[];

  constructor(private InvoiceHeaderApi: InvoiceHeaderApiService) {
  }

  ngOnInit() {
/*
    this.InvoiceHeaderListSubs = this.InvoiceHeaderApi
      .getInvoiceHeaderData()
      .subscribe(res => {
          //this.InvoiceHeaderList = res;
          this.dataSource = res;
        },
        console.error
      );
*/
this.InvoiceHeaderApi.getInvoiceHeaderData().subscribe((data)=> {
  //console.log(data as InvoiceHeaderInterface[])
  this.dataSource = data as InvoiceHeaderInterface[]
  //console.log(this.dataSource)
  //this.dataSource = ELEMENT_DATA
  //console.log(this.dataSource)
},error => {
  console.log('error: ', error)
});
  }

  ngOnDestroy() {
    this.InvoiceHeaderListSubs.unsubscribe();
  }

  displayedColumns: string[] = ['employee','customer','invoiceNr','invoiceDate','invoiceTotal'];
  //dataSource = ELEMENT_DATA;
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */