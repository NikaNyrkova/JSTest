import users from './users.js';
// Task 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithEyeColor = (users, eyeColor) => users.filter(user => user.eyeColor === eyeColor);
// console.log(getUsersWithEyeColor(users, 'blue'))

// Task 4

// Получить массив только неактивных пользователей (поле isActive).
// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getInactiveUsers = (users) => users.filter(user => !user.isActive)


// Task 5 

// Получить пользователя (не массив) по email (поле email, он уникальный).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// Task 7 

// Получить общую сумму баланса (поле balance) всех пользователей.
// console.log(calculateTotalBalance(users)); // 20916

// const calculateTotalBalance = users => users.reduce((acc, elem) => {
//     return acc + elem.balance;
// }, 0);




// Массив имен всех пользователей у которых есть друг с указанным именем.
// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]




// Task 11

// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, 
// в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:
// для arr = [ 1, 2, 3, 4, 5 ]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.



