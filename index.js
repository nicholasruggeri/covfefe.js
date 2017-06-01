function replaceOnDocument(pattern, string){
  Array.from(document.querySelectorAll("body, body *:not(script):not(noscript):not(style)"))
    .forEach(someNode => Array.from(someNode.childNodes)
      .filter(childNode => childNode.nodeType == 3)
      .forEach(textNode => textNode.textContent = textNode.textContent.replace(pattern, string)));
}

replaceOnDocument('conference', "covfefe");
