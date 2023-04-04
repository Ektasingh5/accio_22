var selectedRow = null

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["Name"] = document.getElementById("Name").value;
    formData["email"] = document.getElementById("email").value;
    formData["gpa"] = document.getElementById("gpa").value;
    formData["age"] = document.getElementById("age").value;
    formData["degree"] = document.getElementById("degree").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gpa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.degree;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("gpa").value = "";
    document.getElementById("age").value = "";
    document.getElementById("degree").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("gpa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.gpa;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.degree;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("NamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NamevalidationError").classList.contains("hide"))
        {
            document.getElementById("NamevalidationError").classList.add("hide");
        }
    }
    // Roll No validation
    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailNovalidationError").classList.contains("hide"))
        {
            document.getElementById("emailNovalidationError").classList.add("hide");
        }
    }
    // Std class validation
    if (document.getElementById("gpa").value == "") {
        isValid = false;
        document.getElementById("gpavalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("gpavalidationError").classList.contains("hide"))
        {
            document.getElementById("gpavalidationError").classList.add("hide");
        }
    }
    // Tsub validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("degree").value == "") {
        isValid = false;
        document.getElementById("degreevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("degreevalidationError").classList.contains("hide"))
        {
            document.getElementById("degreevalidationError").classList.add("hide");
        }
    }
    return isValid;
}