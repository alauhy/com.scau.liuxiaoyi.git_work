var user={
    name:"John",
    surname:"Mike"
};
console.log(user.name);
user.name="Peter";
console.log(user.name);
delete user.name;
console.log(user);

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
    // write your code here...
    var count=0;
for(var i in fruit){
 count+=fruit[i];
}
console.log(count);