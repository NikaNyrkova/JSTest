// TASK 2
// Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат»:

// удали переменную message;
// удали else;
// код должен работать так же, как и до оптимизации.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
    
//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   } 
//     return 'Доступ запрещен, неверный пароль!';
//   }

//   // Пиши код выше этой строки


// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));


// TASK 3

// Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе;
// ordered - количество единиц товара в заказе.
// Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//     }

//     if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//     return 'Заказ оформлен, с вами свяжется менеджер';
//   // Пиши код выше этой строки
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// TASK 8

// Объяви две перемнные:

// Имя переменной	Ожидаемое значение
// lastElementIndex	индекс последнего элемента масcива fruits через длина_массива - 1
// lastElement	значение последнего элемента массива

// Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// TASK 9
// Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//     const firstElement = array[0];
//     const lastElement = array[array.length - 1];

//     return [firstElement, lastElement]

//     // Пиши код выше этой строки
// }
  
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Земля', 'Марс', 'Венера']));
// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));


// TASK 10
// Теория
// Метод split(delimeter) позволяет превратить строку в массив, «разбив» его по разделителю delimeter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// const name = 'Манго';
// console.log(name.split('')); // ['M', 'a', 'н', 'г', 'о']

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']

// Дополни код функции splitMessage(message, delimeter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimeter - массив строк.

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//     words = message.split(delimeter);
  
  
//   // Пиши код выше этой строки
//   return words;
// }

// console.log(splitMessage('Манго спешит на поезд', ' '));
// console.log(splitMessage('Манго', ''));
// console.log(splitMessage('лучшее_за_неделю', '_'));


// TASK 11
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//     const number = message.split(' ').length;
//     const totalPrice = number * pricePerWord;

//     return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 40));
// console.log(calculateEngravingPrice('Веб-разработка это творческая работа', 20));


// TASK 12
// Метод массива join()

// Метод массивов join(delimeter) позволяет соединить элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimeter. То есть это операция обратная методу строк split(delimeter).

// const words = ['JavaScript', 'это', 'интересно'];
// console.log(words.join('')); // 'JavaScriptэтоинтересно'
// console.log(words.join(' ')); // 'JavaScript это интересно'
// console.log(words.join('*')); // 'JavaScript*это*интересно'

// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки
//     string = array.join(delimeter);

//   // Пиши код выше этой строки
//   return string;
// }

// console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
// console.log(makeStringFromArray(['М', 'а', 'н', 'г', 'о'], ''));
// console.log(makeStringFromArray(['лучшее', 'за', 'неделю'], '_') );


// TASK 13
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

// function slugify(title) {
//   // Пиши код ниже этой строки
//     return title.toLowerCase().split(' ').join('-');
//   // Пиши код выше этой строки
// }

// console.log(slugify('Массивы для новичков'));
// console.log(slugify('Английский для разработчика'));
// console.log(slugify('Десять секретов JavaScript'));
// console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));


// TASK 14
// Метод slice()

// Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

// Если begin и end не указаны, будет создана полная копия исходного массива.
// Если не указан end, копирование будет от start и до конца исходного массива.
// Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'];

// console.log(planets.slice(0, 2)); // ['Земля', 'Марс']
// console.log(planets.slice(0, 4)); // ['Земля', 'Марс', 'Венера', 'Юпитер']
// console.log(planets.slice(1, 3)); // ['Марс', 'Венера']
// console.log(planets.slice(-2)); // ['Юпитер', 'Сатурн']
// console.log(planets.slice()); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн']

// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// TASK 15

// Метод concat()
// Метод concat используется для объединения двух или более массивов. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.
// const firstArray = ['Меркурий', 'Венера', 'Земля'];
// const secondArray = ['Марс', 'Юпитер'];
// const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Меркурий', 'Венера', 'Земля'];
// console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];

// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку
// console.log(allClients);


// TASK 16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.

// Объявлена функция makeArray(firstArray, secondArray, maxLength)
// Вызов makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3) возвращает ['Манго', 'Поли', 'Аякс'].
// Вызов makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4) возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// Вызов makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3) возвращает ['Манго', 'Аякс', 'Челси'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2) возвращает ['Земля', 'Юпитер'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4) возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// Вызов makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0) возвращает [].
// Вызов функции makeArray() со случайными массивами и случайным числом возвращает правильный массив.

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//     const newArray = firstArray.concat(secondArray);

//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength)
//     }

//     return newArray
    
//     // Пиши код выше этой строки
// }
  
// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));
// console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));
// console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 2));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4));
// console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0));
// // console.log(makeArray());


// TASK 17
// Цикл for
// Циклы используются для многократного повторения кода. Объявление цикла for состоит из трёх выражений.

