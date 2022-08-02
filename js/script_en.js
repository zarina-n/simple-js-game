function seasons() {
    let monthNumber = prompt("Enter any month number from 1 to 12");

    if (monthNumber == 12 || monthNumber >= 1 && monthNumber <= 3) {
        alert("Winter!");

    } else if (monthNumber >= 4 && monthNumber <= 6) {
        alert("Spring!");

    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert("Summer!");

    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert("Autumn!");

    } else {
        alert('Oops, wrong number ¯\_( ツ )_/¯ ')
    }
}

function game2() {
    let fruits = ['Apple', 'Pear', 'Mellon', 'Grape', 'Peach', 'Orange', 'Tangerine'];
    alert('Look carefully and remember the words');
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstQuestion = prompt('What was the first fruit?');
    let secondQuestion = prompt('What was the last fruit?');

    if (firstQuestion === fruits[0] && secondQuestion === fruits[fruits.length - 1]) {
        alert('Good job!');

    } if (firstQuestion === fruits[0] && secondQuestion !== fruits[fruits.length - 1] || firstQuestion !== fruits[0] && secondQuestion === fruits[fruits.length - 1]) {
        alert('You were very close');

    } if (firstQuestion !== fruits[0] && secondQuestion !== fruits[fruits.length - 1]) {
        alert('You can try again');
    }
}

function guessARiddle() {
    const question = {
        riddle: "What can run, but can't talk?",
        answer: ["river", "water",],
        hint: ["It has a mouth but never talks and has a head but never weeps", "It has a bed but never sleeps"]
    }


    let userAnswer = prompt(question.riddle);

    if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
        return alert("You're right!");
    } else {
        userAnswer = prompt(question.hint[0]);
        if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
            return alert("You're right!");
        } else {
            userAnswer = prompt(question.hint[1]);
            if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
                return alert("You're right!");
            } else {
                return alert('You guessed wrong')
            }
        }
    }
}
