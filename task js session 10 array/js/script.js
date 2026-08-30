var courses = ["html", "css", "js"];

var x = prompt("Enter course name");

var found = false;

courses.forEach(function (course) {
    if (course == x) {
        found = true;
    }
});

if (found) {
    alert("Course is found");
} else {
    courses.push(x);
    alert("Course added");
    console.log(courses);
}