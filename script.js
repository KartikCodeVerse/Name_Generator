// Define objects for generating business names
var adjectives = {
  0: "Crazy",
  1: "Amazing",
  2: "Fire",
};
var shopNames = {
  0: "Engine",
  1: "Foods",
  2: "Garments",
};
var extraWords = {
  0: "Bros",
  1: "Limited",
  2: "Hub",
};

// Function to generate a random business name
function generateName() {
  // Generate random indices
  var randomAdjectiveIndex = Math.floor(
    Math.random() * Object.keys(adjectives).length
  );
  var randomShopNameIndex = Math.floor(
    Math.random() * Object.keys(shopNames).length
  );
  var randomExtraWordIndex = Math.floor(
    Math.random() * Object.keys(extraWords).length
  );

  // Get random values from objects
  var adjective = adjectives[randomAdjectiveIndex];
  var shopName = shopNames[randomShopNameIndex];
  var extraWord = extraWords[randomExtraWordIndex];

  // Concatenate parts to form the name
  var name = adjective + " " + shopName + " " + extraWord;

  // Display the generated name
  document.getElementById("businessName").textContent = name;
}
