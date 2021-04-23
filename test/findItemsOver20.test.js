describe('The findItemsOver20 function' , function(){
    it('output should be [{"name":"pears","qty":37}]' , function(){
        assert.deepEqual(findItemsOver20([{"name":"pears","qty":37}]), [{"name":"pears","qty":37}]);
    });

});