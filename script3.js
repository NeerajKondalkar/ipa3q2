function formValidation()
{
var name = document.registration.stdname;
var add = document.registration.passidaddress;
var eid = document.registration.emailid;
var dob = document.registration.dob;
{
if(allLetter(name))
{
if(alphanumeric(add))
{
if(ValidateEmail(eid))
{
if(validdob(dob))
{
}
} 
}
} 
}
}
}
}
return false;
}
function alphanumeric(add)
{
var address_len = address.value.length;
if (address_len == 0)
{
alert("this field should not be empty);
address.focus();
return false;
}
return true;
}
function ValidateEmail(eid)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}