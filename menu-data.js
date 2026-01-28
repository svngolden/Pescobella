/*
  Menu data matching Slanic Moldova site structure.
  8 drinks categories + 12+ food categories.
*/

window.MENU_DATA = {
  i18n: {
    ro: {
      "tab.drinks": "Băuturi",
      "tab.food": "Mâncare",
      "title": "Meniu",
      "foot.meta": "* Pozele sunt orientative. Prețurile pot varia.",

      "cat.hot": "Cafea & Băuturi calde",
      "cat.refresh": "Băuturi revigorante",
      "cat.soft": "Băuturi non-alcoolice",
      "cat.energy": "Băuturi energizante",
      "cat.cocktail": "Cocktail-uri",
      "cat.alcohol": "Băuturi alcoolice",
      "cat.wine": "Vinuri",
      "cat.beer": "Bere & Cidru",

      "cat.aperitive": "Aperitive",
      "cat.snacks": "Seafood Snacks",
      "cat.gatite": "Gătite cu Talent",
      "cat.paste": "Paste",
      "cat.pizza": "Pizza",
      "cat.caracatita": "Caracatița lui Pescobar",
      "cat.supe": "Supe",
      "cat.garnituri": "Garnituri",
      "cat.specialitati": "Specialități",
      "cat.peste": "Pește",
      "cat.platouri": "Platouri",
      "cat.sosuri": "Sosuri",
      "cat.desert": "Desert"
    },
    en: {
      "tab.drinks": "Drinks",
      "tab.food": "Food",
      "title": "Menu",
      "foot.meta": "* Photos are illustrative. Prices may vary.",

      "cat.hot": "Coffee & Hot Drinks",
      "cat.refresh": "Refreshing Drinks",
      "cat.soft": "Soft Drinks",
      "cat.energy": "Energy Drinks",
      "cat.cocktail": "Cocktails",
      "cat.alcohol": "Alcoholic Beverages",
      "cat.wine": "Wines",
      "cat.beer": "Beer & Cider",

      "cat.aperitive": "Appetizers",
      "cat.snacks": "Seafood Snacks",
      "cat.gatite": "Chef's Specials",
      "cat.paste": "Pasta",
      "cat.pizza": "Pizza",
      "cat.caracatita": "Pescobar's Octopus",
      "cat.supe": "Soups",
      "cat.garnituri": "Sides",
      "cat.specialitati": "Specialties",
      "cat.peste": "Fish",
      "cat.platouri": "Platters",
      "cat.sosuri": "Sauces",
      "cat.desert": "Dessert"
    }
  },

  pages: {
    drinks: [
      { key: "cat.hot", variant: "coffee", href: "#cafea" },
      { key: "cat.refresh", variant: "fresh", href: "#revigorante" },
      { key: "cat.soft", variant: "soft", href: "#soft" },
      { key: "cat.energy", variant: "energy", href: "#energy" },
      { key: "cat.cocktail", variant: "cocktail", href: "#cocktail" },
      { key: "cat.alcohol", variant: "alcohol", href: "#alcohol" },
      { key: "cat.wine", variant: "wine", href: "#wine" },
      { key: "cat.beer", variant: "beer", href: "#beer" }
    ],
    food: [
      { key: "cat.aperitive", variant: "aperitive", href: "#aperitive" },
      { key: "cat.snacks", variant: "snacks", href: "#snacks" },
      { key: "cat.gatite", variant: "gatite", href: "#gatite" },
      { key: "cat.paste", variant: "paste", href: "#paste" },
      { key: "cat.pizza", variant: "pizza", href: "#pizza" },
      { key: "cat.caracatita", variant: "caracatita", href: "#caracatita" },
      { key: "cat.supe", variant: "supe", href: "#supe" },
      { key: "cat.garnituri", variant: "garnituri", href: "#garnituri" },
      { key: "cat.specialitati", variant: "specialitati", href: "#specialitati" },
      { key: "cat.peste", variant: "peste", href: "#peste" },
      { key: "cat.platouri", variant: "platouri", href: "#platouri" },
      { key: "cat.sosuri", variant: "sosuri", href: "#sosuri" },
      { key: "cat.desert", variant: "desert", href: "#desert" }
    ]
  }
};
