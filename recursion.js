target = []
function findSolution(target) {
    debugger;
    console.log('Button clicked');



    alert('Please enter a number => 2')
    var target = Number(prompt("Number:"));
    alert((target === "" || isNaN(target || target < 2)) ? "Enter a valid number!" : `${target.toFixed(2)}`);

    if (!target) {
        console.log(alert('Goodbye, and thanks for trying the calculator')); //leaving two blanks will exit the loop of asking for numbers
        return;
    } else {
        let i = 0;

        do {
            i += 1;
            function find(current, history) {
                if (current == target) {
                    return history;
                } else if (current > target) {
                    return null;
                } else {
                    return find(current + 5, `(${history} + 5)`) ||
                        find(current * 3, `(${history} * 3)`);

                }
            }

        }

        while (i < 4);
    }
    return find(1, "1");
}

alert('Solution is ' + findSolution(target));

console.log(findSolution(target));
alert(findSolution(target));


alert("Thanks for visiting")
