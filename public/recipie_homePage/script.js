// Dummy Recipes Database (10 Recipes)
const dummyRecipes = [
  {
    id: "1",
    title: "Grilled Chicken Salad",
    description: "A light and healthy grilled chicken salad with fresh vegetables.",
    ingredients: ["chicken breast", "lettuce", "tomato", "cucumber", "red onion (optional)", "olive oil", "lemon juice", "salt", "pepper"],
    cuisine: "American",
    diet: "high-protein",
    instructions: ["Grill chicken until cooked.", "Chop vegetables.", "Combine chicken and vegetables.", "Drizzle olive oil and lemon juice.", "Season with salt and pepper and serve."],
    nutrition: ["Calories: 250", "Protein: 25g"],
    prepTime: "20 mins",
    servings: "2",
    image: "/recipie_homePage/Grilled Chicken Salad.jpg",
    source: "#"
  },
  {
    id: "2",
    title: "Vegetable Stir-Fry",
    description: "Healthy and fast stir-fry with fresh seasonal vegetables.",
    ingredients: ["broccoli", "red bell pepper", "carrot", "mushrooms", "vegetable oil", "garlic", "soy sauce", "ginger", "salt", "pepper"],
    cuisine: "Chinese",
    diet: "balanced",
    instructions: ["Heat oil in a wok.", "Add garlic and ginger, stir 30 sec.", "Add vegetables and stir-fry 5-6 mins.", "Add soy sauce, season with salt and pepper, toss and serve."],
    nutrition: ["Calories: 250", "Protein: 25g"],
    prepTime: "15 mins",
    servings: "1",
    image: "/recipie_homePage/VegStirFry.jpg",
    source: "#"
  },
  {
    id: "3",
    title: "Spaghetti Bolognese",
    description: "Classic Italian pasta with rich tomato and meat sauce.",
    ingredients: ["spaghetti", "beef", "tomato", "onion", "garlic"],
    cuisine: "Italian",
    diet: "non-vegetarian",
    instructions: ["Cook spaghetti.", "Prepare meat sauce.", "Combine and serve."],
    nutrition: ["Calories: 350", "Protein: 20g"],
    prepTime: "30 mins",
    servings: "3",
    image: "/recipie_homePage/Spaghetti Bolognese.jpg",
    source: "#"
  },
  {
    id: "4",
    title: "Paneer Butter Masala",
    description: "Rich and creamy Indian curry made with paneer and tomato gravy.",
    ingredients: ["paneer", "tomato", "butter", "cream", "spices", "salt"],
    cuisine: "Indian",
    diet: "vegetarian",
    instructions: ["Prepare tomato gravy.", "Add paneer and cream.", "Cook until thick and creamy.", "Season with salt and serve."],
    nutrition: ["Calories: 320", "Protein: 15g"],
    prepTime: "25 mins",
    servings: "2",
    image: "/recipie_homePage/Paneer Butter Masala.jpg",
    source: "#"
  },
  {
    id: "5",
    title: "Fish Tacos",
    description: "Crispy fish tacos with fresh toppings and tangy sauce.",
    ingredients: ["fish fillets", "tortilla", "cabbage", "lime", "sour cream", "salt", "pepper"],
    cuisine: "Mexican",
    diet: "pescatarian",
    instructions: ["Cook fish until crispy.", "Assemble tacos with cabbage and fish.", "Drizzle lime and sour cream, season with salt and pepper, serve."],
    nutrition: ["Calories: 280", "Protein: 18g"],
    prepTime: "20 mins",
    servings: "2",
    image: "/recipie_homePage/FishTacos.jpg",
    source: "#"
  },
  {
    id: "6",
    title: "Quinoa Salad",
    description: "Nutritious quinoa salad with fresh vegetables and lemon dressing.",
    ingredients: ["quinoa", "cucumber", "tomato", "lemon juice", "olive oil", "salt", "pepper"],
    cuisine: "Mediterranean",
    diet: "vegan",
    instructions: ["Cook quinoa and let it cool.", "Chop vegetables.", "Mix quinoa with vegetables and dressing.", "Season with salt and pepper and serve."],
    nutrition: ["Calories: 220", "Protein: 8g"],
    prepTime: "15 mins",
    servings: "2",
    image: "/recipie_homePage/QuinoaSalad.jpg",
    source: "#"
  },
  {
    id: "7",
    title: "Chicken Burger",
    description: "Juicy chicken burger served with lettuce, tomato, and cheese.",
    ingredients: ["chicken patty", "burger bun", "lettuce", "tomato", "cheese", "ketchup", "mustard", "salt", "pepper"],
    cuisine: "American",
    diet: "non-vegetarian",
    instructions: ["Grill chicken patty until cooked.", "Assemble burger with bun, lettuce, tomato, cheese, and sauces.", "Serve hot."],
    nutrition: ["Calories: 380", "Protein: 20g"],
    prepTime: "20 mins",
    servings: "1",
    image: "/recipie_homePage/ChickenBurger.jpg",
    source: "#"
},
  {
    id: "8",
    title: "Chole Bhature",
    description: "Spicy chickpea curry with fluffy fried bread.",
    ingredients: ["chickpeas", "flour", "spices", "onion", "tomato", "oil", "salt"],
    cuisine: "Indian",
    diet: "vegetarian",
    instructions: ["Cook spicy chickpea curry.", "Prepare dough and fry bhature until golden.", "Serve curry with bhature."],
    nutrition: ["Calories: 500", "Protein: 16g"],
    prepTime: "35 mins",
    servings: "3",
    image: "/recipie_homePage/CholeBhature.jpg",
    source: "#"
  },
  {
    id: "9",
    title: "Miso Soup",
    description: "Traditional Japanese miso soup with tofu and seaweed.",
    ingredients: ["miso paste", "tofu", "seaweed", "spring onion", "water"],
    cuisine: "Japanese",
    diet: "vegan",
    instructions: ["Heat water or broth.", "Add miso paste, tofu, and seaweed.", "Simmer for a few minutes and serve hot."],
    nutrition: ["Calories: 120", "Protein: 7g"],
    prepTime: "10 mins",
    servings: "2",
    image: "/recipie_homePage/misosoup.jpg",
    source: "#"
  },
  {
    id: "10",
    title: "Avocado Toast",
    description: "Simple and delicious avocado spread on toasted bread.",
    ingredients: ["bread slices", "avocado", "lemon juice", "salt", "pepper"],
    cuisine: "Global",
    diet: "vegan",
    instructions: ["Toast bread.", "Mash avocado with lemon juice, salt, and pepper.", "Spread on toast and serve."],
    nutrition: ["Calories: 200", "Protein: 5g"],
    prepTime: "10 mins",
    servings: "1",
    image: "/recipie_homePage/AvocadoToast.jpg",
    source: "#"
  },
  {
    id: "11",
    title: "Creamy Garlic Pasta",
    description: "A rich and flavorful pasta dish with garlic and parmesan.",
    ingredients: ["pasta", "olive oil", "garlic", "heavy cream", "parmesan cheese", "salt", "pepper", "parsley"],
    cuisine: "Italian",
    diet: "vegetarian",
    instructions: ["Cook pasta and drain.", "Sauté garlic in olive oil.", "Add cream and parmesan, mix until smooth.", "Toss pasta in sauce, season, garnish and serve."],
    nutrition: ["Calories: 450", "Protein: 15g"],
    prepTime: "30 mins",
    servings: "2",
    image: "/recipie_homePage/CreamyGarlicPasta.jpg",
    source: "#"
  },
  {
    id: "12",
    title: "Spicy Indian Chicken Curry",
    description: "Authentic curry with onions, tomatoes and aromatic spices.",
    ingredients: ["chicken", "onion", "tomato puree", "garlic", "ginger", "coriander powder", "cumin powder", "turmeric", "garam masala", "red chili powder", "salt", "oil", "coriander leaves"],
    cuisine: "Indian",
    diet: "non-vegetarian",
    instructions: ["Sauté onions until golden.", "Add garlic and ginger.", "Add tomato puree and cook.", "Mix in spices.", "Add chicken, cook until sealed.", "Simmer with water 20-25 mins.", "Add garam masala, garnish with coriander, serve."],
    nutrition: ["Calories: 400", "Protein: 30g"],
    prepTime: "45 mins",
    servings: "4",
    image: "/recipie_homePage/SpicyIndianChickenCurry.jpg",
    source: "#"
  },
  {
    id: "13",
    title: "Fluffy Banana Pancakes",
    description: "Perfect for breakfast, light and naturally sweet.",
    ingredients: ["ripe banana", "flour", "sugar", "baking powder", "baking soda", "salt", "milk", "egg", "butter", "vanilla extract", "oil or butter for cooking", "toppings like syrup or fruits"],
    cuisine: "American",
    diet: "vegetarian",
    instructions: ["Mash banana.", "Mix dry ingredients.", "Add wet ingredients and banana, combine gently.", "Cook pancakes on a greased pan until golden.", "Serve warm with toppings."],
    nutrition: ["Calories: 280", "Protein: 7g"],
    prepTime: "15 mins",
    servings: "2",
    image: "/recipie_homePage/FluffyBananaPancakes.jpg",
    source: "#"
  },
  {
    id: "14",
    title: "Chicken Biryani",
    description: "Aromatic Indian rice dish with spiced chicken and herbs.",
    ingredients: ["basmati rice", "chicken", "onion", "tomato", "yogurt", "garlic", "ginger", "biryani spices", "oil"],
    cuisine: "Indian",
    diet: "non-vegetarian",
    instructions: ["Marinate chicken with yogurt and spices.", "Fry onions and tomatoes.", "Layer partially cooked rice with chicken.", "Cook on low heat until done.", "Garnish with saffron and coriander leaves, serve hot."],
    nutrition: ["Calories: 500", "Protein: 30g"],
    prepTime: "60 mins",
    servings: "4",
    image: "/recipie_homePage/Biryani.jpg",
    source: "#"
  },
  {
    id: "15",
    title: "Margherita Pizza",
    description: "Classic Italian pizza with tomato, mozzarella, and basil.",
    ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "fresh basil", "olive oil", "salt", "pepper"],
    cuisine: "Italian",
    diet: "vegetarian",
    instructions: ["Preheat oven.", "Spread tomato sauce on dough.", "Add cheese and basil.", "Drizzle olive oil, season, and bake until crust is golden.", "Serve hot."],
    nutrition: ["Calories: 400", "Protein: 18g"],
    prepTime: "25 mins",
    servings: "2",
    image: "/recipie_homePage/MargheritaPizza.jpg",
    source: "#"
  },
  {
    id: "16",
    title: "Vanilla Custard",
    description: "Smooth and creamy dessert made with milk, sugar, and vanilla.",
    ingredients: ["milk", "sugar", "cornstarch", "vanilla extract", "egg yolks", "salt"],
    cuisine: "Global",
    diet: "vegetarian",
    instructions: ["Mix milk, sugar, and cornstarch.", "Heat gently while stirring.", "Add egg yolks and cook until thick.", "Add vanilla, cool slightly, and serve."],
    nutrition: ["Calories: 180", "Protein: 6g"],
    prepTime: "20 mins",
    servings: "2",
    image: "/recipie_homePage/VanillaCustard.jpg",
    source: "#"
  },
  {
    id: "17",
    title: "Chicken Handi",
    description: "A rich and creamy chicken curry cooked with yogurt, cream, tomatoes, and aromatic spices in a handi (clay pot).",
    ingredients: ["chicken", "onion", "tomato", "ginger-garlic paste", "green chili", "yogurt", "fresh cream", "butter", "oil", "garam masala", "coriander powder", "red chili powder", "turmeric", "salt", "fresh coriander leaves"],
    cuisine: "Indian",
    diet: "non-vegetarian",
    instructions: [
      "Heat oil and butter in a handi, add onions and sauté until golden.",
      "Add ginger-garlic paste and green chilies, cook until fragrant.",
      "Add tomatoes and cook until soft.",
      "Mix in yogurt, cream, and spices, cook until masala releases oil.",
      "Add chicken pieces and cook until tender.",
      "Garnish with fresh coriander and serve hot with naan or roti."
    ],
    nutrition: ["Calories: 320", "Protein: 24g"],
    prepTime: "40 mins",
    servings: "4",
    image: "/recipie_homePage/ChickenHandi.jpg",
    source: "#"
}
];

