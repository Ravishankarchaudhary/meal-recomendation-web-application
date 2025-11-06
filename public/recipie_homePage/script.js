// Dummy Recipes Database (30 Recipes)
const dummyRecipes = [
  {
    id: "1",
    title: "Grilled Chicken Salad",
    description: "A light and healthy grilled chicken salad with fresh vegetables.",
    ingredients: ["chicken breast", "lettuce", "tomato", "cucumber", "olive oil", "lemon juice", "salt", "pepper"],
    cuisine: "Continental",
    mealType: "Lunch",
    diet: "Weight Loss",
    healthCondition: ["Cold & Cough", "Weakness (Post-Recovery)"],
    instructions: [
      "Grill chicken until cooked.",
      "Chop vegetables and mix in a bowl.",
      "Add grilled chicken and drizzle olive oil and lemon juice.",
      "Season with salt and pepper and serve."
    ],
    nutrition: ["Calories: 250", "Protein: 25g"],
    prepTime: "20 mins",
    servings: "2",
    image: "GrilledChickenSalad.jpg",
    source: "#"
  },
  {
    id: "2",
    title: "Vegetable Stir-Fry",
    description: "Healthy and quick stir-fry with colorful vegetables and light soy sauce.",
    ingredients: ["broccoli", "bell pepper", "carrot", "mushrooms", "soy sauce", "garlic", "ginger"],
    cuisine: "Chinese",
    mealType: "Dinner",
    diet: "Balanced Diet",
    healthCondition: ["Cold & Cough", "Fever"],
    instructions: [
      "Heat oil, add garlic and ginger.",
      "Add vegetables and stir-fry for 5-6 minutes.",
      "Add soy sauce, season, and serve hot."
    ],
    nutrition: ["Calories: 180", "Protein: 6g"],
    prepTime: "15 mins",
    servings: "1",
    image: "VegStirFry.jpg",
    source: "#"
  },
  {
    id: "3",
    title: "Spaghetti Bolognese",
    description: "Classic Italian spaghetti with rich tomato and minced sauce.",
    ingredients: ["spaghetti", "tomato", "garlic", "onion", "olive oil"],
    cuisine: "Italian",
    mealType: "Dinner",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook spaghetti and drain.",
      "Prepare sauce with tomato, onion, and garlic.",
      "Mix pasta with sauce and serve."
    ],
    nutrition: ["Calories: 350", "Protein: 14g"],
    prepTime: "25 mins",
    servings: "2",
    image: "SpaghettiBolognese.jpg",
    source: "#"
  },
  {
    id: "4",
    title: "Paneer Butter Masala",
    description: "Rich Indian curry with paneer in creamy tomato gravy.",
    ingredients: ["paneer", "tomato", "butter", "cream", "spices", "salt"],
    cuisine: "Indian",
    mealType: "Dinner",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Prepare tomato gravy, add paneer cubes and cream.",
      "Simmer until creamy and serve with roti or rice."
    ],
    nutrition: ["Calories: 320", "Protein: 15g"],
    prepTime: "25 mins",
    servings: "2",
    image: "PaneerButterMasala.jpg",
    source: "#"
  },
  {
    id: "5",
    title: "Fish Tacos",
    description: "Crispy tacos with lightly spiced fish and lemon sauce.",
    ingredients: ["fish fillets", "tortilla", "cabbage", "lemon juice", "yogurt", "salt"],
    cuisine: "Continental",
    mealType: "Lunch",
    diet: "Balanced Diet",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook fish until golden.",
      "Fill tacos with cabbage, fish, and sauce.",
      "Serve fresh."
    ],
    nutrition: ["Calories: 280", "Protein: 18g"],
    prepTime: "20 mins",
    servings: "2",
    image: "FishTacos.jpg",
    source: "#"
  },
  {
    id: "6",
    title: "Quinoa Salad",
    description: "Light vegan salad with quinoa, vegetables, and lemon dressing.",
    ingredients: ["quinoa", "cucumber", "tomato", "lemon juice", "olive oil"],
    cuisine: "Continental",
    mealType: "Lunch",
    diet: "Vegan",
    healthCondition: ["Fever", "Cold & Cough"],
    instructions: [
      "Cook quinoa and let it cool.",
      "Mix with chopped vegetables and dressing."
    ],
    nutrition: ["Calories: 200", "Protein: 8g"],
    prepTime: "15 mins",
    servings: "2",
    image: "QuinoaSalad.jpg",
    source: "#"
  },
  {
    id: "7",
    title: "Chicken Burger",
    description: "Soft burger with grilled chicken and fresh vegetables.",
    ingredients: ["chicken patty", "bun", "lettuce", "tomato", "cheese"],
    cuisine: "Continental",
    mealType: "Snack",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Grill chicken, assemble burger with toppings, and serve hot."
    ],
    nutrition: ["Calories: 380", "Protein: 20g"],
    prepTime: "20 mins",
    servings: "1",
    image: "ChickenBurger.jpg",
    source: "#"
  },
  {
    id: "8",
    title: "Chole Bhature",
    description: "Spicy chickpeas served with fried Indian bread.",
    ingredients: ["chickpeas", "flour", "spices", "onion", "tomato", "oil"],
    cuisine: "Indian",
    mealType: "Lunch",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook chickpeas with masala.",
      "Fry bhature and serve with curry."
    ],
    nutrition: ["Calories: 480", "Protein: 14g"],
    prepTime: "35 mins",
    servings: "3",
    image: "CholeBhature.jpg",
    source: "#"
  },
  {
    id: "9",
    title: "Miso Soup",
    description: "Soothing soup with tofu and miso broth.",
    ingredients: ["miso paste", "tofu", "spring onion", "water"],
    cuisine: "Chinese",
    mealType: "Dinner",
    diet: "Vegan",
    healthCondition: ["Fever", "Cold & Cough", "Diarrhea"],
    instructions: [
      "Simmer tofu in water with miso paste and garnish with spring onion."
    ],
    nutrition: ["Calories: 120", "Protein: 7g"],
    prepTime: "10 mins",
    servings: "2",
    image: "MisoSoup.jpg",
    source: "#"
  },
  {
    id: "10",
    title: "Avocado Toast",
    description: "Creamy avocado on crispy toast for a healthy breakfast.",
    ingredients: ["bread", "avocado", "lemon juice", "salt", "pepper"],
    cuisine: "Continental",
    mealType: "Breakfast",
    diet: "Vegan",
    healthCondition: ["Fever", "Cold & Cough"],
    instructions: [
      "Toast bread, mash avocado with lemon and salt, spread and serve."
    ],
    nutrition: ["Calories: 200", "Protein: 5g"],
    prepTime: "10 mins",
    servings: "1",
    image: "AvocadoToast.jpg",
    source: "#"
  },
  {
    id: "11",
    title: "Creamy Garlic Pasta",
    description: "Mild Italian pasta with garlic and cream sauce.",
    ingredients: ["pasta", "garlic", "cream", "olive oil", "salt"],
    cuisine: "Italian",
    mealType: "Dinner",
    diet: "Balanced Diet",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook pasta, prepare creamy garlic sauce, and mix well."
    ],
    nutrition: ["Calories: 350", "Protein: 10g"],
    prepTime: "25 mins",
    servings: "2",
    image: "CreamyGarlicPasta.jpg",
    source: "#"
  },
  {
    id: "12",
    title: "Spicy Indian Chicken Curry",
    description: "Aromatic chicken curry with rich spices.",
    ingredients: ["chicken", "onion", "tomato", "garlic", "spices"],
    cuisine: "Indian",
    mealType: "Dinner",
    diet: "Balanced Diet",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook onion and spices, add chicken and simmer until tender."
    ],
    nutrition: ["Calories: 400", "Protein: 30g"],
    prepTime: "40 mins",
    servings: "3",
    image: "ChickenCurry.jpg",
    source: "#"
  },
  {
    id: "13",
    title: "Fluffy Banana Pancakes",
    description: "Soft pancakes perfect for breakfast or snacks.",
    ingredients: ["banana", "flour", "milk", "egg", "butter"],
    cuisine: "Continental",
    mealType: "Breakfast",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Mix ingredients, cook pancakes until golden, and serve warm."
    ],
    nutrition: ["Calories: 280", "Protein: 7g"],
    prepTime: "15 mins",
    servings: "2",
    image: "BananaPancakes.jpg",
    source: "#"
  },
  {
    id: "14",
    title: "Chicken Biryani",
    description: "Fragrant rice cooked with marinated chicken and spices.",
    ingredients: ["rice", "chicken", "yogurt", "onion", "spices"],
    cuisine: "Indian",
    mealType: "Lunch",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Layer rice and chicken, cook until tender, and serve with raita."
    ],
    nutrition: ["Calories: 500", "Protein: 28g"],
    prepTime: "50 mins",
    servings: "4",
    image: "Biryani.jpg",
    source: "#"
  },
  {
    id: "15",
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh basil and mozzarella.",
    ingredients: ["pizza base", "tomato sauce", "cheese", "basil"],
    cuisine: "Italian",
    mealType: "Dinner",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Assemble pizza and bake until cheese melts."
    ],
    nutrition: ["Calories: 400", "Protein: 14g"],
    prepTime: "25 mins",
    servings: "2",
    image: "MargheritaPizza.jpg",
    source: "#"
  },
  {
    id: "16",
    title: "Vanilla Custard",
    description: "Smooth dessert ideal for recovery and mild diets.",
    ingredients: ["milk", "sugar", "cornstarch", "vanilla"],
    cuisine: "Continental",
    mealType: "Snack",
    diet: "Balanced Diet",
    healthCondition: ["Fever", "Food Poisoning", "Weakness (Post-Recovery)"],
    instructions: [
      "Heat milk and sugar, add cornstarch and vanilla, stir until thick."
    ],
    nutrition: ["Calories: 150", "Protein: 5g"],
    prepTime: "15 mins",
    servings: "2",
    image: "VanillaCustard.jpg",
    source: "#"
  },
  {
    id: "17",
    title: "Chicken Handi",
    description: "Traditional Indian chicken curry cooked in creamy yogurt base.",
    ingredients: ["chicken", "yogurt", "cream", "onion", "spices"],
    cuisine: "Indian",
    mealType: "Dinner",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Cook chicken with onion and spices, add yogurt and cream, simmer until tender."
    ],
    nutrition: ["Calories: 320", "Protein: 24g"],
    prepTime: "40 mins",
    servings: "3",
    image: "ChickenHandi.jpg",
    source: "#"
  },
  {
    id: "18",
    title: "Veggie Omelette",
    description: "Fluffy omelette packed with colorful vegetables — perfect for a protein-rich breakfast.",
    ingredients: ["eggs", "onion", "tomato", "capsicum", "salt", "pepper", "oil"],
    cuisine: "Continental",
    mealType: "Breakfast",
    diet: "Balanced Diet",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Beat eggs with salt and pepper.",
      "Add chopped vegetables and cook on a pan until fluffy."
    ],
    nutrition: ["Calories: 200", "Protein: 12g"],
    prepTime: "10 mins",
    servings: "1",
    image: "VegOmelette.jpg",
    source: "#"
  },
  {
    id: "19",
    title: "Masala Oats",
    description: "Spicy and healthy Indian-style oats rich in fiber and low in calories.",
    ingredients: ["oats", "onion", "tomato", "carrot", "peas", "spices", "water"],
    cuisine: "Indian",
    mealType: "Breakfast",
    diet: "Weight Loss",
    healthCondition: ["Cold & Cough"],
    instructions: [
      "Sauté vegetables in a pan.",
      "Add oats and water, cook until soft."
    ],
    nutrition: ["Calories: 180", "Protein: 7g"],
    prepTime: "15 mins",
    servings: "1",
    image: "MasalaOats.jpg",
    source: "#"
  },
  {
    id: "20",
    title: "Paneer Sandwich",
    description: "Grilled sandwich filled with spiced paneer and veggies — ideal for snacks or light lunch.",
    ingredients: ["paneer", "bread", "onion", "tomato", "butter", "spices"],
    cuisine: "Indian",
    mealType: "Snack",
    diet: "Weight Gain",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Mix crumbled paneer with vegetables and spices.",
      "Fill between bread slices and grill until golden."
    ],
    nutrition: ["Calories: 310", "Protein: 16g"],
    prepTime: "15 mins",
    servings: "2",
    image: "PaneerSandwich.jpg",
    source: "#"
  },
  {
    id: "21",
    title: "Pasta Primavera",
    description: "A colorful Italian pasta tossed with seasonal vegetables and olive oil.",
    ingredients: ["pasta", "bell peppers", "zucchini", "olive oil", "garlic", "salt"],
    cuisine: "Italian",
    mealType: "Lunch",
    diet: "Balanced Diet",
    healthCondition: ["Fever"],
    instructions: [
      "Cook pasta until al dente.",
      "Toss with sautéed vegetables and olive oil."
    ],
    nutrition: ["Calories: 280", "Protein: 8g"],
    prepTime: "20 mins",
    servings: "2",
    image: "PastaPrimavera.jpg",
    source: "#"
  },
  {
    id: "22",
    title: "Chicken Fried Rice",
    description: "A flavorful Indo-Chinese rice dish made with chicken, eggs, and vegetables.",
    ingredients: ["rice", "chicken", "egg", "soy sauce", "carrot", "capsicum", "oil"],
    cuisine: "Chinese",
    mealType: "Lunch",
    diet: "Non-Vegetarian",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Stir-fry chicken and vegetables.",
      "Add cooked rice, soy sauce, and scrambled egg."
    ],
    nutrition: ["Calories: 350", "Protein: 22g"],
    prepTime: "25 mins",
    servings: "2",
    image: "ChickenFriedRice.jpg",
    source: "#"
  },
  {
    id: "23",
    title: "Vegetable Spring Rolls",
    description: "Crispy and delicious Chinese appetizer filled with stir-fried veggies.",
    ingredients: ["spring roll sheets", "cabbage", "carrot", "capsicum", "soy sauce", "oil"],
    cuisine: "Chinese",
    mealType: "Snack",
    diet: "Vegan",
    healthCondition: ["Food Poisoning"],
    instructions: [
      "Stir-fry veggies, fill in wrappers, and deep fry until golden."
    ],
    nutrition: ["Calories: 150", "Protein: 4g"],
    prepTime: "20 mins",
    servings: "4",
    image: "VegetableSpringRolls.jpg",
    source: "#"
  },
  {
    id: "24",
    title: "Grilled Fish",
    description: "Soft, grilled fish topped with tangy lemon butter — a light yet protein-rich dinner.",
    ingredients: ["fish fillet", "butter", "lemon juice", "salt", "pepper"],
    cuisine: "Continental",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Grill fish with butter and lemon.",
      "Serve with sautéed vegetables."
    ],
    nutrition: ["Calories: 290", "Protein: 25g"],
    prepTime: "25 mins",
    servings: "2",
    image: "GrilledFish.jpg",
    source: "#"
  },
  {
    id: "25",
    title: "Minestrone Soup",
    description: "Classic Italian vegetable soup rich in fiber and nutrients.",
    ingredients: ["beans", "pasta", "tomato", "carrot", "celery", "onion", "garlic"],
    cuisine: "Italian",
    mealType: "Dinner",
    diet: "Vegan",
    healthCondition: ["Fever", "Cold & Cough"],
    instructions: [
      "Simmer vegetables with beans and pasta until tender."
    ],
    nutrition: ["Calories: 180", "Protein: 6g"],
    prepTime: "30 mins",
    servings: "2",
    image: "MinestroneSoup.jpg",
    source: "#"
  },
  {
    id: "26",
    title: "Chicken Noodles",
    description: "Popular Indo-Chinese dish with chicken, vegetables, and soy sauce.",
    ingredients: ["noodles", "chicken", "egg", "capsicum", "soy sauce", "oil"],
    cuisine: "Chinese",
    mealType: "Dinner",
    diet: "Non-Vegetarian",
    healthCondition: ["Weakness (Post-Recovery)"],
    instructions: [
      "Stir-fry vegetables, add chicken, then mix with boiled noodles and sauce."
    ],
    nutrition: ["Calories: 320", "Protein: 20g"],
    prepTime: "20 mins",
    servings: "2",
    image: "ChickenNoodles.jpg",
    source: "#"
  },
  {
    id: "27",
    title: "Greek Salad",
    description: "A refreshing salad made with cucumber, tomato, feta, and olives.",
    ingredients: ["cucumber", "tomato", "feta", "olive", "olive oil", "lemon juice"],
    cuisine: "Continental",
    mealType: "Snack",
    diet: "Balanced Diet",
    healthCondition: ["Fever", "Cold & Cough"],
    instructions: [
      "Combine all chopped ingredients and drizzle with olive oil and lemon."
    ],
    nutrition: ["Calories: 150", "Protein: 5g"],
    prepTime: "10 mins",
    servings: "2",
    image: "GreekSalad.jpg",
    source: "#"
  },
  {
    id: "28",
    title: "Vegetable Fried Rice",
    description: "Simple Chinese fried rice packed with veggies and light seasoning.",
    ingredients: ["rice", "carrot", "capsicum", "peas", "soy sauce", "oil"],
    cuisine: "Chinese",
    mealType: "Lunch",
    diet: "Vegan",
    healthCondition: ["Food Poisoning"],
    instructions: [
      "Stir-fry vegetables, add rice and soy sauce, toss well."
    ],
    nutrition: ["Calories: 250", "Protein: 6g"],
    prepTime: "20 mins",
    servings: "2",
    image: "VegFriedRice.jpg",
    source: "#"
  },
  {
    id: "29",
    title: "Tomato Basil Pasta",
    description: "Light Italian pasta in fresh tomato-basil sauce, ideal for weight loss diets.",
    ingredients: ["pasta", "tomato", "basil", "garlic", "olive oil", "salt"],
    cuisine: "Italian",
    mealType: "Dinner",
    diet: "Weight Loss",
    healthCondition: ["Cold & Cough"],
    instructions: [
      "Cook pasta, prepare tomato-basil sauce, and mix together."
    ],
    nutrition: ["Calories: 240", "Protein: 8g"],
    prepTime: "25 mins",
    servings: "2",
    image: "TomatoBasilPasta.jpg",
    source: "#"
  },
  {
    id: "30",
    title: "Fruit Yogurt Bowl",
    description: "Refreshing snack with fruits and yogurt — rich in probiotics and vitamins.",
    ingredients: ["yogurt", "apple", "banana", "honey", "chia seeds", "any fruit"],
    cuisine: "Continental",
    mealType: "Snack",
    diet: "Balanced Diet",
    healthCondition: ["Diarrhea", "Fever"],
    instructions: [
      "Mix yogurt and fruits, drizzle with honey, and sprinkle chia seeds."
    ],
    nutrition: ["Calories: 180", "Protein: 9g"],
    prepTime: "10 mins",
    servings: "1",
    image: "FruitYogurtBowl.jpg",
    source: "#"
  }
];

