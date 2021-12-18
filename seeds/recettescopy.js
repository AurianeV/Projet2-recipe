const recipes = [
  {
    "name": "Soupe au curry",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["healthy"],
    "type": ["diner"],
    "difficulty": "easy",
    "ingredient": [
      "curry",
      "carottes",
      "pommes de terre",
      "huile d'olive",
      "oignon",
      "gingembre",
      "bouillon volaille",
      "crème",
      "sel"
    ]
  },

  {
    "name": "Brownies",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["dessert", "brunch", "petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": ["chocolat", "beurre", "sucre", "farine", "oeuf"]
  },

  {
    "name": "Tomates cerises farcies au fromage",
    "season": ["summer", "spring"],
    "duration": "1",
    "mood": ["comfort", "energy"],
    "type": ["diner", "brunch", "dejeuner", "apero"],
    "difficulty": "easy",
    "ingredient": ["tomate", "fromage frais", "persil", "ciboulette"]
  },

  {
    "name": "Guacamole",
    "season": ["autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort", "energy", "healthy"],
    "type": ["diner", "brunch", "dejeuner", "petit-dejeuner", "apero"],
    "difficulty": "easy",
    "ingredient": ["avocat", "oignon", "tomate", "citron vert", "tabasco"]
  },

  {
    "name": "Pâtes au pesto de basilic",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort", "energy", "healthy"],
    "type": ["diner", "brunch", "dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "confit de tomates",
      "parmesan",
      "ail",
      "basilic",
      "pignons de pin"
    ]
  },

  {
    "name": "Cake aux olives et jambon",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort", "energy", "healthy"],
    "type": ["diner", "brunch", "dejeuner", "petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "farine",
      "olives",
      "oeufs",
      "jambon",
      "gruyere",
      "vin blanc",
      "levure"
    ]
  },
  {
    "name": "Gaspacho",
    "season": ["summer", "spring"],
    "duration": "2",
    "mood": ["energy", "healthy"],
    "type": ["diner", "brunch", "dejeuner", "apero"],
    "difficulty": "easy",
    "ingredient": [
      "tomate",
      "concombre",
      "poivron vert",
      "mie de pain",
      "ail",
      "poivron rouge",
      "oignon"
    ]
  },

  {
    "name": "Taboule maison",
    "season": ["summer", "spring"],
    "duration": "1",
    "mood": ["healthy"],
    "type": ["diner", "brunch", "dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "coucous",
      "concombre",
      "coriandre",
      "tomate",
      "citron",
      "menthe"
    ]
  },

  {
    "name": "Pancake",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["brunch", "dejeuner", "petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "lait",
      "huile",
      "sucre",
      "farine",
      "oeuf",
      "levure",
      "sucre vanille"
    ]
  },

  {
    "name": "Oeufs au bacon",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort"],
    "type": ["brunch", "dejeuner", "petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": ["bacon", "huile", "oeuf"]
  },

  {
    "name": "Feuilletés saucisses minute",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort"],
    "type": ["brunch", "dejeuner", "apero", "diner"],
    "difficulty": "easy",
    "ingredient": ["saucisse", "pate feuilletee"]
  },

  {
    "name": "Oeufs au bacon",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort"],
    "type": ["brunch", "dejeuner", "petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": ["bacon", "huile", "oeuf"]
  },

  {
    "name": "Tiramisu léger fraises spéculos",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort", "healthy"],
    "type": ["brunch", "dessert"],
    "difficulty": "medium",
    "ingredient": [
      "fraise",
      "framboise",
      "speculoos",
      "sucre",
      "oeuf",
      "fromage-blanc"
    ]
  },

  {
    "name": "Gratin courgettes-pommes de terre",
    "season": ["winter", "autumn", "spring"],
    "duration": "2",
    "mood": ["comfort", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "medium",
    "ingredient": [
      "pommes de terre",
      "ail",
      "noix de muscade",
      "courgettes",
      "beurre",
      "origan"
    ]
  },

  {
    "name": "Sandwich au poulet",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort", "healthy", "energy"],
    "type": ["brunch", "dejeuner", "diner"],
    "difficulty": "easy",
    "ingredient": [
      "baguette",
      "poulet",
      "tomate confites",
      "persil",
      "salade",
      "ail"
    ]
  },

  {
    "name": "Tarte aux pommes traditionnelle",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["dessert"],
    "difficulty": "medium",
    "ingredient": [
      "farine",
      "beurre",
      "pommes",
      "sucre vamille",
      "fleur d'oranger"
    ]
  },

  {
    "name": "Risotto alla parmigiana",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "3",
    "mood": ["comfort"],
    "type": ["dejeuner", "diner"],
    "difficulty": "hard",
    "ingredient": [
      "riz",
      "beurre",
      "oignon",
      "creme liquide",
      "vin blanc",
      "parmesan"
    ]
  },

  {
    "name": "Ratatouille",
    "season": ["summer", "spring"],
    "duration": "3",
    "mood": ["healthy", "energy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "hard",
    "ingredient": [
      "poivrons",
      "courgette",
      "tomates",
      "ketchup",
      "echalote",
      "ail",
      "oignon"
    ]
  },

  {
    "name": "Wok de légumes",
    "season": ["winter", "autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["healthy", "energy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "medium",
    "ingredient": [
      "nouilles",
      "pois gourmands",
      "brocolis",
      "ketchup",
      "crevettes",
      "sauce soja",
      "mais",
      "poivrons"
    ]
  },

  {
    "name": "Bouchées blinis et saumon",
    "season": ["autumn", "summer", "spring"],
    "duration": "1",
    "mood": ["comfort"],
    "type": ["brunch", "apero"],
    "difficulty": "easy",
    "ingredient": [
      "blinis",
      "creme fraiche epaisse",
      "citron",
      "saumon fume",
      "ciboulette",
      "moutarde"
    ]
  },

  {
    "name": "Empanadas au bœuf, olives et tomates séchées",
    "season": ["summer", "spring"],
    "duration": "3",
    "mood": ["healthy", "energy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "medium", 
    "ingredient": [
      "pates brisee",
      "oeuf",
      "boeuf hache",
      "olives",
      "tomate sechees",
      "oignon",
      "ail",
      "concentre de tomates"
    ]
  },

  {
    "name": "Entrecôte grillée et frites maison",
    "season": ["winter", "autumn", "spring"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["dejeuner", "diner"],
    "difficulty": "easy",
    "ingredient": ["pommes de terre", "entrecotes", "huile"]
  },

  {
    "name": "Tarte au thon",
    "season": ["autumn", "summer", "spring"],
    "duration": "2",
    "mood": ["comfort", "energy"],
    "type": ["dejeuner", "diner", "apero"],
    "difficulty": "easy",
    "ingredient": ["pate feuilletee", "tomates", "creme fraiche", "thon"]
  },

  {
    "name": "Salade niçoise",
    "season": ["summer"],
    "duration": "1",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "easy",
    "ingredient": [
      "laitue",
      "tomates",
      "oeuf",
      "thon",
      "oignon",
      "poivron vert",
      "fenouil",
      "filet d'anchois",
      "olives",
      "radis"
    ]
  },

  {
    "name": "Salade chèvre, lardons et champignon",
    "season": ["summer", "spring"],
    "duration": "1",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "easy",
    "ingredient": [
      "laitue",
      "tomates",
      "crouton",
      "lardon",
      "champignon",
      "fromage chevre"
    ]
  },
  {
    "name": "Salade chèvre, lardons et champignon",
    "season": ["summer", "spring"],
    "duration": "1",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "easy",
    "ingredient": [
      "laitue",
      "tomates",
      "crouton",
      "lardon",
      "champignon",
      "fromage chevre"
    ]
  },
  {
    "name": "Salade aux deux pommes et au hareng fumé",
    "season": ["summer", "spring", "winter"],
    "duration": "1",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "medium",
    "ingredient": [
      "pomme de terre",
      "filet de harengs fumes",
      "pomme granny smith",
      "citron",
      "aneth",
      "moutarde",
      "jaune d'oeuf"
    ]
  },
  {
    "name": "Aubergines a la parmigiana",
    "season": ["summer", "spring", "winter"],
    "duration": "1",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner"],
    "difficulty": "medium",
    "ingredient": [
      "aubergines",
      "tomates",
      "parmesan",
      "thym",
      "basilic",
      "romarin",
      "ail"
    ]
  },
  {
    "name": "Gateau au yaourt",
    "season": ["summer", "spring", "winter"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["dessert","petit-dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "farine",
      "yaourt nature",
      "oeufs",
      "sucre",
      "sucre vanille",
      "huile",
      "levure chimique"
    ]
  },
  {
    "name": "Quiche sans pate",
    "season": ["summer", "spring", "winter", "autumn"],
    "duration": "2",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner", "apero", "brunch"],
    "difficulty": "easy",
    "ingredient": [
      "lait",
      "gruyere",
      "oeufs",
      "lardons",
      "farine",
      "poireaux",
      "noix de muscade"
    ]
  },
  {
    "name": "Tartines de tapenade verte au chèvre et basilic",
    "season": ["summer", "spring", "winter", "autumn"],
    "duration": "1",
    "mood": ["comfort"],
    "type": ["dejeuner", "diner", "apero", "brunch"],
    "difficulty": "easy",
    "ingredient": [
      "basilic",
      "sarriette",
      "capres",
      "ail",
      "olives verte denoyautees",
      "chevre frais",
      "huile d'olive"
    ]
  },
  {
    "name": "Frittata aux champignons",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["energy", "healthy"],
    "type": ["dejeuner", "diner", "apero", "brunch"],
    "difficulty": "easy",
    "ingredient": [
      "champignons",
      "ail",
      "oeufs",
      "parmesan",
      "creme liquide entiere",
      "persil",
      "ciboulette"
    ]
  },
  {
    "name": "Terrine de foie gras mi-cuit marbré aux figues",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["comfort"],
    "type": ["diner", "apero"],
    "difficulty": "medium",
    "ingredient": [
      "foie gras cru deveine",
      "figues seche",
      "sucre",
      "cognac",
      "noix de muscade",
      "sel"
    ]
  },
  {
    "name": "Fondue de poireaux",
    "season": ["winter", "autumn"],
    "duration": "1",
    "mood": ["healthy"],
    "type": ["diner", "dejeuner"],
    "difficulty": "easy",
    "ingredient": ["poireaux", "creme fraiche", "beurre"]
  },
  {
    "name": "Noix de Saint-Jacques à l'orange",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["healthy"],
    "type": ["diner", "dejeuner"],
    "difficulty": "medium",
    "ingredient": [
      "noix de saint jaques",
      "orange",
      "miel liquide",
      "pomme de terre",
      "ciboulette",
      "creme d'amande"
    ]
  },
  {
    "name": "Risotto",
    "season": ["winter", "autumn"],
    "duration": "3",
    "mood": ["comfort"],
    "type": ["diner", "dejeuner"],
    "difficulty": "medium",
    "ingredient": [
      "riz a risotto arborio",
      "parmesan",
      "cepes seche",
      "oignon",
      "champignon",
      "creme fraiche liquide",
      "verre de vin blanc",
      "bouillon de legumes",
      "beurre"
    ]
  },
  {
    "name": "Patate douce rôtie au four",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["healthy"],
    "type": ["diner", "dejeuner"],
    "difficulty": "easy",
    "ingredient": [
      "patate douce",
      "fromage chevre",
      "creme de coco",
      "ail en poudre",
      "roquette",
      "ciboulette"
    ]
  },
  {
    "name": "Potimarrons farcis aux champignons, épinards, féta et graines de courge",
    "season": ["winter", "autumn"],
    "duration": "2",
    "mood": ["healthy"],
    "type": ["diner", "dejeuner"],
    "difficulty": "medium",
    "ingredient": [
      "potimarron",
      "feta",
      "pousse d'epinards",
      "champignon de Paris",
      "creme vegetale",
      "graines de courge",
      "oignon"
    ]
  },
  {
    "name": "Boeuf Wellington",
    "season": ["winter", "autumn"],
    "duration": "3",
    'time': '4mins',
    "mood": ["comfort"],
    "type": ["diner", "dejeuner"],
    "difficulty": "medium",
    "ingredient": [
      "filet de boeuf",
      "pate feuilletee",
      "echalotes",
      "champignon de Paris",
      "persil",
      "oeuf",
      "beurre",
      "foie gras cru"
    ]
    // 'description': {
     // '1': 'blablabla'
   // }
  }
]

const Recipe = require('../model/Recipe')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Projet2-recipe')
.then(function (){
    console.log('connected to mongodb');
    Recipe.create(recipes)
    .then(createdRecipes => {
      console.log(`${createdRecipes.length} recettes sont crées`)
    })
    .catch(error => {
      console.log(`ERROR lors de creation des recettes : ${error}`)
    })
})
.catch (error => {
    console.log ('Error! connection to mongodb', error);
})
