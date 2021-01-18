// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// pricePerDroid - цена одного дроида, значение 800;
// orderedQuantity - количество дроидов в заказе, значение 6;
// deliveryFee - стоимость доставки, значение 50;
// totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message);


// function isAdult(age) {
//   // Пиши код ниже этой строки
//   const passed = (age >= 18);

//   // Пиши код выше этой строки
//     return passed;
// }

// задача18
// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// pricePerDroid - цена одного дроида;
// orderedQuantity - кол-во заказанных дроидов;
// customerCredits - сумма средств на счету клиента.
// Дополни её следующим функционалом:

// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//     const totalPrice = pricePerDroid * orderedQuantity;

//     if (totalPrice > customerCredits) {
//         message = 'Недостаточно средств на счету!';
//     } else {
//         customerCredits -= totalPrice;
//         message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
//     }

//   // Пиши код выше этой строки

//     return message;
// }

//     console.log(makeTransaction(3000, 5, 23000));

// ЗАДАЧА 19
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }


// ЗАДАЧА 20
// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//     if (ordered === 0) {
//         message = 'В заказе еще нет товаров';
//     } else if (ordered > available) {
//         message = 'Слишком большой заказ, на складе недостаточно товаров!';
//     } else {
//         message = 'Заказ оформлен, с вами свяжется менеджер';
//     }

//   // Пиши код выше этой строки
//   return message;
// }


// 2121212121
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // дополни эту строку

//   return isInRange;
// }


// 2222222222222
// Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // дополни эту строку

//   return canAccessContent;
// }


// 23232323232323
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Дополни эту строку

//   return isNotInRange;
// }


// 24242424242424
// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// Используя ветвления и логические операторы, дополни код функции.

// Если потрачено от 50000 или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
//     if (totalSpent < 5000) {
//         discount = BASE_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else {
//         discount = GOLD_DISCOUNT;
//     }

//   // Пиши код выше этой строки
//   return discount;
// }

// 25252525252525
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки

//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//     }
//     решение
//     message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';


//   // Пиши код выше этой строки
//   return message;
// }

// 262626262626
// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// В противном случае, присвой message строку 'Доступ запрещён, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
//     message = password === ADMIN_PASSWORD ? 'Доступ разрешен' : 'Доступ запрещён, неверный пароль!';

//   // Пиши код выше этой строки
//   return message;
// }

// 2727272772727
// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// Если значение параметра type это строка:

// 'starter' - цена подписки 0 кредитов.
// 'professional' - цена подписки 20 кредитов.
// 'organization' - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.
// if (type === 'starter') {
//   price = 0;
// } else if (type === 'professional') {
//   price = 20;
// } else if (type === 'organization') {
//   price = 50;
// }

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter': // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

// 282828282828
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//     switch (password) {
//         case null:
//             message = 'Отменено пользователем!';
//             break;
        
//         case ADMIN_PASSWORD:
//             message = 'Добро пожаловать!';
//             break;
        
//         default:
//             message = 'Доступ запрещён, неверный пароль!';  
//   }

//   return message;
// }

// 29299292929
// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// Список стран и стоимость доставки:

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Ямайка - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//     switch (country) {
//       case 'Китай':
//         message = `Доставка в ${country} будет стоить 100 кредитов`;
//         break;
//       case 'Чили':
//         message = `Доставка в ${country} будет стоить 250 кредитов`;
//         break;
//       case 'Австралия':
//         message = `Доставка в ${country} будет стоить 170 кредитов`;
//         break;
//       case 'Ямайка':
//         message = `Доставка в ${country} будет стоить 120 кредитов`;
//         break;
    
//       default:
//         message = 'Извините, в вашу страну доставки нет';
//     }

//   // Пиши код выше этой строки
//   console.log(message);
//   return message;
 
// }

// getShippingCost('Австралия');

// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);



// 323232323323232
// Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.
// пример
// const productName = 'Ремонтный дроид';
// console.log(productName.slice(0, 4)); // 'Ремо'
// console.log(productName.slice(3, 9)); // 'онтный'
// console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
// console.log(productName.slice(10, productName.length)); // 'дроид'


// Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов(от начала) из строки string.


// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }


// 3333333333333333333333

// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.

// function formatMessage(message, maxLength) {
//   let result;
// // Пиши код ниже этой строки
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }

// // Пиши код выше этой строки
//   console.log(result);
//   return result;
// }

// formatMessage('Curabitur ligula sapien', 16)


// переменная.toLowerCase()
// переменная.toUpperCase()


// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае.Регистр символов в строке и подстроке имеет значение, так как например буква 'a' не равна букве 'А'.

// Пример:
// const productName = 'Ремонтный дроид';

// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроид')); // true
// console.log(productName.includes('Дроид')); // false
// console.log(productName.includes('Ремонтный')); // true
// console.log(productName.includes('ремонтный')); // false


// 34343434343434343434

// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени(параметр name), в полное имя(параметр fullname).Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Дополни эту строку
//   return result;
// }


// 3636363663636
// Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещённых слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещённое слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещённых слов, функция возвращает буль false.

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
 
//   // Пиши код выше этой строки
//   return result;
// }


// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// Итерация по массиву
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }