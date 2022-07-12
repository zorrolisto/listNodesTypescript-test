class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  const getReverseListNodeNumAsString = (list) => {
    const value = String(list.val);
    if (list.next === null) return value;
    return getReverseListNodeNumAsString(list.next) + value;
  };
  const sum =
    BigInt(getReverseListNodeNumAsString(l1)) +
    BigInt(getReverseListNodeNumAsString(l2));
  const sol = String(sum).split("").reverse();
  console.log("getReverseListNodeNumAsString(l1)");
  console.log(getReverseListNodeNumAsString(l1));
  const solLen = sol.length;
  let lastListNode = null;
  for (let i = solLen - 1; i >= 0; i--) {
    lastListNode = new ListNode(Number(sol[i]), lastListNode);
    if (i === 0) return lastListNode;
  }
}

const firstParam = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
];
const secondParam = [5, 6, 4];

const generateALinkedList = (sol: number[]): ListNode => {
  const solLen = sol.length;
  let lastListNode = null;
  for (let i = solLen - 1; i >= 0; i--) {
    lastListNode = new ListNode(Number(sol[i]), lastListNode);
    if (i === 0) return lastListNode;
  }
};

const result = addTwoNumbers(
  generateALinkedList(firstParam),
  generateALinkedList(secondParam)
);
console.log("result");
console.log(result);
