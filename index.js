// 1. Пользователь вводит год своего рождения, вывести
// информацию о возрасте пользователя в разные года
// до текущего. Например, вводим «2003». Вывод: «в
// 2003 было 1 год», «в 2004 было 2 год», «в 2005 было
// 3 год» и т.д.


let yearOfBirth = prompt("ввести год вашего рождения!")
let currentYear = 2024;

if (!isNaN(yearOfBirth)) {
    yearOfBirth = Number(yearOfBirth);
}

for (let i = yearOfBirth; i <= currentYear; i++) {
    let age = i - yearOfBirth;
    console.log(`в ${i} было ${age} лет`)
}



// 2. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.    


let firstNumber = prompt("введите первое число");
if (!isNaN(firstNumber)) { firstNumber = Number(firstNumber); }
for (let i = 0; i < 4; i++) {
    let nextNumber = prompt("введите число больше предыдущего");
    if (!isNaN(nextNumber)) { nextNumber = Number(nextNumber); } 
    if (nextNumber <= firstNumber) (
        console.log(alert("ошбка")))
}









