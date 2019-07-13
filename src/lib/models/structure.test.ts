import Structure from "./structure";

test("models.definition", () => {
  let model = Structure.load(__dirname + '/sample.model.json');
  expect(model.name).toBe("sample");
});