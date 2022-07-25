let name= prompt("Укажите свое имя? ");
let age = +prompt('Укажите свой год рождения? ')
let year = +prompt('Укажите текущий год? ')

function abc() {
    let a = year-age;
    return a;
}

alert('Вас зовут '+name+' вам '+abc()+' лет.');