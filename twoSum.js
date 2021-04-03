var twoSum = function(nums, target) {

    for (var i = 0; i < nums.length; i++) {

        for (var j = i + 1; j < nums.length; j++) {

            if (nums[j] +nums[i] == target) {

                var result = [i, j];
                return result;
            }
        }

    }
}
twoSum([1,1,1,1],2);