describe('The totalPhoneBill function' , function(){
    it('output should equal ' , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });

});