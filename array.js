let marks=[85,97,44,37,76,60];
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log("average marks is :",sum/marks.length);


let prices=[250,645,300,900,50];
let j=0;
for(let i of prices){
    prices[j]=i-i/10;
    j++;
}
console.log(prices)

let arr=[1,2,3,4,5,25,26];
arr.splice(2,1);
console.log(arr);

let companies=["Bloomberg","Microsoft","Google","Uber","IBM","Netflix"]
