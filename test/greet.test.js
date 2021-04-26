describe('The Greet function' , function(){
    it('When given "Jaden", output should be "Hello, Jaden"' , function(){
        assert.equal(greet('Jaden'),"Hello, Jaden");
    });
    it('When given "Dyllan", output should be "Hello, Dyllan"' , function(){
        assert.equal(greet('Dyllan'),"Hello, Dyllan");
    });
    it('When given "Steven", output should be "Hello, Steven"' , function(){
        assert.equal(greet('Steven'),"Hello, Steven");
    });
});

/*describe('' , function(){
    it('' , function(){
        assert.equal();
    });

});*/