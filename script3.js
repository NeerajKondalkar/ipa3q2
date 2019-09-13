validform=false;
try{
	var click_submit = document.getElementById("submit");
	click_submit.addEventListener("click", formValidation);
	function formValidation()
	{	
		console.log("you're in the formValidation() function LINE 7");
		var name = document.getElementById("stdname").value;
		console.log("value of name : " + name);
		var add = document.getElementById("address").value;
		console.log("value of address : " + add);
		var eid = document.getElementById("emailid").value;
		console.log("value of eid : " + eid);
		var dob = new Date(document.getElementById("dob"));
		var branch = document.getElementsByClassName("radio");
		var i;
		var radio_checked=false;
		console.log("now entering for loop to check branch[i]       LINE 15");
		for (i=0; i<branch.length; i++){
			console.log("checking for branch["+i+"]           LINE 20");
			if(branch[i].checked){
				console.log("radio_checked = TRUE            LINE 22");
				radio_checked=true;
			}
		}
		var checkbox_checked;
		console.log("now entering for loop to check hobby[i]      LINE 23");
		var hobby = document.getElementsByClassName("checkbox");
		for (i=0; i<hobby.length; i++){
			console.log("checking for hobby["+i+"] : "+hobby[i]+".checked      LINE 29");
			if(hobby[i].checked){
				console.log("checkbox_Checked = TRUE            LINE 32");
				checkbox_checked=true;
			}
		}

	if(!(name.length == add.length == eid.length == "") && !(isNaN(d)) && checkbox_checked && radio_checked ){
				console.log("now inside if statement for checking empty values       LINE 33");
				if(validName(name)){
					console.log("now inside if statement for validName       LINE 35");
					if(validEmail(eid))
					{    
						console.log("now inside if statement for validEmail       LINE 38");
						if(validDob(dob))
						{	
							console.log("now inside if statement for validDoc, here we set validform=true      LINE 41");
							validform=true;			
						}
						else{
						alert("age must be above 22 years    LINE 50");
						dob.focus();	
						}	
					}
					else{
						alert("You have entered an invalid email address!         LINE 55");
						eid.focus();
					} 
				}
				else{
					alert("You have entered an invalid Name      LINE 60");
					name.focus();	
				}
	}
	}

	function validName(name){

		  console.log("you're in the validName() function LINE 63");
	      var letters = /^[A-Za-z ]+$/;
	      if((name.match(letters).length > 0 )|| !(name.match(letters)==null))
	      {
	      	console.log("now inside if statement for checking name.match(letters)       LINE 65");
	      return true;
	      }
	      else
	      {
	      	console.log("now inside else statement for name.match[regex]       LINE 72");
	      return false;
	      }
	      
	}

	function validEmail(eid)
	{
	    console.log("you're in the validEmail() function             LINE 80");
		var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
		if(eid.match(mailformat))
		{	
			 console.log("you're in if statment for checking eid.match(mailformat) function LINE 84");
			return true;
		}
		else
		{	
			console.log("you're in else statment for checking eid.match(mailformat) function LINE 89");
			return false;
		}
	}
	function validDob(dob){
		console.log("you're in the validDob() function             LINE 94");
		var present_date = new Date();
		if ((present_date.getFullYear() - dob.getFullYear()) >= 22 ){
			console.log("you're in if statment for checking dob  function        LINE 96");
			return true;
		}
	}
	if(validform){
		var name = document.getElementById("stdname").value;
		console.log("you're in the validform() function             LINE 102");
		alert("Welcome "+name+"    LINE 109");
	}
}
catch(err){
	alert("validform : "+validform+ "            LINE 113");
	console.log(err.message);
}

