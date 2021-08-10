//1. Print 1-255
for(i=0;i<256;i++){
    document.getElementById(`one`).innerHTML+=`${i}, `
}
document.getElementById(`code1`).innerHTML+=`
    <p>
    for(i=0;i<256;i++){
        document.getElementById('one').innerHTML+='$(i), '
    }
`

// 2. Print Sum 0-255
function printSum1to255(){
    var sum=0;
    for (num=0;num<=10;num++){
        sum+=num;
        document.getElementById(`two`).innerHTML+=`<p>New Number: ${num} | Sum: ${sum}</p>`
    }
    document.getElementById(`two`).innerHTML+=`<p>Go change the for loop to 255 on the basic13.js for the full thing. Would've taken too much space.`
}
printSum1to255();

// 3. Find and Print Max
function printMax(){
    let array=[3,6,4,74,23,6,12,5,84,2,42];
        max=array[0];
    for (i=0;i<array.length;i++){
        if(max<array[i]){
            max=array[i];
        }
    }
    console.log(max)
    
}
printMax()

// 4. Array with Odds
function arrayOdds(){
    function odd(a){
        if(a%2!=0){
            return true
        }
        else{
            return false
        }
    }
    let oddArray=[];
    for(i=1;i<=255;i++){
        if(odd(i)){
            oddArray.push(i);
        }
    }
    console.log(oddArray);
    return oddArray;
}
arrayOdds();











//PRACTICE
function sigma(a){
    var sum = 0;
    for (num=a;num>=0;num--){
        sum+=num;
        // console.log(sum+num)
    }
    console.log(sum)
}
sigma(3);

function factorial(a){
    var mult = 1;
    for (num=1;num<=a;num++){
        mult = mult * num
    }
    console.log(mult);
}
factorial(5);

result=Math.round(2.5);//3
result=Math.floor(2.99);//2
result=Math.ceil(2.01);//3
result=Math.min(2,10,500,3,65);//2
result=Math.max(2,10,500,3,65);//500
console.log(result);