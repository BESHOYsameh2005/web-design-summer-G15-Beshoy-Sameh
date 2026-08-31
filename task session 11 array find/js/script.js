var courses = ["html", "css", "js"];
var x = prompt("Enter course name");
var num = courses.find((course) => course == x);
if (num) {
    alert("Course is found");
} else {
    courses.push(x);
    alert("Course added");
}

console.log(courses);