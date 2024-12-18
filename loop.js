for(let i=1;i<=4;i++){
    console.log(i+"I have  arrived");
}
console.log("loop has ended");
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}
console.log("While loop has ended");
let j=20;
do{
    console.log("running do while loop");
    j++;
}while(j<=10)
let strval="KartikRana";
let lengthi=0;
for(let i of strval){
    console.log("i=",i);
    lengthi++;
}
console.log("length of strVal is:",lengthi);
const student={
    name:"Nikhil Rawat",
    age:21,
    cgpa:8.25,
    isPass:true
}
for(let i in student){
    console.log(i+"="+student[i]);
}
for(let i=1;i<=100;i++){
    if(i%2==0){
       console.log(i);
    }
}
//Random Integer=Math floor Math random ×(max−min))+min
// const gameNum=10
// console.log(gameNum)
// while(1){
//     let userNum=prompt("guess the game Number");
//     if(userNum==gameNum){
//         alert("Bravo! you gueesed it right");
//         break;
//     }
//     else{
//         alert("Try again");
//     }
    
// }
userName=prompt("enter the name");
username=`@${userName}${userName.length}`
alert(username)
console.log(username)


