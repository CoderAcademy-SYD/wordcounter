import countWords from "../countWords";

describe("the counting function", () => {
  it('counts the number of words', () => {
    expect(countWords("one two three")).toBe(3);
  });
});
