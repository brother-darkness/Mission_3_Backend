import filterpunctuation from "./filter";

describe("filter tests", () => {
  it("hello world returns hello world", () => {
    //Arrange
    const input = "hello world";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("hello  world returns hello world", () => {
    //Arrange
    const input = "hello  world";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("hello%world returns hello world", () => {
    //Arrange
    const input = "hello%world";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("!hello world returns hello world", () => {
    //Arrange
    const input = "!hello world";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("hello?world! returns hello world", () => {
    //Arrange
    const input = "hello?world!";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("hello;world returns hello world", () => {
    //Arrange
    const input = "hello;world";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });

  it("hello world? returns hello world", () => {
    //Arrange
    const input = "hello world?";
    const expected = "hello world";

    //Act
    const actual: any = filter(input);

    //Assert
    expect(actual).toBe(expected);
  });
});
