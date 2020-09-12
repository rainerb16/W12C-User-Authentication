// GET COOKIES AND WELCOME USER
let userLoggedIn = Cookies.get("user-session");
let userToken = Cookies.get("user-token");

if(userLoggedIn == undefined) {
    document.getElementById("welcome-message").innerHTML = "No User logged in!";
} else {
    document.getElementById("welcome-message").innerHTML = "<h2>Welcome </h2>" + "<h2>" + userLoggedIn + "</h2>";
}

// GET COLORS ARRAY
function showColors() {
    let ajax = new XMLHttpRequest;
      ajax.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200) {
              let showColors = JSON.parse(this.responseText);
              for(i = 0; i < showColors.data.length; i++) {
                  let colorBox = document.getElementsByClassName("color-box")
                  document.getElementById("post-container").innerHTML += "<h3>Name: " + showColors.data[i].name + "</h3>";
                  document.getElementById("post-container").innerHTML += "<h4>Year: " + showColors.data[i].year + "</h4>";
                  document.getElementById("post-container").innerHTML += "<div class='color-box'></div>";
                  colorBox[i].style.backgroundColor = showColors.data[i].color;
              }
          }
      }
      ajax.open("GET", "https://reqres.in/api/unknown", true);
      ajax.setRequestHeader("Content-Type", "application/json");
      ajax.send();
}
showColors();