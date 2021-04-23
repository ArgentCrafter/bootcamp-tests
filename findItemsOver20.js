function findItemsOver20(list){
    var over20 = [];
    for (var i=0;i<list.length;i++){
      var current = list[i];
      if (current.qty > 20){
       over20.push(current); 
      }
    }
    return over20;
  };