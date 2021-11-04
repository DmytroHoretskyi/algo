function heapify(
    arr,
    length,
    i,
    counter = { comparisons: 0, swaps: 0, executionTime: 0 },
    asc = true,
) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    counter.comparisons++;

    if (left < length) {
        counter.comparisons++; //for next 'if'

        if(asc) {
            if(arr[left] > arr[largest]) {
                largest = left;
            }
        }

        if(!asc) {
            if(arr[left] < arr[largest]) {
                largest = left;
            }
        }
    }

    counter.comparisons++;

    if (right < length) {
        counter.comparisons++; //for next 'if'

        if (asc) {
            if (arr[right] > arr[largest]) {
                largest = right;
            }
        }

        if (!asc) {
            if (arr[right] < arr[largest]) {
                largest = right;
            }
        }
    }

    if(largest !== i) {
        counter.swaps++;
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        heapify(arr, length, largest, counter, asc);
    }
}

function heapSort(arr, sortOrder = "asc") {
    const startTime = performance.now();
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let k = length - 1;

    let counter = {
        comparisons: 0,
        swaps: 0
    }

    if(sortOrder === "asc" ) {
        while (i >= 0) {
            heapify(arr, length, i, counter, true);
            i--;
        }

        while (k >= 0) {
            counter.swaps++;
            [arr[0], arr[k]] = [arr[k], arr[0]];
            heapify(arr, k, 0, counter, true);
            k--;
        }
    } else if (sortOrder === "desc") {

        while (i >= 0) {
            heapify(arr, length, i, counter, false);
            i--;
        }

        while (k >= 0) {
            counter.swaps++;
            [arr[0], arr[k]] = [arr[k], arr[0]];
            heapify(arr, k, 0, counter, false);
            k--;
        }
    } else {
        console.log("Wrong sort order")
    }

    const endTime = performance.now();
    counter.executionTime = endTime - startTime
    console.log("HeapSort")
    console.log("Sorted Array:", ...arr);
    console.log("counters:", counter);
    return arr;
}