
function submitForm(event){
    event.preventDefault();

let rname=document.getElementById("name").value;
let password=document.getElementById("password").value;

let round=document.querySelectorAll('input[name="round"]:checked');
let gender=document.querySelector('input[name="gender"]:checked');


let roundValue=[];
for(let i=0;i<round.le;i++){
    roundValue.push(round[i].value)

}








let output="Name:"+rname+"\n";
 output+="Password:"+password+"\n";
 output+="Round:"+roundValue+"\n";
 output+="Gender:"+gender.value+"\n";




let newWindow=window.open('',"_blank");
newWindow.document.write("<pre>"+output+"</pre>");

}
let myForm=document.getElementById("myForm");

myForm.addEventListener("submit",submitForm);

