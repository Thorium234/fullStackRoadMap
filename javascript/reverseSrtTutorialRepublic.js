function reverseWords(str) {
   return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords('hello tutorials point'));
console.log(reverseWords('this is a code'));
console.log(reverseWords('JavaScript programming'));