// --- Enhanced Health Recommendations Data ---
const healthRecommendationsData = {
  fever: {
    message: "Stay hydrated and eat light, nutrient-rich foods to support recovery.",
    mealPlan: {
      breakfast: { desc: "Oats porridge with banana and honey.", calories: "220 kcal" },
      lunch: { desc: "Soft rice with boiled vegetables and moong dal.", calories: "350 kcal" },
      dinner: { desc: "Clear vegetable soup with whole wheat toast.", calories: "180 kcal" }
    },
    precautions: [
      "Avoid spicy, oily, or fried foods.",
      "Drink plenty of water, juices, and soups.",
      "Take enough rest and avoid heavy physical activity."
    ],
    recipes: [
      { title: "Vegetable Khichdi", image: "veg_khichdi.jpg", desc: "Soft and easily digestible comfort meal." },
      { title: "Lemon Coriander Soup", image: "lemon_soup.jpg", desc: "Refreshing soup that helps boost recovery." }
    ]
  },

  diarrhea: {
    message: "Replenish fluids and eat easily digestible meals to prevent dehydration.",
    mealPlan: {
      breakfast: { desc: "Steamed apple or banana with toast.", calories: "200 kcal" },
      lunch: { desc: "Plain khichdi or boiled rice with curd.", calories: "300 kcal" },
      dinner: { desc: "Clear vegetable broth or thin dal with rice.", calories: "250 kcal" }
    },
    precautions: [
      "Avoid dairy, fried foods, and spicy dishes.",
      "Drink ORS or coconut water frequently.",
      "Eat small, frequent meals instead of large portions."
    ],
    recipes: [
      { title: "Moong Dal Khichdi", image: "moong_khichdi.jpg", desc: "Gentle on the stomach and nutrient-rich." },
      { title: "Rice Curd Bowl", image: "rice_curd.jpg", desc: "Helps soothe the digestive system." }
    ]
  },

  "cold-cough": {
    message: "Eat warm, soothing foods and stay hydrated to relieve throat irritation.",
    mealPlan: {
      breakfast: { desc: "Warm turmeric milk with multigrain toast.", calories: "230 kcal" },
      lunch: { desc: "Vegetable dal soup with rice.", calories: "320 kcal" },
      dinner: { desc: "Chicken or lentil soup with garlic and pepper.", calories: "250 kcal" }
    },
    precautions: [
      "Avoid cold drinks, ice cream, and refrigerated food.",
      "Keep your body warm and hydrated.",
      "Include ginger, garlic, and honey in your diet."
    ],
    recipes: [
      { title: "Ginger-Lemon Tea", image: "ginger_tea.jpg", desc: "Natural immunity booster and throat soother." },
      { title: "Pepper Garlic Soup", image: "pepper_soup.jpg", desc: "Spicy broth that helps clear nasal congestion." }
    ]
  },

  weakness: {
    message: "Increase energy with iron and protein-rich meals that restore vitality.",
    mealPlan: {
      breakfast: { desc: "Boiled eggs with brown bread and milk.", calories: "300 kcal" },
      lunch: { desc: "Rice, dal, and sautéed spinach.", calories: "400 kcal" },
      dinner: { desc: "Paneer or tofu curry with chapati.", calories: "350 kcal" }
    },
    precautions: [
      "Avoid skipping meals.",
      "Stay hydrated and get adequate sleep.",
      "Add nuts, seeds, and fruits to your daily diet."
    ],
    recipes: [
      { title: "Spinach Dal", image: "spinach_dal.jpg", desc: "Iron-rich and comforting lentil dish." },
      { title: "Paneer Stir Fry", image: "paneer_stir.jpg", desc: "High-protein dish for strength and recovery." }
    ]
  },

  "food-poisoning": {
    message: "Allow your stomach to rest and eat mild, non-spicy foods until recovery.",
    mealPlan: {
      breakfast: { desc: "Toast with banana and herbal tea.", calories: "210 kcal" },
      lunch: { desc: "Plain rice with moong dal and boiled potatoes.", calories: "340 kcal" },
      dinner: { desc: "Light vegetable soup or thin porridge.", calories: "200 kcal" }
    },
    precautions: [
      "Avoid street food and heavy meals.",
      "Drink plenty of water and ORS to stay hydrated.",
      "Avoid dairy and spicy food for a few days."
    ],
    recipes: [
      { title: "Plain Moong Dal", image: "plain_dal.jpg", desc: "Light and easy to digest, perfect for recovery." },
      { title: "Vegetable Clear Soup", image: "clear_soup.jpg", desc: "Keeps you hydrated and nourished." }
    ]
  }
};

