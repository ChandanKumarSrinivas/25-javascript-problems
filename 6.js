function getCount(str) {
    var count=0;
    str.split("").forEach(function(a){
      if(a=='a'||a=='e'||a=='i'||a=='o'||a=='u'){
        count+=1;
      }
    });
    return count;
  }