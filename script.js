let users = {
}

for (let i = 1; i < 11; i++) {
    let userName = prompt('Введите имя');
    let userAge = +prompt('Введите возраст');
    users[i] = {name: userName, age: userAge}
} 
console.log(users);