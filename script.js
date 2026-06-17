function generateResume(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let skills=document.getElementById("skills").value;

document.getElementById("resume").innerHTML=`
<h2>${name}</h2>
<p>Email: ${email}</p>
<p>Skills: ${skills}</p>
`;

}