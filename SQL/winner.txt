CREATE DEFINER=`root`@`localhost` PROCEDURE `winner`( IN inYear varchar(4), IN inMonth varchar(2), OUT outTotal DEC(10,2))
BEGIN
     
     SET @thisMonth = inMonth;
     SET @thisYear = inYear;    
     SET @filtr = concat('%',inYear,'-',inMonth,'-%');

  select inYear, 
         inMonth, 
         em.firstname, 
         em.lastname, 
         sum(inv.total) as Total,
         case when sum(inv.total) = (select max(tot) as compltot from (select sum(inv.total) as tot from employees em
											 join customers c on em.employeeid=c.supportrepid
											 join invoices inv on c.customerid=inv.customerid
											 where inv.invoicedate like @filtr
											 group by em.employeeid) T)
         
         then 'Win'
         else
            '-'
	     end as Winner
 from employees em
   join customers c on em.employeeid=c.supportrepid
   join invoices inv on c.customerid=inv.customerid
   where inv.invoicedate like @filtr
   group by em.employeeid;
   
   END
