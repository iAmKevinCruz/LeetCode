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

// 5. Greater Than Y
let array=[3,346,45,234,78,2,45,12,56,99,-4,501];
function greaterThanY(array,y){
        x=[];
    for(i=0;i<array.length;i++){
        if(array[i]>y){
            x.push(array[i]);
        }
    };
    console.log(x);
}
greaterThanY(array,56);

// 6. Max Min Average
function maxMinAvg(array){
    max=array[0];
    min=array[0];
    sum=0;
    total=array.length;
    for(i=0;i<array.length;i++){
        if(array[i]>max){
            max=array[i];
        }
        if(array[i]<min){
            min=array[i];
        }
        sum+=array[i];
    }
    avg=(sum/total);
    console.log(`Max: ${max}`);
    console.log(`Min: ${min}`);
    console.log(`Sum: ${sum}`);
    console.log(`Avg: ${avg}`);
    console.log(`Num In Array: ${array.length}`);
}
let test=[1,2,3];
maxMinAvg(array);

// 7. Swap String For Array Negative Values
function swapNegArrValues(array){
    for(i=0;i<array.length;i++){
        if(array[i]<0){
            array[i]=`Dojo`;
        }
    }
    console.log(array);
}
// swapNegArrValues(array);

// 8. Print Odds 1-255
function printOdds255(){
    for(i=1;i<256;i+=2){
        console.log(i);
    }
}

// 9. Itereate and Print Array
function printArray(array){
    for(i in array){
        console.log(`Array index ${i} has a value of ${array[i]}`);
    }
}

// 10. Get and print average
function printAvg(array){
    sum = 0;
    for(i in array){
        sum += array[i];
    }
    avg = sum / array.length;
    console.log(`Sum is ${sum} and Average is ${avg}`);
}

// 11. Square the values
function squareValues(array){
    console.log(array);
    for(i in array){
        square = array[i] * array[i];
        array[i] = square;
    }
    console.log(array);
}

// 12. Zero Out Negative Numbers
function zeroNegative(array){
    console.log(array);
    for(i in array){
        if(array[i] < 0){
            array[i] = 0
        }
    }
    console.log(array);
}

// 13. Shift Array Values
function shiftArray(array){
    console.log(array);
    length = array.length - 1;
    for(i=0;i<length;i++){
        array[i] = array[i+1];
    }
    array[length] = 0;
    console.log(array);
}









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