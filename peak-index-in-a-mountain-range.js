
var peakIndexInMountainArray = function (arr) {
    let start = 0, end = arr.length - 1, mid;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        }
        else {
            end = mid;
        }
    }
    return start;
};

                                 

       
