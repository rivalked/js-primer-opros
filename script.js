

/*


function iconsGenerator(length) {
    var empty = '';
    var char = '*+/-';
    var charParams = char.length;
    for (var i= 0; i<length; i++){
        empty += char.charAt(Math.floor(Math.random()*charParams));

    }
    return empty;
}

console.log(iconsGenerator(1));

function numsGenerator(length) {
    var empty = '';
    var char = '123456789';
    var charParams = char.length;
    for (var i= 0; i<length; i++){
        empty += char.charAt(Math.floor(Math.random()*charParams));

    }
    return empty;
}

console.log(numsGenerator(1)+iconsGenerator()+numsGenerator());
*/

/*
// let num = +prompt('Введите кол-во примеров которое хотите решить: ');

// while (isNaN(num) || num == 0) {
//     num = 5
// }

// for (let i = 0; i < num; i++) {
//     if(i == 0){
//         function random() {
//     return Math.floor(Math.random()*1)
//         }
//     }

    console.log(Math.floor(Math.random( )+1));

    */



// console.log(random());

// function random(min, max) {
//     return Math.floor(Math.random() * max + min)
// }

// function random() {
//     return (console.log(Math.floor(Math.random() * 20))+iconsGenerator()+console.log(Math.floor(Math.random() * 20)))
// }





/////////////////////////////////////////////////////////////////////////////////////////


// var caseOne = +prompt('Сколько примеров выхотите решить? ');
// function random(max) {
//     return Math.floor(Math.random() * Math.floor(max));

// }




// let num = +prompt('Введите кол-во примеров которые хотите решить?');
// function rand(max){
//          return Math.floor(Math.random() * Math.floor(max));
//      }

// var a

// while (isNaN(num) || num == 0) {
//     num = 5
// }

// do {
//     var sym = prompt('Введите символ отступов')
// } while (sym == '')

// do {
//     var finalSym = prompt('Введите конечный символ')
// } while (finalSym == '')

// for (let i = 0; i < num; i++) {
//     // if(i == 0) {
//     //     finalSym = finalSym
//     // }else {
//     //     finalSym = sym + finalSym
//     // }
//     finalSym = i == 0 ? finalSym : sym + finalSym
//     console.log(finalSym);
// }

/*
/////////////////////////////////////////////////////
var one=+prompt('Сколько примеров  хотите решить?');

function random(max) {
    return Math.floor(Math.random()*max+1);
}

var max = 11;
var two = random(max);
var three = random(max);

for (i=0; i<one; i++){
    if (two>=0 && three>=5){
        var sum = b+c;
        var four = prompt("Решите пример: " +b+'+'+c+'=');
    }
    else if (two>=6 && three<=10){
        var sum = b*c;
        var four = prompt("Решите пример: " +b+'+'+c+'=');
    }
    if (sum==four){
        alert('Правильно- '+sum);
    }
    else{
        alert('Не правильно- ' + d  + " Верный ответ - " + sum);
    }
}

*/
//////////////////////////////////////////////////









var a = +prompt('Сколько примеров вы хотите решить?');

 
for (i=0; i<a; i++) { 
    function random(){
        return Math.floor(Math.random() * Math.floor(max));
    
    }

    var max = 11;
    var b = random(max);
    var c = random(max);
    
    if (b < 5 && c < 3) {
        var sum = b + c;
        var d = prompt("Решите пример: " + b + "+" + c + "=");
        /*let e = (b+c) ==sum ? 'Правильно - '+d : "Не правильно - "+d+"Ответ - " + sum + "!";
        alert(e);*/
    } else if (b >= 5 && b < 10 || c >= 3 && c < 6) {
        var sum = b - c;
        var d = prompt("Решите пример: " + b + "-" + c + "=");
        /*let e = (b-c) ==sum ? 'Правильно - '+d : "Не правильно - "+d+"Ответ - " + sum + "!";
        alert(e);*/
    } else if (b >= 10 && b < 15 || c >= 6 && c < 10) {
        var sum = b * c;
        var d = prompt("Решите пример: " + b + "*" + c + "=");
        // let e = (b*c) ==sum ? 'Правильно - '+d : "Не правильно - "+d+"Ответ - " + sum + "!";
        // alert(e);
    } else if (b >= 15 && b < 20 || c >= 2 && c < 5) {
        var sum = b / c;
        var d = prompt("Решите пример: " + b + "/" + c + "=");
        /* var e = (b/c) ==sum ? 'Правильно - '+d : "Не правильно - "+d+"Ответ - " + sum + "!";
         alert(e);*/
    }
    if (sum==d){
        alert('Правильно- '+sum);
    }
    else{
        alert('Не правильно- ' + d  + " Верный ответ - " + sum);
    }

    
    
}
