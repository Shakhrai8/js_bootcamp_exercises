class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const newPara = document.createElement("p");
    newPara.textContent = "This paragraph has been dynamically added by JavaScript!";
    document.querySelector("#main-container").append(newPara);
  }

  clearParagraphs() {
    const par = document.querySelectorAll("p");
    par.forEach((p) => p.remove());
  }
}

module.exports = View;