(function(){
  
  var backToTopAnchor = '<a href="#top" title="Return to the top of the page">Back to top</a>';
  
  function w(s){
    try {
      var result = eval('(' + s + ')');
      document.write(
        '<code><strong>' + 
        s + 
        '</strong><br> ' + 
        ((typeof result == "undefined" || result === "undefined") 
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
  w('(function test(a,b){return a+b}).toString()');
  
  document.write('<h2 id="array-prototype-extras"><code>Array.prototype</code> extras ' + backToTopAnchor + '</h2>'); 
  w('([]).indexOf');
  w('([]).forEach');
  w('([]).map');
  w('([]).reduce');
  
  document.write('<h2 id="dom-0">DOM Level 0 ' + backToTopAnchor + '</h2>');
  w('document.forms');
  w('document.images');
  w('window.frames');
  w('window.history');
  w('document.location');
  
  document.write('<h2 id="dom-1">DOM Level 1 ' + backToTopAnchor + '</h2>');
  w('document.documentElement');
  w('document.body');
  document.write('<br>');
  w('document.getElementById');
  w('document.getElementById(\'test\')');
  document.write('<br>');
  w('document.createElement');
  w('document.createElement(\'div\')');
  document.write('<br>');
  w('document.createTextNode');
  w('document.createTextNode(\'test\')');
  document.write('<br>');
  w('document.getElementsByTagName');
  w('document.getElementsByTagName(\'html\')');
  document.write('<br>');
  w('document.getElementsByName');
  w('document.getElementsByName(\'test-form\')');
  document.write('<br>');
  w('document.insertBefore');
  w('document.replaceChild');
  w('document.removeChild');
  w('document.appendChild');
  w('document.cloneNode');
  document.write('<br>');
  w('document.forms.item');
  w('document.forms.item(0)');
  document.write('<br>');
  w('document.forms.length');
  
  document.write('<h2 id="dom-2">DOM Level 2 ' + backToTopAnchor + '</h2>');
  w('document.addEventListener');
  w('document.removeEventListener');
  w('document.createDocumentFragment');
  w('document.defaultView.getComputedStyle');
  w('document.documentElement.style');
  w('document.documentElement.currentStyle');
  w('typeof document.documentElement.style.cssText');
  
  document.write('<h2 id="dom-3">DOM Level 3 ' + backToTopAnchor + '</h2>');
  w('document.evaluate');
  w('typeof document.documentElement.textContent');
  
  document.write('<h2 id="html-5">HTML 5 ' + backToTopAnchor + '</h2>');
  w('document.getElementsByClassName');
  w('document.querySelector');
  w('window.openDatabase');
  
  document.write('<h2 id="non-standard">Non-standard / proprietary ' + backToTopAnchor + '</h2>');
  w('window.XMLHttpRequest');
  w('({}).__proto__');
  w('({}).__defineGetter__');
  w('({}).__defineSetter__');
  w('window.SVGElement');
  w('document.createElement(\'canvas\').getContext');
  
  // moz-specific
  w('({a:1,b:2}).__count__');
  w('({}).watch');
  w('typeof document.documentElement.style.MozBorderRadius');
  w('Array.slice');
  
  w('typeof document.documentElement.style.WebkitBorderRadius');
  
  w('document.forms(0)');
  w('document.forms[0].test');
  w('document.all');
  
  // jscript-specific
  w('document.attachEvent');
  w('window.ActiveXObject');
  
  // is `contentEditable` present in elements
  w('typeof document.documentElement.contentEditable');
  // Do host methods have `call`
  //w('window.alert.call');
  // What kind of constructor does host method have
  w('document.documentElement.constructor');
  // What kind of [[Class]] does instance of Array have
  w('Object.prototype.toString.call([])');
})();