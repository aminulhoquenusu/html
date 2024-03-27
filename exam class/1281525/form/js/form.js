

function submitForm(event){
event.preventDefault()

let rname=document.getElementById("name").value;

let dropdown=document.getElementById("dropdown").value;

let gender=document.querySelector('input[name="gender"]:checked');
let courses=document.querySelectorAll('input[name="courses"]:checked');








 let coursesvalue=[];
 for(let i=0;i<courses.length;i++){
    coursesvalue.push(courses[i].value);

 }



let output="Name :" +rname+"\n";

 output+="Gender :" +gender.value+"\n";
 output+="Courss :" +coursesvalue+"\n";
 output+="Dropdown :" +dropdown+"\n";
 








let newWindow=window.open('',"_blank");
newWindow.document.write("<pre>"+output+"</pre>");

}

let myForm=document.getElementById("myForm");
myForm.addEventListener("submit",submitForm);