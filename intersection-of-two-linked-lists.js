class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    return pointerA;
}

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
    let head = null;
    let tail = null;

    for (const val of arr) {
        const newNode = new ListNode(val);
        if (!head) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

// Example 1
const listA = createLinkedListFromArray([4, 1, 8, 4, 5]);
const listB = createLinkedListFromArray([5, 6, 1, 8, 4, 5]);
const intersectNode = createLinkedListFromArray([8, 4, 5]);
let tailA = listA;
while (tailA.next) tailA = tailA.next;
tailA.next = intersectNode;

let tailB = listB;
while (tailB.next) tailB = tailB.next;
tailB.next = intersectNode;

const result1 = getIntersectionNode(listA, listB);
console.log(result1 ? `Intersected at '${result1.val}'` : 'No intersection'); // Output: Intersected at '8'

// Example 2
const listC = createLinkedListFromArray([1, 9, 1, 2, 4]);
const listD = createLinkedListFromArray([3, 2, 4]);
const intersectNode2 = createLinkedListFromArray([2, 4]);
let tailC = listC;
while (tailC.next) tailC = tailC.next;
tailC.next = intersectNode2;

let tailD = listD;
while (tailD.next) tailD = tailD.next;
tailD.next = intersectNode2;

const result2 = getIntersectionNode(listC, listD);
console.log(result2 ? `Intersected at '${result2.val}'` : 'No intersection'); // Output: Intersected at '2'

// Example 3
const listE = createLinkedListFromArray([2, 6, 4]);
const listF = createLinkedListFromArray([1, 5]);
const result3 = getIntersectionNode(listE, listF);
console.log(result3 ? `Intersected at '${result3.val}'` : 'No intersection'); // Output: No intersection
                                                                                                                                                                        
