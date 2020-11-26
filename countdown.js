   // Set the date we're counting down to
   let Cd1 = new Date("Sep 5, 2018 15:37:25").getTime();
   let Cd2 = new Date("Sep 5, 2018 15:37:25").getTime();
   let Cd3 = new Date("Sep 5, 2018 15:37:25").getTime();

   // Update the count down every 1 second
   let update = setInterval(function() {

       // Get todays date and time
       var now = new Date().getTime();

       // Find the distance between now an the count down date
       var dist1 = countDownDate - now;
       var dist2 = countDownDate - now;
       var dist1 = countDownDate - now;

       // Time calculations for days, hours, minutes and seconds
       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       // Display the result in the element with id="demo"
       document.getElementById("#1").innerHTML = days + "d " + hours + "h " +
           minutes + "m " + seconds + "s ";

       // If the count down is finished, write some text 
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("#1").innerHTML = "EXPIRED";
       }
   }, 1000);

   function timeCalculation(dist) {
       var days = Math.floor(dist / (1000 * 60 * 60 * 24));
       var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((dist % (1000 * 60)) / 1000);

   }

   function dispCountdown(id, endDate) {
       // Set the date we're counting down to=endDate==>new Date("Sep 5, 2018 15:37:25").getTime();

       // Update the count down every 1 second
       let update = setInterval(function() {

           // Get todays date and time
           var now = new Date().getTime();

           // Find the distance between now an the count down date
           var distance = endDate - now;

           // Time calculations for days, hours, minutes and seconds
           var days = Math.floor(distance / (1000 * 60 * 60 * 24));
           var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           var seconds = Math.floor((distance % (1000 * 60)) / 1000);

           // Display the result in the element with id="demo"
           document.getElementById(id).innerHTML = days + "d " + hours + "h " +
               minutes + "m " + seconds + "s ";

           // If the count down is finished, write some text 
           if (distance < 0) {
               clearInterval(x);
               document.getElementById(id).innerHTML = "EXPIRED";
           }
       }, 1000);
   }