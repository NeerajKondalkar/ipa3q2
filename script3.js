function formValidation()
{	
	validform=false;
	var name = document.getElementById("stdname");
	var add = document.getElementById("address");
	var eid = document.getElementById("emailid");
	var dob = document.getElementById("dob");
	var branch = document.getElementByType("radio");
	var i;
	var radio_checked=false;
	for (i=0; i<branch.length; i++){
		if(branch[i].checked){
			radio_checked=true;
		}
	}
	var checkbox_checked;
	var hobby = document.getElementByTag("checkbox");
	for (i=0; i<hobby.length; i++){
		if(hobby[i].checked){
			checkbox_checked=true;
		}
	}
}

if(!(name.length==add.length==eid.length==dob.length=="") && checkbox_checked && radio_checked ){

			if(allLetter(name)){
				if(validEmail(eid))
				{
					if(validDob(dob))
					{	
						validform=true;		
					}
				}
				else{
					alert("You have entered an invalid email address!");
					eid.focus();
				} 
			}
			else{
				alert("You have entered an invalid Name");
				name.focus();	
			}
}	

function validEmail(eid)
{
	var mailformat = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";
	if(eid.match(mailformat))
	{
		return true;
	}
	else
	{
		return false;
	}
}

if(validform){
	document.write("Welcome".name);
}