
function submitForm(event) {
    event.preventDefault();


    let rName = document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let hobby=document.querySelectorAll('input[name="hobby"]:checked');

    let hoobyValue=[];

    for(let i=0;i<hobby.length;i++){
    hoobyValue.push(hobby[i].value);
    }




    let output = "Name:" + rName + "\n";
    output+="Email:"+email+"\n";
    output+="password:"+password+"\n";
    output+="gender"+gender+"\n";
    output+="hobby"+hoobyValue+"\n";

    let newWindow = window.open("", "_blank");
    newWindow.document.write("<pre>" + output + "</pre>");

}

let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', submitForm);



