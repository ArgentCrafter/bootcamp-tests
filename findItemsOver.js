function findItemsOver(list, amnt){
    var over = [];
    for (var i=0;i<list.length;i++){
     var current = list[i];
      if (current.qty > amnt) {
          over.push(current);
          }
    }
   return over; 
  };