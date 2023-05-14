function login(event) {
    event.preventDefault();


    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;


    var ls = JSON.parse(localStorage.getItem("flipkart"));

    var flag = false;
    var currentuser;

    for (i = 0; i < ls.length; i++) {
        if (ls[i].email == email && ls[i].password == password) {
            flag = true;
            currentuser = ls[i];
        }
    }
    if (flag==true) {
        console.log(currentuser, "currentuser");
        localStorage.setItem("currentuser", JSON.stringify(currentuser));
        alert("login successfull");
        window.location.href = './home.html';

    } else {
        alert("credential wrong");
    }

}