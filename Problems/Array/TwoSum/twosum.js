var nums = [2,7,11,15];
    target = 9;
    // console.log(nums.length);
    nums = [3,2,4], target = 6
    nums = [3,3], target = 6

function twoSums(nums,target){
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[j]==target-nums[i])
            return (`[${i},${j}]`);
            else return null
        }
    }
}

console.log(twoSums(nums,target))

function twoSums2(nums,target){
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(target==nums[i]+nums[j])
            return (`${i},${j}`);
            else return null
        }
    }
}
console.log(twoSums2(nums,target))

