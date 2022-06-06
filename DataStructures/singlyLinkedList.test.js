const { Node, SinglyLinkedList } = require("./SinglyLinkedList");

describe("Singly Linked List", () => {
  let list;

  beforeEach(() => {
    list = new SinglyLinkedList();
  });

  describe("Push Method", () => {

    /* What we want to test for push:
      length goes up by one
      the value is added to the list

      first value should be both head and tail (next value is null)
      subsequent values should be added to the tail and last value of head */

    test("Push is a valid method", () => {
      expect(typeof list.push).toBe("function");
    });

    test("Push adds one to the length", () => {
      list.push("testValue");
      expect(list.length).toBe(1);
    });

    test("Push adds first value to head and tail", () => {
      list.push("testValue");
      expect(list.head.val).toBe("testValue");
      expect(list.tail.val).toBe("testValue");
    });

    test("Push adds additional values to tail", () => {
      list.push("First");
      list.push("Second");
      expect(list.head.val).toBe("First");
      expect(list.tail.val).toBe("Second");
      expect(list.length).toBe(2);
    });

    test("Push adds additional values in next", () => {
      list.push("First");
      list.push("Second");
      expect(list.head.val).toBe("First");
      expect(list.head.next.val).toBe("Second");
    });

    test("Push works for many values", () => {
      list.push("Hello");
      list.push("Goodbye");
      list.push(99);
      list.push("last value")

      expect(list.head.val).toBe("Hello");
      expect(list.head.next.val).toBe("Goodbye");
      expect(list.tail.val).toBe("last value");
      expect(list.length).toBe(4);
    });

  });

  describe("Pop Method", () => {
    /* What we want to test for pop:
      returns undefined if list is empty
      removes last element
      if removing only value, sets head and tail to null
      if many values only the last one removed
       */

    test("Pop is a valid method", () => {
      expect(typeof list.pop).toBe("function");
    });

    test("Pop returns undefined if the list is empty", () => {
      expect(list.pop()).toBe(undefined);
    });

    test("If popping off the only element, head and tail are null", () => {
      list.push("Pop Me!")
      expect(list.pop().val).toBe("Pop Me!");
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });

    test("Pop works for longer lists", () => {
      list.push("Hello")
      list.push("Goodbye")
      list.push("Pop Me!")
      expect(list.pop().val).toBe("Pop Me!");
      expect(list.head.val).toBe("Hello");
      expect(list.tail.val).toBe("Goodbye");
      expect(list.length).toBe(2);
    });

  });

  describe("Shift Method", () => {
    /* What we want to test for Shift:
      returns undefined if list is empty
      removes first element
      if removing only value, sets head and tail to null
      if many values only the first one removed
       */

    test("Shift is a valid method", () => {
      expect(typeof list.shift).toBe("function");
    });

    test("Shift returns undefined if the list is empty", () => {
      expect(list.shift()).toBe(undefined);
    });

    test("If popping off the only element, head and tail are null", () => {
      list.push("Shift Me!")
      expect(list.pop().val).toBe("Shift Me!");
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
      expect(list.length).toBe(0);
    });
  })
});


