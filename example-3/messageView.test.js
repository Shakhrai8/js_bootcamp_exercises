/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const MessageView = require("./messageView");

describe("MessageView", () => {
  it("clicks the button and shows the message", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();

    const buttonEl = document.querySelector("#show-message-button");
    const inputEl = document.querySelector("#message_input");

    inputEl.value = "Some text value";

    buttonEl.click();

    expect(document.querySelector("#message")).not.toBeNull();
    expect(document.querySelector("#message").innerHTML).toEqual(
      "Some text value"
    );
  });

  it("hides the mesage", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const view = new MessageView();
    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    const buttonEl2 = document.querySelector("#hide-message-button");
    buttonEl2.click();

    expect(document.querySelector("#message")).toBeNull();
  });
});
