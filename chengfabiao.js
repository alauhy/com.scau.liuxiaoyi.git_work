var str='';
for(let i =1;i<10;i++){
    for(let j=1;j<=i;j++){
        str+=i+'*'+j+'='+(i*j)+' ';
        if(i===j){
            str+='\n';
        }
    }
}
console.log(str);