const cart = [
  { item: "Shirt", price: 800 },
  { item: "Pants", price: 1200 },
  { item: "Shoes", price: 1500 }
];
function calculateTotal(cartItems) {
  const taxed = cartItems.map(p => p.price * 1.18);
  const total = taxed.reduce((sum, price) => sum + price, 0);
  return `Total after 18% tax: ksh${total.toFixed(2)}`;
}
console.log(calculateTotal(cart));
