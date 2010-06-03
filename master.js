(function(){
  
  var backToTopAnchor = '<a href="#top" title="Return to the top of the page">Back to top</a>';
  
  function testDecompilation(){
    var addEvent = (function(){
      var docEl = document.documentElement;
      var fn;
      if (docEl.addEventListener) {
        fn = function addEvent(element, eventName, callback) {
          element.addEventListener(eventName, callback, false);
        };
      }
      else if (docEl.attachEvent) {
        fn = function addEvent(element, eventName, callback) {
          element.attachEvent('on' + eventName, callback);
        };
      }
      else {
        fn = function addEvent(element, eventName, callback) {
          element['on' + eventName] = callback;
        };
      }
      var addEvent = null;
      return fn;
    })();
    var addEvent = (function(){
      var docEl = document.documentElement;
      var fn;
      if (docEl.addEventListener) {
        fn = function addEvent(element, eventName, callback) {
          element.addEventListener(eventName, callback, false);
        };
      }
      else if (docEl.attachEvent) {
        fn = function addEvent(element, eventName, callback) {
          element.attachEvent('on' + eventName, callback);
        };
      }
      else {
        fn = function addEvent(element, eventName, callback) {
          element['on' + eventName] = callback;
        };
      }
      var addEvent = null;
      return fn;
    })();
  }
  
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
        '</strong><br><span class="error">error</span></code><br>');
    }
  }
  
  document.write('<h2 id="user-agent">navigator.userAgent ' + backToTopAnchor + '</h2>');
  w('navigator.userAgent');
  w('navigator.platform');
  /*@cc_on
    w('@_jscript_version');
    w('@_jscript_build');
  @*/
  
  document.write('<h2 id="fun-decomp">Function decompilation / function statements' + backToTopAnchor + '</h2>');
  w('(function(a,b){return a+b}).toString()');
  w('(function test(a,b){return a+b}).toString()');
  w('(function(){ if (true) { function f(){ return 1; }} else { function f(){ return 2; }}; return f(); })()');
  document.write('<code><strong>String(testDecompilation)</strong></code><br><code>' + String(testDecompilation) + '</code><br>');
  
  document.write('<h2 id="array-prototype-extras"><code>Array.prototype</code> extras ' + backToTopAnchor + '</h2>'); 
  w('([]).indexOf');
  w('([]).lastIndexOf');
  w('([]).every');
  w('([]).some');
  w('([]).forEach');
  w('([]).map');
  w('([]).filter');
  w('([]).reduce');
  w('([]).reduceRight');
  
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
  w('document.documentElement.ownerDocument');
  w('typeof document.documentElement.style.cssText');
  
  document.write('<h2 id="dom-3">DOM Level 3 ' + backToTopAnchor + '</h2>');
  w('document.evaluate');
  w('typeof document.documentElement.textContent');
  
  document.write('<h2 id="html-5">HTML 5 ' + backToTopAnchor + '</h2>');
  w('typeof document.documentElement.contentEditable');
  w('document.getElementsByClassName');
  w('document.querySelector');
  w('window.openDatabase');
  w('window.localStorage');
  w('document.createElement(\'canvas\').getContext');
  w('document.createElement(\'video\').autoplay');
  w('window.Worker');
  
  // Do input[type=file] elements have "files" property?
  w('(function(){ var el = document.createElement("input"); el.type = "file"; return el.files; })()');
  
  w('document.documentElement.classList && document.documentElement.classList.contains');
  
  document.write('<h2 id="es5">ECMAScript 5 ' + backToTopAnchor + '</h2>');
  w('String.prototype.trim');
  
  w('Object.getPrototypeOf');
  w('Object.getOwnPropertyDescriptor');
  w('Object.getOwnPropertyNames');
  w('Object.create');
  w('Object.defineProperty');
  w('Object.defineProperties');
  w('Object.seal');
  w('Object.freeze');
  w('Object.preventExtensions');
  w('Object.isSealed');
  w('Object.isFrozen');
  w('Object.isExtensible');
  w('Object.keys');
  
  w('Function.prototype.bind');
  w('Array.isArray');
  w('this.JSON');
  w('Date.now');
  w('Date.prototype.toISOString');
  w('eval(\'({ get foo(){ return 1; } }).foo === 1\')');
  w('("foobar"[3] === "b")');
  
  document.write('<h2 id="rendering-engine">Rendering engine ' + backToTopAnchor + '</h2>');
  w('typeof document.documentElement.style.borderRadius');
  w('typeof document.documentElement.style.MozBorderRadius');
  w('typeof document.documentElement.style.WebkitBorderRadius');
  w('typeof document.documentElement.style.KhtmlBorderRadius');
  w('typeof document.documentElement.style.MsBorderRadius');
  w('typeof document.documentElement.style.OBorderRadius');
  
  document.write('<h2 id="non-standard">Non-standard / proprietary / misc. ' + backToTopAnchor + '</h2>');
  
  // "magic" properties
  w('({}).__proto__');
  w('({}).__defineGetter__');
  w('({}).__defineSetter__');
  
  // harmony proxies
  w('typeof Proxy');
  
  w('window.XMLHttpRequest');
  w('window.SVGElement');
  
  // Function#name
  w('(function(){ function foo(){} return foo.name; })()');
  
  // moz-specific
  w('({a:1,b:2}).__count__');
  w('({}).watch');
  w('Array.slice');
  
  // non-standard form controls/document access
  w('document.forms(0)');
  w('document.forms[0].test');
  w('document.all');
  
  // jscript-specific
  w('window.attachEvent');
  w('window.ActiveXObject');
  
  // IE specific
  w('document.documentElement.currentStyle');
  
  // What kind of constructor does host method have
  w('document.documentElement.constructor');
  
  // What kind of [[Class]] does instance of Array have
  w('Object.prototype.toString.call([])');
  
  // Are "prototype objects" exposed and support inheritance?
  w('(function(){ if (window.HTMLDivElement && window.HTMLDivElement.prototype) { HTMLDivElement.prototype.x = 1; return (document.createElement(\'div\').x === 1); } })()');
  
})();