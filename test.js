<script>
var req = new XMLHttpRequest();
//The onreadystatechange property
//specifies a function to be 
//executed every time the status
//of the XMLHttpRequest changes
req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //The responseText property
       //returns a text string           
       console.log(xhttp.responseText)
       //Do some stuff
    }
};
req.open("GET", "https://tbik.oebb.at/management/holiday/readShortTermPeriods", true);
req.send();
</script>
