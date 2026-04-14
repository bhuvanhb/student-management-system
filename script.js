function addStudent() {

    let input =
        document.getElementById("studentName");

    let studentName =
        input.value;

    let li =
        document.createElement("li");

    li.textContent =
        studentName;

    document
        .getElementById("studentList")
        .appendChild(li);

    input.value = "";

}
function clearStudents() {
    document.getElementById("studentList").innerHTML = "";
}