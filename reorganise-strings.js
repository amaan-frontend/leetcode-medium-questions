function rearrangeString(s) {
    const charCount = new Map();
    for (const char of s) {
        charCount.set(char, charCount.get(char) + 1 || 1);
    }

    const maxHeap = new PriorityQueue((a, b) => a[1] - b[1]);
    charCount.forEach((count, char) => {
        maxHeap.enqueue([char, count]);
    });

    let result = "";

    while (maxHeap.size() > 1) {
        const [char1, count1] = maxHeap.dequeue();
        const [char2, count2] = maxHeap.dequeue();

        result += char1 + char2;

        if (count1 > 1) {
            maxHeap.enqueue([char1, count1 - 1]);
        }

        if (count2 > 1) {
            maxHeap.enqueue([char2, count2 - 1]);
        }
    }

    if (maxHeap.size() > 0) {
        const [lastChar, lastCount] = maxHeap.dequeue();
        if (lastCount > 1) {
            return "";
        }
        result += lastChar;
    }

    return result;
}

class PriorityQueue {
    constructor(compareFn) {
        this.queue = [];
        this.compare = compareFn || ((a, b) => a - b);
    }

    enqueue(val) {
        this.queue.push(val);
        this.bubbleUp(this.queue.length - 1);
    }

    dequeue() {
        const min = this.queue[0];
        const end = this.queue.pop();

        if (this.queue.length > 0) {
            this.queue[0] = end;
            this.sinkDown(0);
        }

        return min;
    }

    size() {
        return this.queue.length;
    }

    bubbleUp(index) {
        let current = index;
        let parent = Math.floor((current - 1) / 2);

        while (current > 0 && this.compare(this.queue[current], this.queue[parent]) < 0) {
            this.swap(current, parent);
            current = parent;
            parent = Math.floor((current - 1) / 2);
        }
    }

    sinkDown(index) {
        let current = index;
        let leftChild = 2 * current + 1;

        while (leftChild < this.queue.length) {
            let rightChild = leftChild + 1;
            let smallest = rightChild < this.queue.length && this.compare(this.queue[rightChild], this.queue[leftChild]) < 0 ? rightChild : leftChild;

            if (this.compare(this.queue[smallest], this.queue[current]) < 0) {
                this.swap(smallest, current);
                current = smallest;
                leftChild = 2 * current + 1;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

