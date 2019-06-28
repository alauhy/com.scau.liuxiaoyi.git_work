function reverseString(message){
    // wirte your code here
    var j=[];
    for(var i in message){
         j.push(message.charAt(i));
    }
    j.reverse();
    var str="";
    for(var i in j){
        str+=j[i];
    }
    console.log(str);
  }
  reverseString('hello'); // should return 'olleh'

  function palindrome(message){
      if(message.length%2==0){
          for(var i =0;i<=message.length/2;i++){
              if(message[i]!=message[message.length-1-i]){
                    return false;
              }
          }
          return true;
      }
      else   for(var i =0;i<=(message.length-1)/2;i++){
        if(message[i]!=message[message.length-1-i]){
              return false;
        }
    }
    return true;
    // wirte your code here
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true

  function alphabetSort(message){
    // wirte your code here
    var j=[];
    for(var i in message){
         j.push(message.charAt(i));
    }
    j.sort();
    var str="";
    for(var i in j){
        str+=j[i];
    }
    console.log(str);
  }
  alphabetSort('hello'); // should return 'ehllo'

  function countWords(message){
    // wirte your code here
    var i =message.split(" ");
    console.log(i.length);
  }
  countWords('Good morning, I love JavaScript.'); // should return 5
