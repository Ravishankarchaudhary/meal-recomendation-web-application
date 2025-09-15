document.getElementById("recipeSearchForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = "<p>Searching...</p>";

  try {
    const res = await fetch(`/api/recipes?search=${encodeURIComponent(query)}`);
    const data = await res.json();

    resultsDiv.innerHTML = "";

    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>No recipes found</p>";
      return;
    }

    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("recipe-card");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
       <a href="HomePage/Recipie/recipie.html?id=${item.id}" target="_blank">View Recipe</a>

      `;
      resultsDiv.appendChild(div);
    });
  } catch (err) {
    resultsDiv.innerHTML = "<p>Error fetching recipes</p>";
    console.error(err);
  }
});
