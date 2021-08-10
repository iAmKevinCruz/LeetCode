var nums = [-1,0,1,2,-1,-4]

// function sum(nums){
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             for(k=j+1;k<nums.length;k++){
//                 if(0==nums[i]+nums[j]+nums[k]){
//                     console.log(nums[i],nums[j],nums[k]);
//                 }
//             }
//         }
//     }
// }

function sum(nums){
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                if(nums[i]==-nums[j]-nums[k]){
                    if(i!=0,i!=j,j!=k){
                        if(nums[i]!=nums[j],nums[i]!=nums[k],nums[j]!=nums[k]){
                            console.log(nums[i],nums[j],nums[k]);
                        }
                    }
                } 
            }
        }
    }
}
sum(nums);

// function sum3(nums){
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;i++){
//             if(nums[1]==nums[i]+nums[j]){
//                 console.log(nums[i],nums[j])
//             }
//         }
//     }
// }
// sum3(nums);

if(1!=0,2>3){
    console.log(`test`)
}else{console.log(`false`)}


// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]