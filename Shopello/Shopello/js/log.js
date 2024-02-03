function log()
{
	var name= document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var pword = document.getElementById("pword").value;
	var repword = document.getElementById("repword").value;


	var letters = /^[A-Za-z]+$/;
		
	var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	var passwordcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

	
	if(name == "" || email == "" || pword == "" || repword == "")
	{
		alert("Required fields must be filled!");
		return false;
	}
	
	if(!name.match(letters))
	{
		alert("name should be in alphabets only!");
		return false;
	}
	
	if(!email.match(emailformat))
	{
		alert("Email should be in email format");
		return false;
	}
	
	if(pword.match(passwordcheck))
	{
		alert("Password should be contain atleast 1 number, 1 uppercase letter, 1 lowercaseletter and more than 8 characters");
		return false;
	}
	
	if(pword != repword)
	{
		alert("Both passwords are should be match!");
		return false;
	}	
}