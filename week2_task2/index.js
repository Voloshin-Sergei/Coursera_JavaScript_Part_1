/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
var result = []; // создаем массив для результирующего списка хэштегов
for (var i = 0; i < hashtags.length; i++) {
if (result.indexOf(hashtags[i].toLowerCase()) ==-1 ) { // приводим хэштег к нижнему регистру и сравниваем на повторение
result.push(hashtags[i].toLowerCase());
}
}
return result.join(', ');
};
