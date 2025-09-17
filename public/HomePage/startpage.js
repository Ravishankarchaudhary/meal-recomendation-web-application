document.getElementById("recipeSearchForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const query = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("searchResults");

  if (!query) {
    resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
    resultsDiv.style.display = "flex"; // ✅ Make visible even for message
    return;
  }

  resultsDiv.innerHTML = "<p>Searching...</p>";
  resultsDiv.style.display = "flex"; // ✅ Make div visible (important fix)

  try {
    const res = await fetch(`/api/recipes?search=${encodeURIComponent(query)}`);
    const data = await res.json();

    resultsDiv.innerHTML = ""; // clear "Searching..." text

    // ✅ Check if API returned valid array
    if (!Array.isArray(data)) {
      resultsDiv.innerHTML = `<p>${data.error || "Unexpected response from server"}</p>`;
      console.error("Unexpected API response:", data);
      return;
    }

    // ✅ Check if array is empty
    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>No recipes found</p>";
      return;
    }

    // ✅ Loop through each recipe and create a card
    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("recipe-card");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <a href="/HomePage/Recipie/recipie.html?id=${item.id}" target="_blank">View Recipe</a>
      `;
      resultsDiv.appendChild(div);
    });
  } catch (err) {
    resultsDiv.innerHTML = "<p>Error fetching recipes</p>";
    console.error(err);
  }
});
