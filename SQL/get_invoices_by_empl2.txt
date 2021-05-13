CREATE DEFINER=`root`@`localhost` PROCEDURE `get_invoices_by_empl2`(IN inEmplId INT, IN inYear varchar(4), IN inMonth varchar(2), OUT outTotal DEC(10,2))
BEGIN

     SET @filtr = concat('%',inYear,'-',inMonth,'-%');

select em.employeeid as EmployeeId,
       em.firstname as EmployeeFirstName,
       em.lastname as LastName,
       em.title as EmployeeTitle,
       em.email as EmployeeEmail,
       c.firstname as CustomerFirstName,
       c.lastname as CustomerLastName,
       c.company as CustomerCompany,
       c.phone as CustomerPhone,
       c.email as CustomerEmail,
       c.customerid as CustomerId,
       inv.invoiceid as InvoiceId,
       inv.invoicedate as InvoiceDate,
       inv.total as TotalSumOfInvoice
       
from employees em
join customers c on em.employeeid=c.supportrepid
join invoices inv on c.customerid=inv.customerid
where em.employeeid=inEmplId and InvoiceDate like @filtr
order by InvoiceDate asc;

END
