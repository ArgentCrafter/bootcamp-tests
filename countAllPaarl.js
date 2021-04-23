function countAllPaarl(regString){
    var regList = regString.split(", ");
    var regAnswer = 0;
    for (var i=0;i<regList.length;i++){
      if (regList[i].startsWith("CJ")){
        regAnswer++;
      }
    }
    return regAnswer;
  };