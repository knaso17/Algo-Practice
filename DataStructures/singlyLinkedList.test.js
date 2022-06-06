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
    })

    test("Push adds first value to head and tail", () => {
      list.push("testValue");
      expect(list.head.val).toBe("testValue");
      expect(list.tail.val).toBe("testValue");
    })

    test("Push adds one to the length each time", () => {
      list.push("testValue1");
      list.push("testValue2");
      expect(list.length).toBe(2);
    })

    test("Push adds additional values to tail", () => {
      list.push("First");
      list.push("Second");
      expect(list.head.val).toBe("First");
      expect(list.tail.val).toBe("Second");
    })

    test("Push adds additional values in next", () => {
      list.push("First");
      list.push("Second");
      expect(list.head.val).toBe("First");
      expect(list.head.next.val).toBe("Second");
    })

    test("Push works for many values", () => {
      list.push("Hello");
      list.push("Goodbye");
      list.push(99);
      list.push("last value")

      expect(list.head.val).toBe("Hello");
      expect(list.head.next.val).toBe("Goodbye");
      expect(list.tail.val).toBe("last value");
    })

  });
});


