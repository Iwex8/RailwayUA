function getData() {
   let departure = document.getElementsByClassName("departure")[0].value;
   let destination = document.getElementsByClassName("destination")[0].value;
   let date = document.getElementsByClassName("check_in")[0].value;
   if (departure == "" || destination == "" || date == "") alert("Будь ласка, заповніть усі поля для пошуку квитків.");
   else {
      localStorage.setItem("departureIT", departure);
      localStorage.setItem("destinationIT", destination);
      localStorage.setItem("dateIT", date);
      window.open("shop.html");
   }
}