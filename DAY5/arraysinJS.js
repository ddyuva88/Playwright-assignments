function countOccurence(nums,k){
    let count =0;

    for (let i = 0; i < nums.length; i++) {
        if(nums[i]===k){
            count++
        }
        
    }
    console.log(`Countoccurence:${count}`)
    return count;
    
}

nums=[3,5,6,2,3,1,3];
let k=3;



countOccurence(nums,k);
