describe('The countRegNumber function' , function(){
    it('output should be 3' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });

});