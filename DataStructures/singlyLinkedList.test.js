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
      any subsequent values should be added to the tail
      test tail and last value of head */

    test("Push is a valid method", () => {
      expect(typeof list.push).toBe("function");
    });

    test("Push adds one to the length", () => {
      list.push("testValue");
      expect(list.length).toBe(1);
    })

    test("Push adds one to the length each time", () => {
      list.push("testValue1");
      list.push("testValue2");
      expect(list.length).toBe(2);
    })
  });
});


