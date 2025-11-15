/*
INTRO TO JS
*/
        console.log("Hello, World!");
/*
=> Phases of the JavaScript Execution Context

        * Memory Allocation Phase: In this phase, memory is allocated for all variables and  functions (and get stored as a key-value pair inside the memory component of the execution context). 

        * Code Execution Phase: In this phase, the JavaScript code is executed one line at a time as it is single threaded , inside the Code Component (also known as the Thread of Execution).


=> JS variables

        * let and const are block-scoped (limited to { } block) or global-scoped, reducing errors compared to var which is block scoped.

        * We can change elements of array or objects even if declared as const. */
                const ob = { a: 10 };
                ob.a = 20; // Allowed
        /*

=> Output methods

        * alert() : used to show output in form of pop-pop */
                let userName = prompt("Method 1: Please enter your name:");
                alert("Your name is: " + userName); /*
        * console.log(): outputs info in browser console for debugging */
                console.log("meowww"); /*
        * document.write(): use to directly write some content in HTML document */
                let userName1 = prompt("Method 1: Please enter your name:");
                document.wrte("Your name is: " + userName1); /*
        * document.getElementById(): used to update the content of an HTML element (some specific sections of a webpage) with a specific ID */
                document.getElementById("output").innerHTML = "Your name is:" + userName; 