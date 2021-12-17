const recettes = [
  {
    name: "Soupe au curry",
    season: ["winter", "autumn"],
    duration: "2",
    mood: "healthy",
    type: "diner",
    difficulty: "easy",
    ingredient: ["curry","carottes","pommes de terre", "huile d'olive", "oignon", "gingembre", "bouillon volaille", "crème", "sel"],
  },

  {
    name: "Brownies",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "2",
    mood: "comfort",
    type: ["dessert", "brunch", "petit-dejeuner"],
    difficulty: "easy",
    ingredient: ["chocolat", "beurre", "sucre", "farine", "oeuf"],
  },

  {
    name: "Tomates cerises farcies au fromage",
    season: ["summer", "spring"],
    duration: "1",
    mood: ["comfort", "energy"],
    type: ["diner", "brunch", "dejeuner", "apero"],
    difficulty: "easy",
    ingredient: ["tomate", "fromage frais", "persil", "ciboulette"],
  },

  {
    name: "Guacamole",
    season: ["autumn", "summer", "spring"],
    duration: "1",
    mood: ["comfort", "energy", "healthy"],
    type: ["diner", "brunch", "dejeuner", "petit-dejeuner", "apero"],
    difficulty: "easy",
    ingredient: ["avocat", "oignon", "tomate", "citron vert", "tabasco"],
  },

   {
    name: "Pâtes au pesto de basilic",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "1",
    mood: ["comfort", "energy", "healthy"],
    type: ["diner", "brunch", "dejeuner"],
    difficulty: "easy",
    ingredient: ["confit de tomates", "parmesan", "ail", "basilic", "pignons de pin"],
  },

   {
    name: "Cake aux olives et jambon",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "2",
    mood: ["comfort", "energy", "healthy"],
    type: ["diner", "brunch", "dejeuner", "petit-dejeuner"],
    difficulty: ["easy", "medium"],
    ingredient: ["farine", "olives", "oeufs", "jambon", "gruyere", "vin blanc", "levure"],
  },
  {
    name: "Gaspacho",
    season: ["summer", "spring"],
    duration: "2",
    mood: [ "energy", "healthy"],
    type: ["diner", "brunch", "dejeuner", "apero"],
    difficulty: ["easy", "medium"],
    ingredient: ["tomate", "concombre", "poivron vert", "mie de pain", "ail", "poivron rouge", "oignon"],
  },

    {
    name: "Taboule maison",
    season: ["summer", "spring"],
    duration: "1",
    mood: "healthy",
    type: ["diner", "brunch", "dejeuner"],
    difficulty: "easy",
    ingredient: ["coucous", "concombre", "coriandre", "tomate", "citron", "menthe"],
  },

  {
    name: "Pancake",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "2",
    mood: ["comfort"],
    type: ["brunch", "dejeuner", "petit-dejeuner"],
    difficulty: ["easy", "medium"],
    ingredient: ["lait", "huile", "sucre", "farine", "oeuf", "levure", "sucre vanille"],
  },

  {
    name: "Oeufs au bacon",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "1",
    mood: ["comfort"],
    type: ["brunch", "dejeuner", "petit-dejeuner"],
    difficulty: ["easy"],
    ingredient: ["bacon", "huile", "oeuf"],
  },

   {
    name: "Feuilletés saucisses minute",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "1",
    mood: ["comfort"],
    type: ["brunch", "dejeuner", "Apero", "diner"],
    difficulty: ["easy"],
    ingredient: ["saucisse", "pate feuilletee"],
  },

    {
    name: "Oeufs au bacon",
    season: ["winter", "autumn", "summer", "spring"],
    duration: "1",
    mood: ["comfort"],
    type: ["brunch", "dejeuner", "petit-dejeuner"],
    difficulty: ["easy"],
    ingredient: ["bacon", "huile", "oeuf"],
  },

   {
    name: "Tiramisu léger fraises spéculos",
    season: ["winter", "autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort", "healthy"],
    type: ["brunch", "dejeuner", "petit-dejeuner", "diner"],
    difficulty: "easy",
    ingredient: ["fraise", "framboise", "speculoos", "sucre", "oeuf", "fromage-blanc"],
  },

    {
    name: "Gratin courgettes-pommes de terre",
    season: ["winter", "autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort", "healthy"],
    type: ["brunch", "dejeuner", "petit-dejeuner", "diner"],
    difficulty: ["easy", "medium"],
    ingredient: ["pommes de terre", "ail", "noix de muscade", "courgettes", "beurre", "origan"],
  },

   {
    name: "Sandwich au poulet",
    season: ["winter", "autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort", "healthy", "energy"],
    type: ["brunch", "dejeuner", "petit-dejeuner", "diner"],
    difficulty: ["easy", "medium"],
    ingredient: ["baguette", "poulet", "tomate confites", "persil", "salade", "ail"],
  },

   {
    name: "Tarte aux pommes traditionnelle",
    season: ["winter", "autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort"],
    type: "dessert",
    difficulty: ["easy", "medium"],
    ingredient: ["farine", "beurre", "pommes", "sucre vamille", "fleur d'oranger"],
  },

   {
    name: "Risotto alla parmigiana",
    season: ["winter", "autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort"],
    type: ["brunch", "dejeuner", "petit-dejeuner", "diner"],
    difficulty: ["easy", "medium"],
    ingredient: ["riz", "beurre", "oignon", "creme liquide", "vin blanc", "parmesan"],
  },

    {
    name: "Ratatouille",
    season: ["summer", "spring"],
    duration: "3",
    mood: ["healthy", "energy"],
    type: ["dejeuner", "diner"],
    difficulty: "hard",
    ingredient: ["poivrons", "courgette", "tomates", "ketchup", "echalote", "ail", "oignon"],
  },

   {
    name: "Wok de légumes",
    season: ["winter", "autumn", "summer", "spring",],
    duration: ["1","2"],
    mood: ["comfort", "healthy", "energy"],
    type: ["dejeuner", "diner"],
    difficulty: "medium",
    ingredient: ["nouilles", "pois gourmands", "brocolis", "ketchup", "crevettes", "sauce soja", "mais", "poivrons"],
  },

   {
    name: "Bouchées blinis et saumon",
    season: ["autumn", "summer", "spring",],
    duration: "2",
    mood: ["comfort", "healthy", "energy"],
    type: ["brunch", "apero"],
    difficulty: ["easy", "medium"],
    ingredient: ["blinis", "creme fraiche epaisse", "citron", "saumon fume", "ciboulette", "moutarde"],
  },

  {
    name: "Empanadas au bœuf, olives et tomates séchées",
    season: ["winter", "autumn", "summer", "spring",],
    duration: "3",
    mood: ["healthy", "energy"],
    type: ["dejeuner", "diner"],
    difficulty: ["medium", "hard"],
    ingredient: ["pates brisee", "oeuf", "boeuf hache", "olives", "tomate sechees", "oignon", "ail", "concentre de tomates"],
  },

   {
    name: "Entrecôte grillée et frites maison",
    season: ["winter", "autumn", "spring"],
    duration: "2",
    mood: "comfort",
    type: ["dejeuner", "diner"],
    difficulty: "easy",
    ingredient: ["pommes de terre", "entrecotes", "huile"],
  },

  {
    name: "Tarte au thon",
    season: ["autumn", "summer", "spring"],
    duration: ["1","2"],
    mood: ["comfort", "energy"],
    type: ["dejeuner", "diner", "apero"],
    difficulty: ["easy", "medium"],
    ingredient: ["pate feuilletee", "tomates", "creme fraiche", "thon"],
  },

  {
    name: "Salade niçoise",
    season: "summer",
    duration: "1",
    mood: ["energy", "healthy"],
    type: ["dejeuner", "diner"],
    difficulty: "easy",
    ingredient: ["laitue", "tomates", "oeuf", "thon", "oignon", "poivron vert", "fenouil", "filet d'anchois", "olives", "radis"],
  },

   {
    name: "Salade chèvre, lardons et champignon",
    season: ["summer", "spring",],
    duration: "1",
    mood: ["energy", "healthy"],
    type: ["dejeuner", "diner"],
    difficulty: "easy",
    ingredient: ["laitue", "tomates", "crouton", "lardon", "champignon", "fromage chevre"],
  },
        
];


