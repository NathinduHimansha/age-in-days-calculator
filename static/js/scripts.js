function getResults(event) {
  event.preventDefault();

  //entered date
  var dob = new Date(document.getElementById("dob").value);
  if (dob == "Invalid Date") {
    alert("Please Enter the Date of Birth !");
  } else {
    //current date
    var currentDate = new Date();

    // To calculate the time difference of two dates
    var Difference_In_Time = currentDate.getTime() - dob.getTime();

    // To calculate the no. of days between two dates
    var ageInDays = Math.round(Difference_In_Time / (1000 * 3600 * 24));

    var h1 = document.createElement("h1");
    var results = document.createTextNode("You Are " + ageInDays + " Days Old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(results);
    document.getElementById("flex-box-result").appendChild(h1);
  }
}

//reset function
function reset() {
  document.getElementById("ageInDays").remove();
}
