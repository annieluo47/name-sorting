// initialize the counter and the array
var numberNames = 0;
var names = new Array();

function SortNames () {
    // get the name from the text field
    theName = document.theForm.newName.value;
    // add the name to the array
    names[numberNames] = theName;
    // increment the counter
    numberNames++;
    // sort the array
    names.sort();
    document.theForm.sorted.value = names.join("\n");
}

// notes ***
// the var numberNames is a counter that increments when each new new is added.
// the var names is an array that stores the name.
// theName is a variable that stores the names entered in the textbox and adds to the array.
// newName = the textarea input to add a new 
// theForm = the name assigned to <form> in index.html