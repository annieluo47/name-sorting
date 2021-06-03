The script begins by defining two variables with the "var" keyword: "numberNames" is a counter that increments as each name is added, and the names array stores the names.

When you type a name into the text field and click the button, the "onclick" event handler calls the "sortNames" function. This function stores the text field ivalue ina variable, "theName", and then adds the name to the "names" array using "numberNames" as the index. It then increments "numberNames" to prepare for the next name.

The final section of the script sorts the anmes and displays them. FIrst the sort() method is used to sort the "names" array. Next, the join() method is used to combine the names, separating them with line breaks, and display them in the textarea. 
 