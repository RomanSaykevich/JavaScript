// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// створити пустий масив, наповнити його 10 об'єктами new User(....)
// const newMasivUsers = [
//     new User(1, 'Вася', 'Пупкін', 'ebat@putina.com', +3899999999),
//     new User(2, 'Катя', 'Бубкін', 'ebat@putina.com', +3888888888),
//     new User(3, 'Ігор', 'Шмига', 'ebat@putina.com', +3877777777),
//     new User(4, 'Даша', 'Трига', 'ebat@putina.com', +3866666666),
//     new User(5, 'Роман', 'Кроп', 'ebat@putina.com', +3855555555),
//     new User(6, 'Ася', 'Дроп', 'ebat@putina.com', +3844444444),
//     new User(7, 'Олег', 'Горд', 'ebat@putina.com', +3833333333),
//     new User(8, 'Настя', 'Лінь', 'ebat@putina.com', +3822222222),
//     new User(9, 'Діма', 'Сон', 'ebat@putina.com', +3811111111),
//     new User(10, 'Юля', 'Шкірка', 'ebat@putina.com', +3800000000)
// ];
// console.log(newMasivUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// const filterUsers = newMasivUsers.filter(value => value.id % 2 === 0);
// console.log(filterUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// const sortUsers = newMasivUsers.sort((a, b) => a.id - b.id);
// console.log(sortUsers);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class clientUser {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client

// const clientMasivUser = [
//     new clientUser(1, 'Вася', 'Пупкін', 'ebat@putina.com', +3899999999, 'mina', 'aka', 'mka', 'tt'),
//     new clientUser(2, 'Катя', 'Бубкін', 'ebat@putina.com', +3888888888, 'bmw', 'mers'),
//     new clientUser(3, 'Ігор', 'Шмига', 'ebat@putina.com', +3877777777, 'antutu', 'amazon', 'netflix'),
//     new clientUser(4, 'Даша', 'Трига', 'ebat@putina.com', +3866666666, 'lostFilm'),
//     new clientUser(5, 'Роман', 'Кроп', 'ebat@putina.com', +3855555555, 'JS', 'React', 'Node', 'HTML', 'CSS', 'Java'),
//     new clientUser(6, 'Ася', 'Дроп', 'ebat@putina.com', +3844444444, 'html', 'css'),
//     new clientUser(7, 'Олег', 'Горд', 'ebat@putina.com', +3833333333, 'monik', 'raptor', 'sunny'),
//     new clientUser(8, 'Настя', 'Лінь', 'ebat@putina.com', +3822222222, 'one', 'two', 'three', 'four', 'five'),
//     new clientUser(9, 'Діма', 'Сон', 'ebat@putina.com', +3811111111, 'a', 'b', 'c', 'd', 'e', 'f'),
//     new clientUser(10, 'Юля', 'Шкірка', 'ebat@putina.com', +3800000000, 'opt')
// ];
// console.log(clientMasivUser);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// const sortClientUser = clientMasivUser.sort((a, b) => a.order.length - b.order.length);
//
// console.log(sortClientUser);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car (model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.maxSpeed = maxSpeed;
//     this.year = year;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log('модель - ${this.model}, ' +
//             'вироник - ${this.producer}, ' +
//             'рік випуску - ${this.year}, ' +
//             'максимальна швидкість - ${this.maxSpeed},  ' +
//             'обєм двигуна - ${this.volume}');
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.drive = driver;
//     };
// }
//
// const Caar = new Car('Запорожець', 'Україна', 2020, 300, 3.0);
// console.log(Caar);
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class classCar {
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//     this.producer = producer;
//     this.maxSpeed = maxSpeed;
//     this.year = year;
//     this.volume = volume;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info () {
//         console.log('модель - ${this.model}, ' +
//             'вироник - ${this.producer}, ' +
//             'рік випуску - ${this.year}, ' +
//             'максимальна швидкість - ${this.maxSpeed},  ' +
//             'обєм двигуна - ${this.volume}');
//     };
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//     changeYear (newValue) {
//         this.year = newValue;
//     };
//     addDriver (driver) {
//         this.drive = driver;
//     };
// }
// const Caar = new classCar('Lada', 'RF', 2021, 70, 0.5);
// console.log(Caar);

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class kazka {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
}

const kazkaa = [
    new kazka('baba1', 17, 29),
    new kazka('baba2', 42, 33),
    new kazka('baba3', 26, 44),
    new kazka('baba4', 34, 47),
    new kazka('baba5', 37, 37),
    new kazka('baba6', 23, 40),
    new kazka('baba7', 29, 50),
    new kazka('baba8', 57, 41),
    new kazka('baba9', 41, 39),
    new kazka('baba0', 19, 38)

];
console.log(kazkaa);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, show) {
        this.name = name;
        this.age = age;
        this.show = show;
    }
}

const prince = new Prince('Prince', 86, 37);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


const love = (princess, prince) => {
    for (const item of princess) {
        if (item.leg === prince.show) {
            return `${item.name}`
        }
    }
}

console.log(love(kazkaa, prince));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const emptyPrincess = kazkaa.find((item) => item.leg === prince.show);
console.log(emptyPrincess);