



function submitForm(event) {

     event.preventDefault();


     let rName = document.getElementById("name").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;
     let gender=document.querySelector('input[name="gender"]:checked');
     let course=document.querySelectorAll('input[name="Course"]:checked')

     let courseValue=[];

     for(let i=0; i<course.length; i++){
          courseValue.push(course[i].value);
     }

     let output = "Name:" + rName + "\n";
     output += "Email:" + email + "\n";
     output+="Gender:"+gender.value+"\n";
     output += "Password:" + password + "\n";
     output += "Course:" + courseValue + "\n";

     


     let newWindow = window.open("", '_blank');
     newWindow.document.write("<pre>" + output + "</pre>");

}

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", submitForm);







