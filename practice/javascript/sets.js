const treeSet = new Set();

// Add items to the treeSet
treeSet.add("Baobab");
treeSet.add("Jackalberry");
treeSet.add("Mopane Tree");
treeSet.add("Breadfruit");

treeSet.delete("Breadfruit");

console.log(treeSet.has("Breadfruit")); // false
console.log(treeSet.entries());

console.log(treeSet);
// Set(4) {"Baobab", "Jackalberry", "Mopane Tree", "Breadfruit"}


treeSet.forEach((tree) => console.log(tree));
/*
Baobab
Jackalberry
Mopane Tree
*/

treeSet.clear();

console.log(treeSet); // Set(0) {size: 0}
console.log(treeSet.size); // 3
