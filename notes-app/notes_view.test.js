/**
 * @jest-environment jsdom
 */

const NotesView = require("./notes_view");
const fs = require("fs");

describe("NotesView", () => {
  it("creates 3 new div elements", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const mockNotesModelClass = {
      getNotes: () => ["Test_1", "Test_2", "Test_3"],
    };

    const testClass = new NotesView(mockNotesModelClass);
    testClass.displayNotes();

    expect(document.querySelectorAll("div").length).toBe(4);
  });
});
