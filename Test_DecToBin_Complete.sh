echo "Please enter positive DEC value: "
read DEC

if [ $DEC -eq 0 ]
then
     REST=0000

elif [ $DEC -lt 0 ]
then
     echo "Value must be positive!"
     exit
else

   while [ $DEC -gt 0 ]
   do
       REST=`expr $DEC % 2`$REST
       DEC=`expr $DEC / 2`
       COUNT=`expr $COUNT + 1`

       if [ $COUNT -eq 4 ]
       then
            REST=" $REST"
            COUNT=0
       fi
   done
fi

# Without (`expr $COUNT + 0`) return some errors in case of user enter value 0.
if [ `expr $COUNT + 0` -gt 0 ]    
then
    if [ $COUNT -eq 1 ]
    then
         REST=000$REST
    elif [ $COUNT -eq 2 ]
    then
         REST=00$REST
    elif [ $COUNT -eq 3 ]
    then
         REST=0$REST
    fi
fi

echo "Result in BIN form:$REST"
