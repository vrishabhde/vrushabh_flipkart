function register(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;

    var password = document.getElementById("password").value;

    var cpassword = document.getElementById("cpassword").value;

    var cartproduct = [];

    if (name && email && password && cpassword) {
        if (password.length >= 8 && cpassword.length >= 8) {
            if (password == cpassword) {

                var flag = false;
                var ls = JSON.parse(localStorage.getItem("flipkart")) || [];

                for (var i = 0; i < ls.length; i++) {
                    if (ls[i].email == email) {
                        flag = true;

                    }
                }
                if (flag == false) {
                    var userdata = { name:name, email:email, password:password, cpassword:cpassword, cartproduct };
                    ls.push(userdata)
                    localStorage.setItem("flipkart", JSON.stringify(ls));
                    alert("Registration successfull");
                    window.location.href = './fliplogin.html'
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("cpassword").value = "";

                }else{
                    // console.log("user already exist");
                    alert("user already exist");
                }
            }else{
                console.log("password not matched");
            }
        }else{
            console.log("password should be contain at least 8 digit ");
        }
    }else{
        console.log("all fields are mandatory")
    }
}