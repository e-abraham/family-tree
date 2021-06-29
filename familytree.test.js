const Person = require("./familytree");

describe("Person class", () => {
    const georgeVI = new Person("George", []);

    test("has a name", () => {
        expect(georgeVI.name).toBe("George");
    })
})