function addStudent() {
    const input = document.getElementById("studentName");
    const name = input.value.trim();

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    const ul = document.getElementById("studentList");

    const li = document.createElement("li");
    li.textContent = name;

    ul.appendChild(li);

    input.value = "";
}