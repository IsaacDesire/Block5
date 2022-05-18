// Function 
function validateForm() {
	
	// 3 variables  
	
	var name = document.myform.name.value;
	var email = document.myform.email.value;
	var message = document.myform.message.value;
	
	
	// Conditions 
	
	if (name == null || name == "") {
		alert("Name can't be blank");
		return false;
	}
	else if (email == null || email == "") {
		alert("Email can't be blank");
		return false;
	}
	else if (message == null || message == "") {
		alert("Message can't be blank");
		return false;
	}
	else {
		alert("Your message has been sent");
	}
}
