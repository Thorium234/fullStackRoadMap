const fruitTracker = {
  favorites: ["Mango", "Banana", "Grapes"],
  
  addFruit(fruit) {
    this.favorites.push(fruit);
  },
showFruits() {
    console.log("Favorite Fruits:");
    this.favorites.forEach((fruit, index) => {
      console.log(`${index + 1}: ${fruit}`);
    });
  }
};
fruitTracker.addFruit("Strawberry");
fruitTracker.showFruits();
