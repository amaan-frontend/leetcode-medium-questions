class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Merge two sorted linked lists
function merge(left, right) {
    const dummy = new ListNode();
    let current = dummy;
    
    while (left && right) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }
    
    current.next = left || right;
    return dummy.next;
}

// Sort the linked list using merge sort
function sortList(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let slow = head;
    let fast = head;
    let prev = null;
    
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    prev.next = null; // Split the list into two parts
    
    const left = sortList(head);
    const right = sortList(slow);
    
    return merge(left, right);
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    
    return dummy.next;
}

// Helper function to convert linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;
    
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    
    return result;
}

// Test cases
const arr1 = [4, 2, 1, 3];
const head1 = createLinkedList(arr1);
const sortedHead1 = sortList(head1);
console.log(linkedListToArray(sortedHead1)); // Output: [1, 2, 3, 4]

const arr2 = [-1, 5, 3, 4, 0];
const head2 = createLinkedList(arr2);
const sortedHead2 = sortList(head2);
console.log(linkedListToArray(sortedHead2)); // Output: [-1, 0, 3, 4, 5]

const arr3 = [];
const head3 = createLinkedList(arr3);
const sortedHead3 = sortList(head3);
console.log(linkedListToArray(sortedHead3)); // Output: []

