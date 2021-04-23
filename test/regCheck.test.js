describe('The regCheck function' , function(){
    it('registration ends with given registry code' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

});