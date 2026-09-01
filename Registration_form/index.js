const name= document.getElementById("name");
const email= document.getElementById("email");  
const course= document.getElementById("course");
const section= document.getElementById("section");
const branch= document.getElementById("branch");
const password= document.getElementById("password");
const conform_password= document.getElementById("confirm_password");
const students = document.getElementById("students");
function clickHandler(){
    console.log(name.value);
    let user= {
        name:name.value,
        email:email.value,
        course:course.value,
        section:section.value,
        branch:branch.value,
        password:password.value,
        conform_password:conform_password.value
    }
    console.log(user);
    if (user.password===user.conform_password){
        const div=document.createElement("div");
    
        const h1=document.createElement("h1");
        h1.innerText=`Name: ${user.name}`;

        const h2=document.createElement("h2");
        h2.innerText=`Email: ${user.email}`;

        const h3=document.createElement("h3");
        h3.innerText=`Course: ${user.course}`;

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
       
        students.appendChild(div);
        
    }
}