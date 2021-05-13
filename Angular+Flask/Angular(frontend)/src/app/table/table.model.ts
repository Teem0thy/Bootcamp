export interface InvoiceHeaderInterface {
  customer: string;
  employee: string;
  invoiceDate: Date;
  invoiceNr: string;
  invoiceTotal: number;
}

export class InvoiceHeaderClass {
  constructor(
    public customer: string,
    public employee: string,
    public invoiceDate: Date,
    public invoiceNr: string,
    public invoiceTotal: number,
  ) { }
}
