// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

var commandName = command.split(' ')[0]; // Получаем комнаду, она  лежит в нулевой позиции массива

// Проверяем команды
if (commandName === 'ADD') { // Обработка команд ADD
    var name = command.split(' ')[1];
    var phones = command.split(' ')[2];
    return addContact(name, phones); // Вернем результат выполнения функции addContact
};

if (commandName === 'REMOVE_PHONE') { // Обработка команд REMOVE_PHONE
    var phoneRemove = command.split(' ')[1];
    return removePhoneContact(phoneRemove); // Вернем результат выполнения функции removePhoneContact
};

if (commandName === 'SHOW') { // Обработка команд SHOW
    return show(); // Вернем результат выполнения функции show
};

function addContact(name, phones) { // Функция которая добавляет контак
    var arrayPhone = phones.split(','); // Разделим строку phones на массив строк
    var numbersPhone;// Массив номеров телефонов
    if (phoneBook.hasOwnProperty(name)) { // Проверяем содержит ли объект phoneBook свойство с именем name
        numbersPhone = phoneBook[name].concat(arrayPhone); // Возвращаем новый массив, состоящий из массива arrayPhone и соединённого со значениями из свойства с именем name
        phoneBook[name] = numbersPhone; // Добавляем свойству с именем name объекта phoneBook значения
    } else {
    phoneBook[name] = arrayPhone;
    }
return;
};
    
function removePhoneContact(PhoneRemove) { // Функция удаляет номер из телефонной книги
    for (let key in phoneBook) { // Переберем каждый ключ объекта по очереди
    if (phoneBook[key].includes(phoneRemove)) { // Проверим содержит ли значения свойства объекта элемент PhoneRemove( возвращая в зависимости от этого true или false)
    // Если значений в свойстве объекта больше чем 1 элемент
    // Методом indexOf() возвращает первый индекс, по которому данный элемент может быть найден в свойстве объекта
    // Методом splice() изменим содержимое в свойстве объекта (1й параметр вернувщийся идекс, 2й параметр колличество удаления элементов)
    if (phoneBook[key].length > 1) {
        phoneBook[key].splice((phoneBook[key].indexOf(phoneRemove)),1);
    }
    else {
    delete phoneBook[key]; //Иначе просто удаляем свойство
    };
    return true; // Вернем true если телефон успешно удален
    };
};
return false; // Вернем false - такого телефона не существует
};

function show() { // Функция возвращает содержимое массива
    var stringArray = []; // Переменная будет хранить отсортированный по имени контактов массив
    var keys = Object.keys(phoneBook); // Получаем список всех контактов
    keys.sort(); // Сортируем имена (функция sort меняет массив)
    if (keys.length > 0) { // Проверяем колличесво контактов
    for (var i = 0; i < keys.length; i++) { // Тут для итерации по контактам используем цикл
        var resultString = keys[i] + ': ' + phoneBook[keys[i]].join(', '); // Формируем строчку для контакта
        stringArray.push(resultString); // Добавляем в массив stringArray
    }
    return stringArray;
    }
    else {
        return stringArray;
    }
};
};
