
(function() {
  
  const correctPassword = "sherlocked";  

  
  if (!sessionStorage.getItem("authenticated")) {
    
      function askForPassword() {
          const userPassword = prompt("Please enter the password:");

          if (userPassword === correctPassword) {
             
              sessionStorage.setItem("authenticated", "true");

             
              document.body.style.display = "block";
          } else {
             
              alert("Incorrect password. Redirecting you to Google.");
              window.location.href = "https://www.google.com";  
          }
      }

     
      document.body.style.display = "none";

    
      askForPassword();
  } else {
   
      document.body.style.display = "block";
  }
})();
