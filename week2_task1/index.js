/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
var hashTags = tweet.split(' '); // разбиваем полученную строку на массив слов
var result = []; // переменная под найденные хэштеги
for (var i = 0; i < hashTags.length; i++) { //цикл по хэштегам
    var allTweets = hashTags[i];
    if (allTweets.indexOf('#') !== - 1) { // по первому символу проверяем является ли слово хэштегом
        allTweets = allTweets.slice(1); // убираем знак решетки и копируем строку
        result.push(allTweets); // сохраняем хэштег
    }
}
return result;
};
