describe('The countAllFromTown function' , function(){
    it('output should be 3' , function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"), 3);
    });

});