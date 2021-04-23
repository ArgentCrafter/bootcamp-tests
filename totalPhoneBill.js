function totalPhoneBill(phoneStr){
    var phoneList = phoneStr.split(", ");
    var call = 0;
    var sms = 0;
    for (var i=0;i<phoneList.length;i++){
      if (phoneList[i] === "call"){
        
        call++;
      }
      else{
        
        sms++;
        }
    }
        var Answer = (call * 2.75) + (sms * 0.65);
        var Answer = "R" + Answer.toFixed(2);  	
      return Answer;
  };