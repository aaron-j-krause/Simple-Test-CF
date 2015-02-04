var expect = require('chai').expect;
var app = require('../lib/greet');

describe('Greet', function() {
  describe('#greet()', function() {

    it('should admonish user for an empty input', function() {
      var results = app.greet();

      expect(results).to.contain('breh');
    });

    it('Should use the passed in name', function() {
      var results = app.greet('Dave');

      expect(results).to.equal('Hello, Dave I\'m Node.');
    });
    describe('should use process.argv', function() {
      var args;
      before(function() {
        args = process.argv;
        process.argv = ['node', 'somefile.js', 'Dave'];
      });

      after(function() {
        process.argv = args;
      });

      it('should get a name from process.argv' , function() {
        var results = app.greet();

        expect(results).to.equal('Hello, Dave I\'m Node.');
      });
    });

  });

});
