🔍 Binary Search
Binary Search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues in the left half; otherwise, it continues in the right half.

📦 JavaScript Implementation

```
function binarySearch(arr, target) {
let lower = 0;
let upper = arr.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            lower = mid + 1;
        } else {
            upper = mid - 1;
        }
    }

    return -1; // target not found

}
```

⏱️ Time Complexity
| Case | Complexity | Description |
| Best Case| O(1)| Target is at the midpoint on first check|
| Average Case|O(log n) | Each step halves the search space|
| Worst Case| O(log n)| Target is at one of the ends or not present|

🧠 Space Complexity

- O(1) — Iterative version uses constant space
- O(log n) — If implemented recursively (due to call stack)

✅ Characteristics

- Requires a sorted array
- Extremely efficient for large datasets
- Commonly used in search engines, databases, and interview questions
- Forms the basis for advanced algorithms like binary search trees and exponential search
