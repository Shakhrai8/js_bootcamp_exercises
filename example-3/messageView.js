class MessageView {
  constructor() {
    this.buttonEl = document.querySelector("#show-message-button");
    this.buttonEl2 = document.querySelector("#hide-message-button");

    this.buttonEl.addEventListener("click", () => {
      this.displayMessage();
    });

    this.buttonEl2.addEventListener("click", () => {
      this.hideMessage();
    });
  }

  displayMessage() {
    console.log("Thanks for clicking me!");
    const newElement = document.createElement("div");
    newElement.id = "message";
    newElement.textContent = "This message displayed by Javascript";
    document.body.appendChild(newElement);
  }

  hideMessage() {
    const message = document.getElementById("message");
    message.remove();
  }
}

module.exports = MessageView;
