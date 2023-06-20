class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector("#submit-button");
    const repoInputEl = document.querySelector("#repo-name-input");

    submitButtonEl.addEventListener("click", () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, (repoData) => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const name = document.querySelector("#repo-name");
    name.textContent = repoData.full_name;

    const description = document.querySelector("#repo-description");
    description.textContent = repoData.description;

    const image = document.querySelector("#repo-image");
    image.src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;