const dietRecommendationsData = {
  "weight-loss": {
    message: "Focus on low-calorie, high-protein meals to support gradual fat loss.",
    mealPlan: {
      breakfast: { desc: "Oats with chia seeds and berries.", calories: "250 kcal" },
      lunch: { desc: "Grilled chicken with sautéed vegetables.", calories: "400 kcal" },
      dinner: { desc: "Lentil soup with brown rice.", calories: "350 kcal" },
    },
    tips: [
      "Avoid sugary drinks and refined carbs.",
      "Stay hydrated and walk after meals.",
      "Have small, frequent meals instead of heavy portions."
    ],
    recipes: [
      { title: "Grilled Paneer Salad", desc: "A high-protein, low-fat option.", image: "https://source.unsplash.com/400x300/?salad" },
      { title: "Detox Smoothie", desc: "Spinach, banana, and flax seeds blend.", image: "https://source.unsplash.com/400x300/?smoothie" }
    ]
  },

  "weight-gain": {
    message: "Emphasize calorie-dense and protein-rich foods for healthy weight gain.",
    mealPlan: {
      breakfast: { desc: "Banana shake with peanut butter toast.", calories: "500 kcal" },
      lunch: { desc: "Rice, dal, and paneer curry with ghee.", calories: "600 kcal" },
      dinner: { desc: "Whole wheat chapati with soybean curry.", calories: "450 kcal" },
    },
    tips: [
      "Include nuts, dairy, and starchy vegetables.",
      "Eat protein after workouts.",
      "Avoid skipping meals."
    ],
    recipes: [
      { title: "Protein Smoothie", desc: "Banana, milk, oats, and honey.", image: "https://source.unsplash.com/400x300/?protein-shake" },
      { title: "Paneer Bhurji Wrap", desc: "Perfect post-lunch meal.", image: "https://source.unsplash.com/400x300/?wrap" }
    ]
  },

  "vegan": {
    message: "A plant-based diet rich in vitamins and minerals to maintain energy and balance.",
    mealPlan: {
      breakfast: { desc: "Vegetable poha with peanuts.", calories: "280 kcal" },
      lunch: { desc: "Dal tadka with rice and mixed salad.", calories: "450 kcal" },
      dinner: { desc: "Roti with palak paneer.", calories: "400 kcal" },
    },
    tips: [
      "Add lentils, legumes, and tofu for protein.",
      "Include vitamin B12-fortified foods.",
      "Use olive oil or ghee in moderation."
    ],
    recipes: [
      { title: "Veg Pulao", desc: "Lightly spiced rice with vegetables.", image: "https://source.unsplash.com/400x300/?pulao" },
      { title: "Paneer Curry", desc: "High-protein, rich in calcium.", image: "https://source.unsplash.com/400x300/?paneer" }
    ]
  },

  "balanced": {
    message: "Combines all essential nutrients for sustained energy and good health.",
    mealPlan: {
      breakfast: { desc: "Boiled eggs with whole wheat toast.", calories: "300 kcal" },
      lunch: { desc: "Brown rice, grilled fish, and salad.", calories: "500 kcal" },
      dinner: { desc: "Vegetable soup with multigrain chapati.", calories: "350 kcal" },
    },
    tips: [
      "Include all food groups every day.",
      "Control portion sizes.",
      "Stay hydrated and active."
    ],
    recipes: [
      { title: "Mixed Veg Soup", desc: "Light and full of fiber.", image: "https://source.unsplash.com/400x300/?soup" },
      { title: "Grilled Chicken Salad", desc: "Perfect balanced protein meal.", image: "https://source.unsplash.com/400x300/?chicken-salad" }
    ]
  },

  "non-vegetarian": {
    message: "Includes lean meats, eggs, and fish to maintain strength and stamina.",
    mealPlan: {
      breakfast: { desc: "Scrambled eggs and brown bread.", calories: "300 kcal" },
      lunch: { desc: "Chicken curry with rice and salad.", calories: "550 kcal" },
      dinner: { desc: "Grilled fish with sautéed vegetables.", calories: "400 kcal" },
    },
    tips: [
      "Prefer grilled or baked meat over fried.",
      "Balance protein with fiber-rich foods.",
      "Avoid red meat more than twice a week."
    ],
    recipes: [
      { title: "Grilled Chicken", desc: "Juicy and protein-packed.", image: "https://source.unsplash.com/400x300/?grilled-chicken" },
      { title: "Fish Curry", desc: "Lightly spiced and omega-3 rich.", image: "https://source.unsplash.com/400x300/?fish-curry" }
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

// --- Unified Search (Text + Filters) ---
function searchRecipes() {
  const recipeGrid = document.getElementById('recipe-grid');
  const noResultsMessage = document.getElementById('no-results-message');
  const recipeLoadingSpinner = document.getElementById('recipe-loading-spinner');
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.toLowerCase().trim();

  const cuisineFilter = document.getElementById("cuisineFilter");
  const mealTypeFilter = document.getElementById("mealTypeFilter");

  const selectedCuisine = cuisineFilter ? cuisineFilter.value.trim().toLowerCase() : "";
  const selectedMealType = mealTypeFilter ? mealTypeFilter.value.trim().toLowerCase() : "";

  // Clear old results
  recipeGrid.innerHTML = '';
  noResultsMessage.classList.add('hidden');

  // Case 1: If nothing is entered/selected → show featured
  if (query === "" && !selectedCuisine && !selectedMealType) {
    recipeLoadingSpinner.classList.add('hidden');
    document.getElementById("featured-recipes").style.display = "grid";
    return;
  }

  // Show loading
  recipeLoadingSpinner.classList.remove('hidden');

  setTimeout(() => {
    recipeLoadingSpinner.classList.add('hidden');

    // Filter recipes from dummyRecipes
    const filteredRecipes = dummyRecipes.filter(recipe => {
      const matchesText =
        query === "" ||
        (recipe.title && recipe.title.toLowerCase().includes(query)) ||
        (recipe.description && recipe.description.toLowerCase().includes(query)) ||
        (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(query)));

      const matchesCuisine =
        !selectedCuisine || (recipe.cuisine && recipe.cuisine.toLowerCase() === selectedCuisine);

      const matchesMealType =
        !selectedMealType || (recipe.mealType && recipe.mealType.toLowerCase() === selectedMealType);

      // Must satisfy all active conditions
      return matchesText && matchesCuisine && matchesMealType;
    });

    // Hide featured recipes if searching
    document.getElementById("featured-recipes").style.display = "none";

    // Display
    renderRecipeCards(filteredRecipes);

    // If nothing found
    if (filteredRecipes.length === 0) {
      noResultsMessage.classList.remove('hidden');
      noResultsMessage.textContent = "No recipes found for your selection.";
    }
  }, 800);
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


// 🌿 Health Recommendations (Improved UI Version)
function getHealthRecommendations() {
 // const initialHealthMessage = document.getElementById('initial-diet-message');
  const initialHealthMessage = document.getElementById('initial-health-message');

  const recommendationResults = document.getElementById('recommendation-results');
  const healthLoadingSpinner = document.getElementById('health-loading-spinner');
  const symptomInput = document.getElementById('health-select');

  // 🧹 Reset previous content before showing new data
  if (initialHealthMessage) initialHealthMessage.classList.add('hidden');
  if (recommendationResults) recommendationResults.innerHTML = '';
  if (healthLoadingSpinner) healthLoadingSpinner.classList.remove('hidden');

  const selectedSymptom = symptomInput.value;

  // ✅ Clear any diet spinner safely
  const dietLoadingSpinner = document.getElementById('diet-loading-spinner');
  const initialDietMessage = document.getElementById('initial-diet-message');
  if (dietLoadingSpinner) dietLoadingSpinner.classList.add('hidden');
  if (initialDietMessage) initialDietMessage.classList.add('hidden');

  setTimeout(() => {
    healthLoadingSpinner.classList.add('hidden');

    if (!selectedSymptom) {
      initialHealthMessage.classList.remove('hidden');
      recommendationResults.innerHTML = '';
      return;
    }

    const data = healthRecommendationsData[selectedSymptom];

    if (data) {
      // 💚 Header with selected condition
      let htmlContent = `
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mb-6 shadow-sm">
          <h3 class="text-xl font-semibold text-blue-700 mb-1">Condition Selected:</h3>
          <p class="text-gray-700 text-lg">
            <span class="font-bold text-blue-600">${symptomInput.options[symptomInput.selectedIndex].text}</span> — ${data.message}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 🍳 Breakfast -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-green-700 mb-2">🍳 Breakfast</h4>
            <p class="text-gray-700">${data.mealPlan.breakfast.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.breakfast.calories}</p>
          </div>

          <!-- 🍛 Lunch -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-orange-700 mb-2">🍛 Lunch</h4>
            <p class="text-gray-700">${data.mealPlan.lunch.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.lunch.calories}</p>
          </div>

          <!-- 🍲 Dinner -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-purple-700 mb-2">🍲 Dinner</h4>
            <p class="text-gray-700">${data.mealPlan.dinner.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.dinner.calories}</p>
          </div>
        </div>

        <!-- ⚠️ Precautions -->
        <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm">
          <h4 class="text-lg font-semibold text-yellow-700 mb-2">⚠️ Precautions</h4>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            ${data.precautions.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- 🍽️ Recommended Recipes -->
        ${data.recipes && data.recipes.length > 0 ? `
          <div class="mt-8">
            <h4 class="text-xl font-semibold text-gray-800 mb-3">🍽️ Recommended Recipes:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              ${data.recipes.map(rec => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                  <img src="${rec.image}" alt="${rec.title}" class="w-full h-40 object-cover">
                  <div class="p-3">
                    <h5 class="text-lg font-semibold text-gray-800 mb-1">${rec.title}</h5>
                    <p class="text-gray-600 text-sm">${rec.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      `;
recommendationResults.innerHTML = `
  ${htmlContent}
  <div class="text-center mt-8">
    <button id="download-meal-plan" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition">
      📄 Download Meal Plan as PDF
    </button>
  </div>
`;

 
// ✅ PDF button (safe, works every time without refresh)
setTimeout(() => {
  const downloadBtn = document.getElementById("download-meal-plan");
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      const element = document.getElementById("recommendation-results");
      const opt = {
        margin: 0.5,
        filename: "Meal_Plan.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
      };
      html2pdf().set(opt).from(element).save();
    };
  }
}, 100);



    } else {
      recommendationResults.innerHTML = `
        <div class="text-center py-10">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Recommended Meal Plan</h3>
          <p class="text-gray-700 text-lg mb-4">
            For <span class="font-bold text-blue-600">${symptomInput.options[symptomInput.selectedIndex].text}</span>, a balanced diet with easily digestible foods is generally recommended.
          </p>
          <p class="text-gray-500 mt-4">
            *(This is a demo. Actual recommendations would be generated based on detailed health data.)*
          </p>
        </div>
      `;
    }
  }, 1200);
}


// 🥗 Diet Recommendations (Improved UI Version)
function getDietRecommendations() {
  const initialDietMessage = document.getElementById('initial-diet-message');
  const recommendationResults = document.getElementById('recommendation-results');
  const dietLoadingSpinner = document.getElementById('diet-loading-spinner');
  const dietSelect = document.getElementById('diet-select');

  // Safety check: if any element is missing, stop gracefully
  if (!dietLoadingSpinner || !initialDietMessage || !recommendationResults) {
    console.error("❌ Missing DOM element(s):", {
      dietLoadingSpinner,
      initialDietMessage,
      recommendationResults
    });
    return;
  }

  const selectedDiet = dietSelect.value.trim();

  console.log("dietLoadingSpinner:", dietLoadingSpinner);
  console.log("initialDietMessage:", initialDietMessage);
  console.log("recommendationResults:", recommendationResults);


  //clears previous content
  recommendationResults.innerHTML = '';
  dietLoadingSpinner.classList.add('hidden');

  //if no selection 
  if (!selectedDiet) {
    initialDietMessage.classList.remove('hidden');
    return;
  }

  //hide the initial msg nd show loading 
  initialDietMessage.classList.add('hidden');
  dietLoadingSpinner.classList.remove('hidden');
  recommendationResults.innerHTML = '<div class="text-center py-10 text-gray-500">Loading new plan...</div>';

  //stimulate loading
  setTimeout(() => {
    dietLoadingSpinner.classList.add('hidden');

    const data = dietRecommendationsData[selectedDiet];
    console.log("🔍 Selected Diet:", selectedDiet, "Data found:", !!data);

    if (data) {
      // 🌿 Header with selected dietary goal
      let htmlContent = `
        <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-6 shadow-sm">
          <h3 class="text-xl font-semibold text-green-700 mb-1">Dietary Goal:</h3>
          <p class="text-gray-700 text-lg">
            <span class="font-bold text-green-600">${dietSelect.options[dietSelect.selectedIndex].text}</span> — ${data.message}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- 🥣 Breakfast -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-blue-700 mb-2">🥣 Breakfast</h4>
            <p class="text-gray-700">${data.mealPlan.breakfast.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.breakfast.calories}</p>
          </div>

          <!-- 🍱 Lunch -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-orange-700 mb-2">🍱 Lunch</h4>
            <p class="text-gray-700">${data.mealPlan.lunch.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.lunch.calories}</p>
          </div>

          <!-- 🍚 Dinner -->
          <div class="bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <h4 class="text-lg font-semibold text-purple-700 mb-2">🍚 Dinner</h4>
            <p class="text-gray-700">${data.mealPlan.dinner.desc}</p>
            <p class="text-sm text-gray-500 mt-2">Calories: ${data.mealPlan.dinner.calories}</p>
          </div>
        </div>

        <!-- ⚠️ Tips & Guidance -->
        <div class="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg shadow-sm">
          <h4 class="text-lg font-semibold text-yellow-700 mb-2">💡 Tips for Success</h4>
          <ul class="list-disc list-inside text-gray-700 space-y-1">
            ${data.tips.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <!-- 🥗 Featured Recipes -->
        ${data.recipes && data.recipes.length > 0 ? `
          <div class="mt-8">
            <h4 class="text-xl font-semibold text-gray-800 mb-3">🥗 Featured Recipes:</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              ${data.recipes.map(rec => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                  <img src="${rec.image}" alt="${rec.title}" class="w-full h-40 object-cover">
                  <div class="p-3">
                    <h5 class="text-lg font-semibold text-gray-800 mb-1">${rec.title}</h5>
                    <p class="text-gray-600 text-sm">${rec.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      `;
recommendationResults.innerHTML = `
  ${htmlContent}
  <div class="text-center mt-8">
    <button id="download-meal-plan" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition">
      📄 Download Meal Plan as PDF
    </button>
  </div>
`;

 /* // attach click event after button is added
document.getElementById("download-meal-plan").addEventListener("click", () => {
  const element = document.getElementById("recommendation-results");
  const opt = {
    margin: 0.5,
    filename: "Meal_Plan.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(element).save();
}); */

  // ✅ safer PDF button (no refresh issue)
setTimeout(() => {
  const downloadBtn = document.getElementById("download-meal-plan");
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      const element = document.getElementById("recommendation-results");
      const opt = {
        margin: 0.5,
        filename: "Meal_Plan.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
      };
      html2pdf().set(opt).from(element).save();
    };
  }
 }, 100);

     } else {
      recommendationResults.innerHTML = `
        <div class="text-center py-10">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">Recommended Meal Plan</h3>
          <p class="text-gray-700 text-lg mb-4">
            For <span class="font-bold text-green-600">${dietSelect.options[dietSelect.selectedIndex].text}</span>, a balanced and nutritious meal plan is suggested.
          </p>
          <p class="text-gray-500 mt-4">
            *(This is a demo. Actual recommendations would be generated based on user diet data.)*
          </p>
        </div>
      `;
    }
  }, 1200);
}

// --- Event Listeners --- 
document.addEventListener("DOMContentLoaded", () => {
  // --- Get DOM elements ---
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const recipeDetailModal = document.getElementById('recipe-detail-modal');
  const clearBtn = document.getElementById("clear-btn");
  const getMealPlanBtn = document.getElementById('get-meal-plan-btn');

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

  // --- Search button + Enter key logic ---
  searchBtn.addEventListener('click', searchRecipes);
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') searchRecipes();
  });

  // --- Meal Plan Button Click ---
  if (getMealPlanBtn) {
    console.log("✅ Meal Plan Button Found");
    getMealPlanBtn.addEventListener('click', () => {
      console.log("🟢 Meal Plan Button Clicked!");
      const dietValue = document.getElementById('diet-select').value;
      const symptomValue = document.getElementById('health-select').value;

      if (dietValue && symptomValue) {
        alert("Please select only one option ...");
      } else if (symptomValue) {
        getHealthRecommendations();
      } else if (dietValue) {
        getDietRecommendations();
      } else {
        alert("Please select at least one option.");
      }
    });
  } else {
    console.error("❌ Meal Plan Button NOT found in DOM!");
  }

  // --- Modal close logic ---
  recipeDetailModal.addEventListener('click', (event) => {
    if (event.target === recipeDetailModal) closeRecipeModal();
  });

  // --- Initial load ---
  renderRecipeCards(dummyRecipes.slice(0, 4), 'featured-recipes');
  showPage('home-page');
});