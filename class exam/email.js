


let Email=prompt("Enter the email");
const regEx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (regEx.test(Email)) {
    alert("email address is correct")
}
else {
    alert("email address is wrong");

}






