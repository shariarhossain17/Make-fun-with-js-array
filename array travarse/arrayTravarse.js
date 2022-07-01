const arr = [15,23,11,165,67,61,12];

// without traverse

let a1 = arr[0]
let a2 = arr[1]



// sum array and avg

let sum = 0;

for (let i = 0; i < arr.length; i++) {

    //  sum = number[0] + number[1] = 35
    //  sum + number[2] = 46
    //  sum + number[3] = 111
    //  sum + number[4] = 172
    //  sum + number[5] = 184
    sum = sum + arr[i]
}

const avg = sum / arr.length
// console.log(sum);
// console.log(avg);

// largest number find

let largestNum = arr[0];
let secondLargest = 0;
for (let i = 1; i < arr.length; i++) {
    if(arr[i] > largestNum){
        secondLargest = largestNum
        largestNum = arr[i]
    }

    else if(arr[i] !== largestNum && arr[i]> secondLargest){
        secondLargest = arr[i];
    }
   
}
// console.log(secondLargest);

//  lowest number

let lowestNum = arr[0];
let secondLowestNum = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < lowestNum){
        secondLowestNum = lowestNum
        lowestNum = arr[i]
    }
    else if(arr[i] !== lowestNum && arr[i] < secondLowestNum){
        secondLowestNum = arr[i]
    }
    
}
console.log(secondLowestNum);


