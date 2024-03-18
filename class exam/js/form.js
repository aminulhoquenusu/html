
function submitForm(event){
event.preventDefault();


let rname=document.getElementById("name").value;
let contact=document.getElementById("contact").value;
let Dropdown=document.getElementById("drop down").value;
let Remarks=document.getElementById("Remarks").value;
let gender=document.querySelector('input[name="gender"]:checked');
let Courses=document.querySelectorAll('input[name="Courses"]:checked');



    let coursesValue=[];
    for(let i=0;i<Courses.length;i++){
 coursesValue.push(Courses[i].value);
    }








let output="Name:"+rname+"\n";
 output+="Contact:"+contact+"\n";
output+="Gender:"+gender.value+"\n";
output+="Courses:"+coursesValue+"\n";
output+="Drop down:"+Dropdown+"\n";
output+="Remarks:"+Remarks+"\n";








let newWindow=window.open("","_blank");
newWindow.document.write("<pre>"+output+"</pre>");

}
let myForm=document.getElementById("myForm");
myForm.addEventListener("submit",submitForm);
