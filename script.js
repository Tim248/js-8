let users = {};

for (let i = 1; i <= 1; i++) {
    let userName = prompt('Введите имя');
    let userAge = +prompt('Введите возраст');
    users[i] = {
        name: userName,
        age: userAge
    };
}
for (let key in users) {
    console.log(`Пользователь ${key}`);
    for (let newKey in users[key]) {
        console.log(newKey == 'name' ? `Имя ${users[key][newKey]}` : `Возраст ${users[key][newKey]}`);
    }
}
console.log(users);