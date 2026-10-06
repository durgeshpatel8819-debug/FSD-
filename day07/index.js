let students = [];

let editIndex = -1;


let studentForm = document.getElementById("studentForm");

let studentTable = document.getElementById("studentTable");

let searchBox = document.getElementById("nameRollNumber");

let totalStudents = document.getElementById("total_students");

let averageMarks = document.getElementById("average_marks");

let addButton = document.getElementById("addButton");


studentForm.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let roll_number = document.getElementById("roll_number").value;

    let course = document.getElementById("course").value;

    let marks = Number(document.getElementById("marks").value);


    let grade = getGrade(marks);


    let student = {

        name: name,

        roll_number: roll_number,

        course: course,

        marks: marks,

        grade: grade

    };


    if(editIndex == -1){

        students.push(student);

    }

    else{

        students[editIndex] = student;

        editIndex = -1;

        addButton.innerText = "Add Student";

    }


    studentForm.reset();

    displayStudents();

    updateStats();

});


function getGrade(marks){

    if(marks >= 90){

        return "A+";

    }

    else if(marks >= 80){

        return "A";

    }

    else if(marks >= 70){

        return "B";

    }

    else if(marks >= 60){

        return "C";

    }

    else if(marks >= 50){

        return "D";

    }

    else{

        return "F";

    }

}


function displayStudents(){

    studentTable.innerHTML = "";


    students.forEach(function(student, index){

        studentTable.innerHTML += `

            <tr>

                <td>${student.roll_number}</td>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>${student.marks}</td>

                <td>${student.grade}</td>

                <td>

                    <button
                        class="edit"
                        onclick="editStudent(${index})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete"
                        onclick="deleteStudent(${index})"
                    >
                        Delete
                    </button>

                </td>

            </tr>

        `;

    });

}


function deleteStudent(index){

    students.splice(index, 1);

    displayStudents();

    updateStats();

}


function editStudent(index){

    let student = students[index];


    document.getElementById("name").value = student.name;

    document.getElementById("roll_number").value = student.roll_number;

    document.getElementById("course").value = student.course;

    document.getElementById("marks").value = student.marks;


    editIndex = index;

    addButton.innerText = "Update Student";

}


searchBox.addEventListener("keyup", function(){

    let searchValue = searchBox.value.toLowerCase();


    let rows = studentTable.getElementsByTagName("tr");


    for(let i = 0; i < rows.length; i++){

        let rowText = rows[i].innerText.toLowerCase();


        if(rowText.includes(searchValue)){

            rows[i].style.display = "";

        }

        else{

            rows[i].style.display = "none";

        }

    }

});


function updateStats(){

    totalStudents.value = students.length;


    if(students.length == 0){

        averageMarks.value = 0;

        return;

    }


    let total = 0;


    students.forEach(function(student){

        total = total + student.marks;

    });


    let average = total / students.length;


    averageMarks.value = average.toFixed(2);

}