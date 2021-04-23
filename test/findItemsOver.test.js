describe('The findItemsOver function' , function(){
    it('output should be [{"name":"apples","qty":10}' , function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10}], 5), [{"name":"apples","qty":10}]);
    });

});