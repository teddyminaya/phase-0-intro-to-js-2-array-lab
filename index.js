const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(){
    return cats.shift(name);
}
function appendCat (name) {
  const copyofCats=[...cats,name];
    return copyofCats;
}
function prependCat(name){
   const copyofCats=[name,...cats];
   return copyofCats;
}
function removeLastCat(){
   return cats.slice(0, cats.length - 1);
}
function removeFirstCat(){
    return cats.slice(1);
}