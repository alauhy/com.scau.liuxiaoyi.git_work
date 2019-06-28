// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
let str = name.toUpperCase();
    console.log(str);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
let str =sentence.split(' ');
let str2 ='';
for(var i in str){
    var char=str[i].charAt(0);
    str[i]=str[i].replace(char,function replace(char){
        return char.toUpperCase();
    })
    str2+=str[i]+" ";
}
console.log(str2);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...

let str = money.split('￥');
console.log(str[1]);

