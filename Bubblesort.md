Bubble Sort
Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest unsorted elements "bubble up" to the end of the array with each pass.

📦 JavaScript Implementation
function bubbleSort(arr) {
let unsorted_until_index = arr.length - 1;
let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < unsorted_until_index; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
        unsorted_until_index -= 1;
    }

    return arr;

}

⏱️ Time Complexity
| | | |
| | | sorted = true |
| | | |
| | | |

🧠 Space Complexity

- O(1) — In-place sorting, no extra memory allocation

✅ Characteristics

- Stable sort (preserves order of equal elements)
- Easy to implement and visualize
- Inefficient for large datasets
- Adaptive with early exit optimization
