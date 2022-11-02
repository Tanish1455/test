setTimeout(function(){
  // Retrieve data
  var min = 59;
  var max = 100;
  document.getElementById('countA').innerText=min;
  // Set Max
  document.getElementById("countB").innerHTML = max

   //Set Progress Bar Varible
  const progressBarFull = document.getElementById('progressBarFull');
 
 
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min));
  }
  var settimebar=setInterval(() => {
      var sold=Number(document.getElementById('countA').innerText);
      var radnumb= getRandomInt(1, 3);
      var z = sold+radnumb;
      // If mint Ends
      if (min >= max) z = max;
      if (sold >= max){
        z = max-1;
        clearInterval(settimebar);
      } 
 
      // Load Session 
      if (sessionStorage.getItem("Count")) {
        var cook = Number(sessionStorage.getItem("Count"));
        if (cook > sold) z = cook;
      }  
      // set varible from loop
      document.getElementById("countA").innerHTML = z;
      
      // Update Progress Bar
      progressBarFull.style.width = `${(z / max) * 100}%`;

      ///  Local Storing is getting cleared on refresh 
      if(sessionStorage){
            sessionStorage.setItem("Count", z);
        }
      
  
  }, 3200);
 })
 
 




window.addEventListener('load', function() {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
} else if (window.web3) {
    web3.currentProvider.isMetaMask === true
    $('#connect').hide();
    $('#checkout').show();

} else {
    $('#metaMaskModal').modal("show");
}
});




