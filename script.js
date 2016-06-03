// var bottles=99;
// while(bottles >= 0){
// 	console.log(bottles + " bottles of root beer on the wall, " + bottles 
// 		+ " bottles of root beer...");
// 	bottles--;
// 	if(bottles > 0){
// 		console.log(" take one down, pass it around, " + bottles + " bottles of root beer on the wall.");
// 	}
// 	flag = true;
// }

function validateForm(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var email = document.getElementById("email").value;
	var validate_un = new RegExp("\\d");
	if(!validate_un.test(username)) alert("Username must have at least 1 digit!");
	else if(password != 12345678) alert("Invalid password!");
	else document.getElementById('heading').innerText = "Welcome, " + username + "!";
	return false;
}

document.getElementById('heading').onclick = function(){
	alert(this.innerText);
}