function instantiateBookmarks() {
    var taskListArray = document.querySelectorAll("#taskText");
    for (var i = 0; i < taskListArray.length; i++) {
        var taskListObject = new Task(taskListArray[i].innerText);
        allTasksArray.push(taskListObject);
    }
}