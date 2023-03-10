// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
// const num = +prompt("Введите число")
// console.log(num * 10 / 100)

//Написать программу, которая получает два числа и выводит наименьшее
// const firstNum = +prompt("Write first number")
// const secondNum = +prompt("Write second number")

// if (firstNum > secondNum) {
//     console.log(secondNum)
// } else {
//     console.log(firstNum)
// }

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
// const num = +prompt("Введите число")

// if (num < 100) {
//     console.log('Число меньше 100')
// } else if (num > 100) {
//     console.log('Число больше 100')
// } else {
//     console.log('Число равно 100')
// }

//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если пользователь несовершеннолетний.
// const userName = prompt("Write your name")
// const userAge = +prompt("Write your age")

// if (userAge >= 18) {
//     // console.log("Hello, " + userName) // concatenation
//     console.log(`Hello, ${userName}`) // interpolation
// } else {
//     console.log(`Hi, ${userName}`)
// }

//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
// for(let index = 0; index <= 10; index += 2) {
//     console.log(index)
// }

//Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// for(let index = 55; index >= 20; index--) {
//     console.log(index)
// }

//Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];

// for (let index = 0; index < numbers.length; index++) {
//     console.log(numbers[index]);
// }

//Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// const numbers_squared = []

// for (let index = 0; index < numbers.length; index++) {
//     numbers_squared.push(numbers[index]**2)
// }

// console.log(numbers);
// console.log(numbers_squared);

//Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)

// const last_elem = numbers_squared[numbers_squared.length - 1]
// console.log(last_elem)

//Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
}

console.log(`User's name is ${user.first_name} ${user.last_name}. He is ${user.age} years old.`)