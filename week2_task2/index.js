/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
var result = [];
for (var i = 0; i < hashtags.length; i++) {
if (result.indexOf(hashtags[i].toLowerCase()) ==-1 ) {
result.push(hashtags[i].toLowerCase());
}
}
return result.join(', ');
};
