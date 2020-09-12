// GET COOKIES AND WELCOME USER
let userLoggedIn = Cookies.get("user-session");
let userToken = Cookies.get("user-token");

if(userLoggedIn == undefined) {
    document.getElementById("welcome-message").innerHTML = "No User logged in!";
    let loginBtn = document.createElement("BUTTON");
    loginBtn.innerHTML = "Log In";
    document.getElementById("login-btn").appendChild(loginBtn);
} else {
    document.getElementById("welcome-message").innerHTML = "<h2>Welcome </h2>" + "<h2>" + userLoggedIn + "</h2>";
    let logoutBtn = document.createElement("BUTTON");
    logoutBtn.innerHTML = "Log Out";
    document.getElementById("logout-btn").appendChild(logoutBtn);
    showColors();
};


// LOG IN FUNCTION WHEN NO USER LOGGED IN
function noUser() {
    window.open("../index.html", "_self");
}

document.getElementById("login-btn").addEventListener("click", noUser);


// LOG OUT FUNCTION
function logOut() {
    window.open("../index.html", "_self");
    Cookies.remove("user-session");
    Cookies.remove("user-token");
}

document.getElementById("logout-btn").addEventListener("click", logOut);



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
          };
      }
      ajax.open("GET", "https://reqres.in/api/unknown", true);
      ajax.setRequestHeader("Content-Type", "application/json");
      ajax.send();
}