//dummy recommendation just for now 
const healthRecommendationsData = {
  'diarrhea': {
    message: 'For <span class="font-bold text-blue-600">Loose Motions / Diarrhea</span>, focus on easily digestible, bland foods to soothe your digestive system and prevent dehydration.',
    mealPlan: [
      '**Breakfast:** Mashed Banana',
      '**Lunch:** Rice and Curd (plain, homemade curd)',
      '**Dinner:** Moong Dal Khichdi (lightly spiced, with less oil)',
      '**Throughout the day:** ORS, coconut water, clear broths.'
    ],
    recipes: [
      { title: 'Plain Rice and Curd', desc: 'Easy to digest, provides probiotics.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Rice+and+Curd' },
      { title: 'Light Moong Dal Khichdi', desc: 'Nutritious, bland, and easy on the stomach.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Moong+Dal+Khichdi' }
    ]
  },
  'fever': {
    message: 'For <span class="font-bold text-blue-600">Fever</span>, focus on hydrating and nourishing foods that are easy to swallow and digest.',
    mealPlan: [
      '**Breakfast:** Vegetable Soup / Clear Broth',
      '**Lunch:** Soft-cooked Rice with Dal (lentil soup)',
      '**Dinner:** Steamed Vegetables with a small portion of chicken/fish (if non-vegetarian)',
      '**Throughout the day:** Plenty of water, fruit juices, herbal teas.'
    ],
    recipes: [
      { title: 'Clear Vegetable Soup', desc: 'Hydrating and provides essential nutrients.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Veg+Soup' },
      { title: 'Simple Dal Rice', desc: 'Comforting and easy to digest.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Dal+Rice' }
    ]
  },
  'cold-cough': {
    message: 'For <span class="font-bold text-blue-600">Cold & Cough</span>, warm, soothing foods and immunity-boosting ingredients are beneficial.',
    mealPlan: [
      '**Breakfast:** Ginger-Honey Tea with Toast',
      '**Lunch:** Chicken/Vegetable Noodle Soup',
      '**Dinner:** Turmeric Milk before bed',
      '**Throughout the day:** Warm water, gargle with salt water.'
    ],
    recipes: [
      { title: 'Ginger-Garlic Chicken Soup', desc: 'Soothing and helps clear congestion.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Chicken+Soup' },
      { title: 'Turmeric Milk (Haldi Doodh)', desc: 'Anti-inflammatory and immunity-boosting.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Turmeric+Milk' }
    ]
  },
  'weakness': {
    message: 'For <span class="font-bold text-blue-600">Weakness (Post-Recovery)</span>, focus on nutrient-dense, energy-rich foods to regain strength.',
    mealPlan: [
      '**Breakfast:** Oats Porridge with fruits and nuts',
      '**Lunch:** Quinoa/Brown Rice with grilled chicken/paneer and vegetables',
      '**Dinner:** Lentil Soup with whole-wheat bread',
      '**Snacks:** Hard-boiled eggs, yogurt, fruit smoothies.'
    ],
    recipes: [
      { title: 'Protein-Rich Oats', desc: 'Provides sustained energy and nutrients.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Oats' },
      { title: 'Grilled Chicken/Paneer Salad', desc: 'Lean protein for muscle repair.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Grilled+Food' }
    ]
  },
  'food-poisoning': {
    message: 'For <span class="font-bold text-blue-600">Food Poisoning</span>, prioritize bland, easily digestible foods and rehydration.',
    mealPlan: [
      '**Initial Stage:** Clear liquids (ORS, coconut water, clear broth)',
      '**When tolerating solids:** Plain Toast, Boiled Potatoes, Applesauce',
      '**Gradual reintroduction:** Plain rice, boiled chicken/fish (small amounts)',
      '**Avoid:** Spicy, oily, dairy, and high-fiber foods.'
    ],
    recipes: [
      { title: 'Plain Boiled Potatoes', desc: 'Bland and easy on the stomach.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Boiled+Potatoes' },
      { title: 'Apple Sauce', desc: 'Soothing and provides some nutrients.', image: 'https://placehold.co/400x250/D3D3D3/000000?text=Apple+Sauce' }
    ]
  }
};
// --- Functions --- 

