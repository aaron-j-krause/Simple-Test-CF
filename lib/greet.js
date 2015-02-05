exports = module.exports = {};

exports.greet = function(name) {
  var string;
  if (process.argv.length > 2) {name = process.argv.slice(2).join(' ');}

  if (typeof name == 'undefined') {
    string = 'Gotta at least punch something in, breh';
  } else {
    string = 'Hello, ' + name + ' I\'m Node.';
  }
  console.log(string);
  return string;
};
