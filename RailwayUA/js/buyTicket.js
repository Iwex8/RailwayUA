document.addEventListener("DOMContentLoaded", showAllTickets);
function showAllTickets() {
   let departure = localStorage.getItem("departureIT");
   let destination = localStorage.getItem("destinationIT");
   let date = localStorage.getItem("dateIT");
   let searchResult = "На жаль, квитків по напрямку " + departure + " - " + destination + " на " + date + " не знайдено. No database found to handle jdbc:sqlserver://localhost;databaseName=tickets";
   let result = document.getElementsByClassName("searchResult")[0];
   result.innerHTML = searchResult;
}