// Show a page
function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.remove('active');
    section.classList.add('hidden');
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

//featured recipes
function loadFeaturedRecipes() {
  const featuredIds = ["11", "12", "2", "13"];
  const featuredContainer = document.getElementById("featured-recipes");

  featuredContainer.innerHTML = featuredIds.map(id => {
    const recipe = dummyRecipes.find(r => r.id === id);
    return `
      <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
           onclick="openRecipeModal('${recipe.id}')">
        <div class="relative">
          <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-56 object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <h3 class="absolute bottom-3 left-3 text-lg font-semibold text-white drop-shadow-lg">${recipe.title}</h3>
        </div>
        <div class="p-4">
          <p class="text-gray-600 text-sm mb-3">${recipe.description}</p>
          <div class="flex justify-between items-center text-gray-500 text-xs">
            <span class="flex items-center gap-1"><i class="fas fa-clock"></i> ${recipe.time}</span>
            <span class="flex items-center gap-1 text-yellow-500"><i class="fas fa-star"></i> ${recipe.rating}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Run on page load
document.addEventListener("DOMContentLoaded", loadFeaturedRecipes);


document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const targetId = event.target.dataset.target;
    showPage(targetId);
  });
});

// Render recipe cards
function renderRecipeCards(recipes, containerId = 'recipe-grid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  if (!recipes || recipes.length === 0) {
    container.innerHTML = `<p class="text-gray-500">No recipes found.</p>`;
    return;
  }

  recipes.forEach(recipe => {
    const card = `
      <div class="recipe-card cursor-pointer" onclick="openRecipeModal('${recipe.id}')">
        <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-48 object-cover rounded-t-xl">
        <div class="recipe-card-content p-3">
          <h3 class="recipe-card-title font-semibold text-lg">${recipe.title}</h3>
          <p class="text-gray-600 text-sm mb-2">${recipe.description}</p>
          <div class="recipe-card-meta text-xs text-gray-500 flex justify-between">
            <span>Prep: ${recipe.prepTime}</span>
            <span>Servings: ${recipe.servings}</span>
          </div>
          <button class="btn-primary w-full mt-3 text-sm py-2">View Details</button>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}


// search recipes
function searchRecipes() {
  const recipeGrid = document.getElementById('recipe-grid');
  const noResultsMessage = document.getElementById('no-results-message');
  const recipeLoadingSpinner = document.getElementById('recipe-loading-spinner');
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.toLowerCase().trim();

  // Clear old results
  recipeGrid.innerHTML = '';
  noResultsMessage.classList.add('hidden');

  // Case 1: If query is empty → just restore featured recipes
  if (query === "") {
    recipeLoadingSpinner.classList.add('hidden');
    document.getElementById("featured-recipes").style.display = "grid";
    return;
  }

  // Case 2: Searching something
  recipeLoadingSpinner.classList.remove('hidden');
  setTimeout(() => {
    recipeLoadingSpinner.classList.add('hidden');

    const filteredRecipes = dummyRecipes.filter(recipe =>
      (recipe.title && recipe.title.toLowerCase().includes(query)) ||
      (recipe.description && recipe.description.toLowerCase().includes(query)) ||
      (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(query)))
    );

    renderRecipeCards(filteredRecipes);

    // Hide featured recipes if searching
    document.getElementById("featured-recipes").style.display = "none";

    // If no results found
    if (filteredRecipes.length === 0) {
      noResultsMessage.classList.remove('hidden');
    }
  }, 1000);
}



// Open modal
function openRecipeModal(recipeId) {
  const recipe = dummyRecipes.find(r => String(r.id) === String(recipeId));
  if (!recipe) return;

  document.getElementById('modal-recipe-title').textContent = recipe.title;
  const modalImage = document.getElementById('modal-recipe-image');
  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;

  document.getElementById('modal-ingredients-list').innerHTML =
    recipe.ingredients.map(item => `<li>${item}</li>`).join('');
  document.getElementById('modal-instructions-list').innerHTML =
    recipe.instructions.map(item => `<li>${item}</li>`).join('');
  document.getElementById('modal-nutrition-info').innerHTML =
    recipe.nutrition.map(item => `<li>${item}</li>`).join('');
  document.getElementById('modal-source-link').href = recipe.source;

  document.getElementById('recipe-detail-modal').classList.remove('hidden'); // show modal
  document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
  document.getElementById('recipe-detail-modal').classList.add('hidden'); // hide modal
  document.body.style.overflow = '';
}

// Health Recommendations
function getHealthRecommendations() {
  const initialHealthMessage = document.getElementById('initial-recommendation-message');
  const recommendationResults = document.getElementById('recommendation-results');
  const healthLoadingSpinner = document.getElementById('health-loading-spinner');
  const symptomInput = document.getElementById('health-input');

  initialHealthMessage.classList.add('hidden');
  recommendationResults.innerHTML = '';
  healthLoadingSpinner.classList.remove('hidden');

  const selectedSymptom = symptomInput.value;

  setTimeout(() => {
    healthLoadingSpinner.classList.add('hidden');

    if (!selectedSymptom) {
      initialHealthMessage.classList.remove('hidden');
      recommendationResults.innerHTML = '';
      return;
    }

    const data = healthRecommendationsData[selectedSymptom];

    if (data) {
      let htmlContent = `
                <p class="text-gray-700 text-lg mb-4">${data.message}</p>
                <h4 class="text-xl font-semibold text-gray-800 mb-3">Meal Plan:</h4>
                <ul class="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    ${data.mealPlan.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
      if (data.recipes && data.recipes.length > 0) {
        htmlContent += `
                    <h4 class="text-xl font-semibold text-gray-800 mb-3">Recommended Recipes:</h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${data.recipes.map(rec => `
                            <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                                <img src="${rec.image}" alt="${rec.title}" class="w-full h-36 object-cover">
                                <div class="p-3">
                                    <h5 class="text-lg font-semibold text-gray-800 mb-1">${rec.title}</h5>
                                    <p class="text-gray-600 text-sm">${rec.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
      }
      recommendationResults.innerHTML = htmlContent;
    } else {
      recommendationResults.innerHTML = `
                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Recommended Meal Plan:</h3>
                <p class="text-gray-700 text-lg mb-4">For <span class="font-bold text-blue-600">${symptomInput.options[symptomInput.selectedIndex].text}</span>, a balanced diet with easily digestible foods is generally recommended. Consult a healthcare professional for personalized advice.</p>
                <p class="text-gray-500 mt-4">*(This is a demo. Actual recommendations would be generated based on detailed health data.)*</p>
            `;
    }
  }, 1200);
}

// --- Event Listeners --- 
document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements here so they actually exist
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const getMealPlanBtn = document.getElementById('get-meal-plan-btn');
  const recipeDetailModal = document.getElementById('recipe-detail-modal');
  const clearBtn = document.getElementById("clear-btn"); 

  // --- Clear search button logic ---
searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() !== "") {
    clearBtn.classList.remove("hidden"); // show the clear button
  } else {
    clearBtn.classList.add("hidden"); // hide it when input is empty
  }
});

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.classList.add("hidden"); // hide button again
  recipeGrid.innerHTML = "";
  noResultsMessage.classList.add("hidden");
  featuredRecipes.style.display = "block"; // show featured recipes back
});

  // Attach event listeners
  ///enter key ..
  searchBtn.addEventListener('click', searchRecipes);
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchRecipes();
    }
  });

  //recommendation
  getMealPlanBtn.addEventListener('click', getHealthRecommendations);

  //modal
  recipeDetailModal.addEventListener('click', (event) => {
    if (event.target === recipeDetailModal) {
      closeRecipeModal();
    }
  });

  // Initial load
  // renderRecipeCards(dummyRecipes);
  renderRecipeCards(dummyRecipes.slice(0, 4), 'featured-recipes');

  showPage('home-page');
});
document.getElementById('search-btn').addEventListener('click', searchRecipes);


searchInput.addEventListener("input", () => {
  // Show clear button only when text exists
  if (searchInput.value.trim() !== "") {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
});

