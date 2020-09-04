/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
var hashTags = tweet.split(' ');
var result = [];
for (var i = 0; i < hashTags.length; i++) {
    var allTweets = hashTags[i];
    if (allTweets.indexOf('#') !== - 1) {
        allTweets = allTweets.slice(1);
        result.push(allTweets);
    }
}
return result;
};
