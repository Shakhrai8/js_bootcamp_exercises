class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });
  }

  displayMessage() {
    const newElement = document.createElement("div");
    newElement.id = "message";
    newElement.textContent = "This message displayed by Javascript";
    document.body.appendChild(newElement);
  }
}

module.exports = MessageView;
