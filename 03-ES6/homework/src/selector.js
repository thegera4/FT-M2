var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for(let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i];
    let foundElements = traverseDomAndCollectElements(matchFunc, child);
    resultSet = [...resultSet, ...foundElements];

  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === "#") return "id";
  if(selector[0] === ".") return "class";
  if(selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(element){
    return element.id === selector.slice(1);
   }
  } else if (selectorType === "class") {
    matchFunction = function(element){
      let classes = element.classList;
      for (let i of classes){
        if(i === selector.slice(1)) return true;
      }
      return false;
     }
  } else if (selectorType === "tag.class") {
    matchFunction = function(element){
      let [tag,classs] = selector.split(".");
      return matchFunctionMaker(tag)(element) && matchFunctionMaker("." + classs)(element);
     }
  } else if (selectorType === "tag") {
    matchFunction = function(element){
      return element.tagName.toLowerCase() === selector.toLowerCase();
     }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
