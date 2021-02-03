'use strict';
var table = document.getElementById('table')
function Student(name, course) {
    this.name= name;
    this.course = course;
    this.grade = randomGrade();
    this.status= status(this.grade);
    Student.prototype.allStudent.push(this);
}

Student.prototype.allStudent = [];

if(localStorage.getItem('students')){
var studentData= JSON.parse(localStorage.getItem('students'));
for (var i = 0; i < studentData.length; i++){
    new Student(studentData[i].name,studentData[i].course);
}
creatTable();


}
function status(grade){
    if(grade<50){
        var state='Fail';
        return state;
    }else{
        var state='Pass';
        return state;
    }
}

var form = document.getElementById('studentForm');
form.addEventListener('submit', newStudent);
function newStudent(event) {
    event.preventDefault();
    var studentName = event.target.studentName.value;
    var studentCourse = event.target.Course.value;


    new Student(studentName, studentCourse);
    creatTable();

    localStorage.setItem('students', JSON.stringify(Student.prototype.allStudent));
}


function creatTable() {
    table.innerHTML = '';
    creatHeader();
    for (var i = 0; i < Student.prototype.allStudent.length; i++) {

        var studentRow = document.createElement('tr');
        table.appendChild(studentRow);

        var studentName = document.createElement('td');
        studentName.textContent = Student.prototype.allStudent[i].name;
        studentRow.appendChild(studentName);

        var studentGrade = document.createElement('td');
        studentGrade.textContent = Student.prototype.allStudent[i].grade;
        studentRow.appendChild(studentGrade);

        var course = document.createElement('td');
        course.textContent = Student.prototype.allStudent[i].course;
        studentRow.appendChild(course);

        var status = document.createElement('td');
        status.textContent = Student.prototype.allStudent[i].status;
        studentRow.appendChild(status);




    }


}
var clear=document.getElementById('clear');
clear.addEventListener('click',clearItem);
function clearItem (event){
    localStorage.clear();
    table.innerHTML='';

}




function creatHeader() {
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    var studentName = document.createElement('th');
    studentName.textContent = 'Student Name';
    headerRow.appendChild(studentName);

    var studentGrade = document.createElement('th');
    studentGrade.textContent = 'Student Grade';
    headerRow.appendChild(studentGrade);

    var course = document.createElement('th');
    course.textContent = 'Course';
    headerRow.appendChild(course);

    var status = document.createElement('th');
    status.textContent = 'Status';
    headerRow.appendChild(status);


}

function randomGrade() {

    return Math.floor(Math.random() * (100 - 0)) + 0;
}