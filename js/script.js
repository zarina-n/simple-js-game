function seasons() {
    let monthNumber = prompt("Введите номер месяца с 1 до 12");

    if (monthNumber == 12 || monthNumber >= 1 && monthNumber < 3) {
        alert("Зима!");

    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert("Весна!");

    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert("Лето!");

    } else if (monthNumber >= 9 && monthNumber <= 11) {
        alert("Осень!");

    } else {
        alert('Неправильнвй номер ¯\_( ツ )_/¯ ')
    }
}

function game2() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    alert('Внимательно посмотрите на слова');
    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstQuestion = prompt('Какой фрукт был первый?');
    let secondQuestion = prompt('Какой фрукт был последний?');

    if (firstQuestion === fruits[0] && secondQuestion === fruits[fruits.length - 1]) {
        alert('Отлично!');

    } if (firstQuestion === fruits[0] && secondQuestion !== fruits[fruits.length - 1] || firstQuestion !== fruits[0] && secondQuestion === fruits[fruits.length - 1]) {
        alert('почти угадали');

    } if (firstQuestion !== fruits[0] && secondQuestion !== fruits[fruits.length - 1]) {
        alert('Можете попробовать еще раз');
    }
}

function guessARiddle() {
    const question = {
        riddle: "Что может бежать, но не может говорить?",
        answer: ["река", "вода",],
        hint: ["Течет, течет - не вытечет, Бежит, бежит - не выбежит. ", "День и ночь шумит, а голос не устает."]
    }


    let userAnswer = prompt(question.riddle);

    if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
        return alert("Все верно!");
    } else {
        userAnswer = prompt(question.hint[0]);
        if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
            return alert("Все верное!");
        } else {
            userAnswer = prompt(question.hint[1]);
            if (userAnswer === question.answer[0] || userAnswer === question.answer[1]) {
                return alert("Все верно!");
            } else {
                return alert('Не угадали')
            }
        }
    }
}
