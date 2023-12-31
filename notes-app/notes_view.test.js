/**
 * @jest-environment jsdom
 */

const NotesView = require("./notes_view");
const NotesModel = require("./notes");
const noteClient = require("./noteClient");
const fs = require("fs");

describe("NotesView", () => {
  xit("creates 1 new div element by clicking the button", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const client = new noteClient();

    const testClass = new NotesView(model);
    const buttonEl = document.querySelector("#show-note-button");
    const inputEl = document.querySelector("#note_input");

    inputEl.value = "First note";

    buttonEl.click();

    expect(document.querySelector("div.note")).not.toBeNull();
    expect(document.querySelector("div.note").innerHTML).toEqual("First note");
  });

  it("calls fetch and loads repo info", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const mockClient = {
      loadNotes: jest.fn(),
      createNote: jest.fn(),
    };

    const mockModel = {
      setNotes: jest.fn(),
      addNote: jest.fn(),
      getNotes: jest.fn(),
    };

    const view = new NotesView(mockModel, mockClient);

    // Mock the notes returned from the API
    const mockNotes = ["Note 1"];

    // Mock the behavior of loadNotes method to call the callback with the mockNotes
    mockClient.loadNotes.mockImplementationOnce((callback, errorCallback) => {
      callback(mockNotes);
    });

    mockModel.getNotes.mockImplementationOnce(() => {
      return mockNotes;
    });

    mockClient.createNote.mockResolvedValueOnce();

    // Call the displayNotesFromApi method
    view.displayNotesFromApi();

    // Expect the loadNotes method to be called with the callback
    expect(mockClient.loadNotes).toHaveBeenCalledWith(
      expect.any(Function),
      expect.any(Function)
    );

    // Expect the setNotes method to be called with the mockNotes
    expect(mockModel.setNotes).toHaveBeenCalledWith(mockNotes);

    // Expect the displayNotes method to be called
    expect(document.querySelector(".note").innerHTML).toEqual("Note 1");
  });

  test("displayError should show error message in the DOM", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // Create a mock error object
    const error = "Sample error message";

    const mockClient = {
      loadNotes: jest.fn(),
      createNote: jest.fn(),
    };

    const mockModel = {
      setNotes: jest.fn(),
      addNote: jest.fn(),
      getNotes: jest.fn(),
    };

    const view = new NotesView(mockModel, mockClient);
    // Call the displayError method with the mock error
    view.displayError(error);

    // Assert that the error message is displayed in the DOM
    const errorDiv = document.querySelector("div.error-message");
    expect(errorDiv).not.toBeNull();
    expect(errorDiv.textContent).toContain("Oops, something went wrong!");
    expect(errorDiv.textContent).toContain(error);
  });

  it("reset method should make a DELETE request to the reset endpoint", () => {
    // Arrange
    const client = new noteClient();

    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
    });

    // Act
    return client.reset().then(() => {
      // Assert
      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/notes", {
        method: "DELETE",
      });
    });
  });

  it("reset method should throw an error if the request fails", () => {
    // Arrange
    const client = new noteClient();

    // Mock the fetch function to simulate a failed request
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    // Act and Assert
    return expect(client.reset()).rejects.toThrow("Failed to reset notes");
  });
});
