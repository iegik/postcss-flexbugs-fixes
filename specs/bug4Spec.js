var test = require('./test');

describe('bug 4', function() {
    it('set flex-basis === 0% for flex-basis with plain 0', function(done) {
        var input = 'div{flex: 1 0 0;}';
        var output = 'div{flex: 1 0 0%;}';
        test(input, output, {}, done);
    });
    it('set flex-basis === 0% for flex-basis with 0px', function(done) {
        var input = 'div{flex: 1 0 0px;}';
        var output = 'div{flex: 1 0 0%;}';
        test(input, output, {}, done);
    });
    it('set flex-basis when second value is not a number', function(done) {
        var input = 'div{flex: 1 50%;}';
        var output = 'div{flex: 1 1 50%;}';
        test(input, output, {}, done);
    });
    describe('does nothing', function() {
        it('when flex-basis with percent is set', function(done) {
            var css = 'div{flex: 1 0 100%;}';
            test(css, css, {}, done);
        });
        it('doen not change auto flex-basis is set explicitly', function(done) {
            var css = 'div{flex: 1 1 auto;}';
            test(css, css, {}, done);
        });
        describe('when flex value is reserved word', function() {
            var stringValues = ['none', 'content', 'inherit', 'unset'];
            stringValues.forEach(function(s) {
                it(s, function(done) {
                    var input = 'div{flex: ' + s + ';}';
                    test(input, input, {}, done);
                });
            });
        });
    });
});
