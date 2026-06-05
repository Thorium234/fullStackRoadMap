// Source - https://stackoverflow.com/q/34931970
// Posted by Lucky500, modified by community. See post 'Timeline' for change history
// Retrieved 2026-05-31, License - CC BY-SA 3.0

//  function wordsReverser(string){
  //  return string.split('').reverse().join('');
  //}
  //console.log(wordsReverser('New string, same results.'));
// Source - https://stackoverflow.com/a/34932066
// Posted by btav
// Retrieved 2026-05-31, License - CC BY-SA 3.0

function wordsReverser(string){
return string.split("").reverse().join("").split(" ").reverse().join(" ")  
}

console.log(wordsReverser('New string, same results.'));
