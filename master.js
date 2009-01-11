(function(){
  
  var backToTopAnchor = '<a href="#top" title="Return to the top of the page">Back to top</a>';
  
  function w(s){
    try {
      var result = eval('(' + s + ')');
      document.write(
        '<code><strong>' + 
        s + 
        '</strong><br> ' + 
        ((result == undefined) 
          ? ('<span class="undef">' + result + '</span>') 
          : result) + 
        '</code><br>');
    }
    catch(e) {
      document.write(
        '<code><strong>' + 
        s + 
        '</strong><br><span class="error"> ' +
        (e.message || e) +
        '</span></code><br>');
    }
  }
  
  document.write('<h2 id="user-agent">navigator.userAgent ' + backToTopAnchor + '</h2>');
  w('navigator.userAgent');
  w('navigator.platform');
  
  document.write('<h2 id="fun-decomp">Function decompilation ' + backToTopAnchor + '</h2>');
  w('(function(a,b){return a+b}).toString()');
  
  document.write('<h2 id="array-prototype-extras">`Array.prototype` extras ' + backToTopAnchor + '</h2>'); 
  w('([]).indexOf');
  w('([]).forEach');
  w('([]).reduce');
  
  document.write('<h2 id="dom-0">DOM Level 0 ' + backToTopAnchor + '</h2>');
  w('document.forms');
  w('document.images');
  w('window.frames');
  w('document.location');
  
  document.write('<h2 id="dom-1">DOM Level 1 ' + backToTopAnchor + '</h2>');
  w('document.createElement');
  w('document.createTextNode');
  w('document.getElementsByTagName');
  w('document.insertBefore');
  w('document.replaceChild');
  w('document.removeChild');
  w('document.appendChild');
  w('document.cloneNode');
  w('document.documentElement');
  w('document.getElementsByTagName(\'html\')');
  w('document.createElement(\'div\')');
  w('document.body');
  w('document.forms.item');
  w('document.forms.length');
  
  document.write('<h2 id="dom-2">DOM Level 2 ' + backToTopAnchor + '</h2>');
  w('document.getElementById');
  w('document.addEventListener');
  w('document.removeEventListener');
  w('document.createDocumentFragment');
  w('window.getComputedStyle');
  w('document.documentElement.style');
  
  document.write('<h2 id="dom-3">DOM Level 3 ' + backToTopAnchor + '</h2>');
  w('document.evaluate');
  w('\'textContent\' in document');
  
  document.write('<h2 id="html-5">HTML 5 ' + backToTopAnchor + '</h2>');
  w('document.getElementsByClassName');
  w('document.querySelector');
  w('window.openDatabase');
  
  document.write('<h2 id="non-standard">Non-standard / proprietary ' + backToTopAnchor + '</h2>');
  w('window.XMLHttpRequest');
  w('({}).__proto__');
  w('({}).__defineGetter__');
  w('window.SVGElement');
  w('document.createElement(\'canvas\').getContext');
  
  // moz-specific
  w('({a:1,b:2}).__count__');
  w('({}).watch');
  w('\'MozBorderRadius\' in document.documentElement.style');
  w('Array.slice');
  
  w('\'WebkitBorderRadius\' in document.documentElement.style');
  
  w('document.forms(0)');
  w('document.forms[0].test');
  w('document.all');
  
  // jscript-specific
  w('document.attachEvent');
  w('window.ActiveXObject');
  
  // is `contentEditable` present in elements
  w('\'contentEditable\' in document.documentElement');
  // Do host methods have `call`
  //w('window.alert.call');
  // What kind of constructor does host method have
  w('document.documentElement.constructor');
  // What kind of [[Class]] does instance of Array have
  w('Object.prototype.toString.call([])');
})();