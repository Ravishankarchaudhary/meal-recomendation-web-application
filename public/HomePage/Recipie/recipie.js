// Get recipe ID from URL query string
const params = new URLSearchParams(window.location.search);
const recipeId = params.get("id");

const titleEl = document.getElementById("recipe-title");
const imageEl = document.getElementById("recipe-image");
const instructionsEl = document.getElementById("recipe-instructions");

if (recipeId) {
  fetch(`/api/recipes/${recipeId}`)
    .then(res => res.json())
    .then(data => {
      titleEl.textContent = data.title;
      imageEl.src = data.image;
      instructionsEl.innerHTML = data.instructions || "No instructions available";
    })
    .catch(err => {
      titleEl.textContent = "Error loading recipe";
      console.error(err);
    });
} else {
  titleEl.textContent = "No recipe selected";
}
