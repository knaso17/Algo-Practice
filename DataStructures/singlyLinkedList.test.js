const { Node, SinglyLinkedList } = require("./SinglyLinkedList");

describe("Singly Linked List ", () => {
  let list = new SinglyLinkedList();

  test("Push is a valid method", () => {
    expect(typeof list.push).toBe("function");
  });
});
