
        function OnCalculate() {
        
        var start = document.getElementById("start").value;
        var end = document.getElementById("end").value;
        
       //  var today = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
       //  var startTime = new Date(today + " " + document.getElementById('textbox1').value);
       //  var endTime = new Date(today + " " + document.getElementById('textbox2').value);
       //  var difference = endTime.getTime() - startTime.getTime();
        
        
       
        const timeDifference = calculateTimeDifference(start, end);

        document.getElementById("cal").value =  `${timeDifference.minutes} Minutes`;

       // console.log('Time difference:', timeDifference.hours, 'hours', timeDifference.minutes, 'minutes');
        }

        


       function calculateTimeDifference(startTime, endTime) {
           const [startHour, startMinute] = startTime.split(':').map(Number);
           const [endHour, endMinute] = endTime.split(':').map(Number);

           // Convert the times to minutes
           const startTotalMinutes = startHour * 60 + startMinute;
           const endTotalMinutes = endHour * 60 + endMinute;

           // Calculate the time difference in minutes
           let timeDiffMinutes = endTotalMinutes - startTotalMinutes;

           // Adjust for cases where the end time is on the next day
           if (timeDiffMinutes < 0) {
               timeDiffMinutes += 24 * 60;
           }

           // Convert the time difference back to hours and minutes
           const hours = Math.floor(timeDiffMinutes / 60);
           const minutes = timeDiffMinutes;

           // Return the time difference as an object
           return {
               minutes
           };
       }


       function addColon(what, outTo){
        var string = what.value;
        var i = string.indexOf(":");
        //alert(what.value.length);
            if(what.value.length ==2 && i < 0){
                what.value = what.value + ':';
            }
            //add condition 
            //alert(what.value);
            outTo.value = what.value
        }   
    
        function addColumns(){}
 