// for (Инициализация; Условие; Пост-выражение) {
//   // Тело цикла
// }
// Инициализация - выполняется один раз перед началом цикла. Используется для создания переменной-счётчика и указания её начального значения.
// Условие - выражение, оцениваемое перед каждой итерацией (повторением) цикла. Тело цикла выполняется только тогда, когда выражение приводится к true. Цикл завершается, если значение будет false.
// Пост-выражение - выполняется в конце каждого повторения цикла, перед проверкой условия. Используется для обновления переменной-счётчика.
// Тело - набор инструкций для выполнения на каждом повторении. Выполняется, если выражение условия приводится к true.
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В примере объявляется переменная i, инициализируется значением 0 и цикл выполняется (его тело) до тех пор, пока i <= 20, то есть условие приводится к true. После каждой итерации счётчик увеличивается на 5.

// Функция logNumbersInRange(start, end) логирует все целые числа в диапазоне от start до end включительно.Дополни тело функции так, чтобы она работала правильно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// TASK 18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//     let total = 0;

//     for (let i = 1; i <= number; i += 1) {
//         total += i;
//     }

//     return total

//   // Пиши код выше этой строки
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(24));


// TASK 19
// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

// const planets = ['Земля', 'Марс', 'Венера'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.


// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// TASK 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i]
//     }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// TASK 21
// Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//     const arrayString = string.split(' ');
//     // console.log(arrayString);
//     let longestWord = arrayString[0];

//     for (let i = 0; i < arrayString.length; i += 1) {
//         const element = arrayString[i];
//         // console.log(element);

//         if (element.length > longestWord.length) {
//             longestWord = element
//         }
//     }
//        return longestWord;

//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));


// TASK 22
// Метод push()
// Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.

// const planets = ['Земля', 'Марс', 'Венера'];
// planets.push('Юпитер');
// planets.push('Сатурн', 'Уран', 'Нептун');

// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн', 'Уран', 'Нептун']

// Дополни код функции createArrayOfNumbers(min, nax) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//     for (let i = min; i <= max; i += 1) {
//         numbers.push(i);
//     }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// TASK 23
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел(параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value(число).

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//     let newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         // console.log(numbers[i]);
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }
//     return newArray;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));

// TASK 24
// Метод includes()
// Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

// const planets = ['Земля', 'Марс', 'Венера'];

// console.log(planets.includes('Земля')); // true
// console.log(planets.includes('земля')); // false
// console.log(planets.includes('Венера')); // true
// console.log(planets.includes('Юпитер')); // false

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
// Дополни код функции так, что если:
// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// console.log(checkFruit('слива'));
// console.log(checkFruit('Груша'));
// console.log(checkFruit('груша'));


// TASK 25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//     const commonElement = [];

//     for (let i = 0; i < array1.length; i += 1) {
//         const element = array1[i];

//         if (array2.includes(element)) {
//             commonElement.push(element)
//         }
//     }

//     return commonElement;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));


// TASK 26
// Цикл for...of
// Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.

// for (const variable of iterable) {
//   // тело цикла
// }
// variable — переменная, которая будет хранить значение элемента на каждой итерации.
// iterable — коллекция, которая имеет перечислимые элементы, например массив.
// const planets = ['Земля', 'Марс', 'Венера'];

// for (const planet of planets) {
//   console.log(planet);
// }

// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const price of order) {
//     total += price;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// TASK 27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));


// TASK 28
// Оператор %
// Вместо того, чтобы возвращать результат деления, операция по модулю (%) возвращает целочисленный остаток от деления двух чисел - делимого и делителя.

// 5 % 1 = 0
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0
// //  5, разделенное на 5, равно 1, а остаток - 0

// Дополни выражения остатка от деления так, чтобы код проходил тесты.
// Тесты
// Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// TASK 29
// Проверка на четность
// function isEven (num) {
//   return num % 2 === 0;
// }

// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
    
//     return evenNumbers;
//     // Пиши код выше этой строки
// } 
// console.log(getEvenNumbers(3, 11));


// TASK 30
// Оператор break
// Прервать выполнение цикла можно в любой момент. Для этого сущестует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
// В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }
// console.log('Лог после цикла');

// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }


// TASK 31
// Оператор break vs return в функции
// Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.

// В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log('Нашли число 3, делаем возврат, прерывая цикл и функцию');
//       return i;
//     }
//   }
//   // Этот console.log не выполнится
//   console.log('Лог после цикла в теле функции');
// }
// const result = fn();
// console.log('Лог после выхода из функции');
// console.lof(`Результат выполнения функции ${result}`);


// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//     //   number = i;
//     //   break;
//         return i;
//     }
//   }

//   return number;
//   // Пиши код выше этой строки
// }


// TASK 32
// Функция includes()
// Задание
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// function includes(array, value) {
//   // Пиши код ниже этой строки

//     for (let i = 0; i < array.length; i += 1) {
//         // console.log(array[i]);
//         // console.log(array[i] === value);

//         if (array[i] === value) {
//             return true;
//         }
//     }
//           return false;
//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));