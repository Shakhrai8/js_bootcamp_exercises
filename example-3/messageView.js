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
    const newElement = document.createElement("div");
    const message = document.querySelector("#message_input").value;
    newElement.id = "message";
    newElement.textContent = message;
    document.body.appendChild(newElement);
  }

  hideMessage() {
    const message = document.getElementById("message");
    message.remove();
  }
}

module.exports = MessageView;
