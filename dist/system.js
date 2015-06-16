/*
 * SystemJS v0.18.0
 */
!function(){function e(){!function(e){function t(e,t){var n;if(e instanceof Error){var n=new Error(e.message,e.fileName,e.lineNumber);n.message=e.message+"\n	"+t,n.stack=e.stack}else n=e+"\n	"+t;return n}function n(e,n,a){try{new Function(e).call(a)}catch(r){throw t(r,"Evaluating "+n)}}function a(){}function r(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},b(this,"global",{get:function(){return e}})}function o(){r.call(this),this.paths={}}function s(e,t){var n,a="",r=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o){a=o;break}}else{var i=o.split("/").length;i>=r&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(r=i,a=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[a]||t;return n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),M.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e])}function c(e){M=e(M||function(){})}function f(e){for(var t=[],n=0,a=e.length;a>n;n++)-1==x.call(t,e[n])&&t.push(e[n]);return t}function m(e,t,n){for(var a in t)n&&a in e||(e[a]=t[a])}function p(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function h(){if(O[this.baseURL])return O[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new _(this.baseURL,w);return this.baseURL=e.href,O[this.baseURL]=e}var v="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,g="undefined"!=typeof window&&"undefined"!=typeof document,y="undefined"!=typeof process&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var b,x=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(b=Object.defineProperty)}catch(e){b=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(a){}}}}();var w;if("undefined"!=typeof document&&document.getElementsByTagName){if(w=document.baseURI,!w){var S=document.getElementsByTagName("base");w=S[0]&&S[0].href||window.location.href}w=w.split("#")[0].split("?")[0],w=w.substr(0,w.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)w="file://"+(y?"/":"")+process.cwd()+"/",y&&(w=w.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");w=e.location.href}var _="function"==typeof e.URL&&e.URL||URLPolyfill;!function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,a){return new Promise(function(r,o){r(e.loaderObj.normalize(t,n,a))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var a=0,r=e.loads.length;r>a;a++)if(n=e.loads[a],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,a,r){r.then(function(r){return"loading"==a.status?Promise.resolve(t.loaderObj.translate({name:a.name,metadata:a.metadata,address:a.address,source:r})).then(function(e){return a.source=e,t.loaderObj.instantiate({name:a.name,metadata:a.metadata,address:a.address,source:e})}).then(function(r){if(void 0===r)return a.address=a.address||"<Anonymous Module "+ ++R+">",a.isDeclarative=!0,L.call(t.loaderObj,a).then(function(t){var r=e.System,o=r.register;r.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),a.declare=n,a.depsList=t},n(t,a.address,{}),r.register=o});if("object"!=typeof r)throw TypeError("Invalid instantiate return value");a.depsList=r.deps||[],a.execute=r.execute,a.isDeclarative=!1}).then(function(){a.dependencies=[];for(var e=a.depsList,n=[],r=0,o=e.length;o>r;r++)(function(e,r){n.push(i(t,e,a.name,a.address).then(function(t){if(a.dependencies[r]={key:e,value:t.name},"linked"!=t.status)for(var n=a.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[r],r);return Promise.all(n)}).then(function(){a.status="loaded";for(var e=a.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],a)}):void 0})["catch"](function(e){a.status="failed",a.exception=e;for(var t=a.linkSets.concat([]),n=0,r=t.length;r>n;n++)v(t[n],a,e)})}function c(e){return function(t,n){var a=e.loader,r=e.moduleName,s=e.step;if(a.modules[r])throw new TypeError('"'+r+'" already exists in the module table');for(var i,c=0,m=a.loads.length;m>c;c++)if(a.loads[c].name==r)return i=a.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(a,i,Promise.resolve(e.moduleSource))),i.linkSets[0].done.then(function(){t(i)});var p=o(r);p.metadata=e.moduleMetadata;var h=f(a,p);a.loads.push(p),t(h.done),"locate"==s?l(a,p):"fetch"==s?u(a,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(a,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){for(var n=0,a=e.loads.length;a>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var r=e.loader,n=0,a=t.dependencies.length;a>n;n++){var o=t.dependencies[n].value;if(!r.modules[o])for(var s=0,i=r.loads.length;i>s;s++)if(r.loads[s].name==o){m(e,r.loads[s]);break}}}function p(e){var t=!1;try{S(e,function(n,a){v(e,n,a),t=!0})}catch(n){v(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var a=[].concat(e.loads),r=0,o=a.length;o>r;r++){var t=a[r];t.module=t.isDeclarative?{name:t.name,module:D({}),evaluated:!0}:{module:D({})},t.status="linked",g(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function v(e,n,a){var r=e.loader;n?(n&&e.loads[0].name!=n.name&&(a=t(a,"Error loading "+n.name+" from "+e.loads[0].name)),n&&(a=t(a,"Error loading "+n.name))):a=t(a,"Error linking "+e.loads[0].name);for(var o=e.loads.concat([]),s=0,i=o.length;i>s;s++){var n=o[s];r.loaderObj.failed=r.loaderObj.failed||[],-1==x.call(r.loaderObj.failed,n)&&r.loaderObj.failed.push(n);var l=x.call(n.linkSets,e);if(n.linkSets.splice(l,1),0==n.linkSets.length){var u=x.call(e.loader.loads,n);-1!=u&&e.loader.loads.splice(u,1)}}e.reject(a)}function g(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var a=x.call(e.loads,t);-1!=a&&e.loads.splice(a,1);for(var r=0,o=t.linkSets.length;o>r;r++)a=x.call(t.linkSets[r].loads,t),-1!=a&&t.linkSets[r].loads.splice(a,1);t.linkSets.splice(0,t.linkSets.length)}function y(e,t,n){try{var r=t.execute()}catch(o){return void n(t,o)}return r&&r instanceof a?r:void n(t,new TypeError("Execution must define a Module instance"))}function w(e,t,n){var a=e._loader.importPromises;return a[t]=n.then(function(e){return a[t]=void 0,e},function(e){throw a[t]=void 0,e})}function S(e,t){var n=e.loader;if(e.loads.length)for(var a=e.loads.concat([]),r=0;r<a.length;r++){var o=a[r],s=y(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",g(n,o)}}function _(e,t){return t.module.module}function E(){}var R=0;r.prototype={constructor:r,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return w(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(E(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var a=this;return Promise.resolve(a.normalize(e,t)).then(function(e){var t=a._loader;return t.modules[e]?(E(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||w(a,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],_(t,n)}))})},load:function(e,t){return this._loader.modules[e]?(E(this._loader.modules[e],[],this._loader),Promise.resolve(this._loader.modules[e].module)):this._loader.importPromises[e]||w(this,e,s(this._loader,e,{}))},module:function(e,t){var n=o();n.address=t&&t.address;var a=f(this._loader,n),r=Promise.resolve(e),s=this._loader,i=a.done.then(function(){return _(s,n)});return d(s,n,r),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t,n=new a;if(Object.getOwnPropertyNames&&null!=e)t=Object.getOwnPropertyNames(e);else{t=[];for(var r in e)t.push(r)}for(var o=0;o<t.length;o++)(function(t){b(n,t,{configurable:!1,enumerable:!0,get:function(){return e[t]}})})(t[o]);return Object.preventExtensions&&Object.preventExtensions(n),n},set:function(e,t){if(!(t instanceof a))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var D=r.prototype.newModule}();var E;i.prototype=r.prototype,o.prototype=new i;var R;if("undefined"!=typeof XMLHttpRequest)R=function(e,t,n){function a(){t(o.responseText)}function r(){n(o.statusText+": "+e||"XHR error")}g&&(e=e.replace(/#/g,"%23"));var o=new XMLHttpRequest,s=!0,i=!1;if(!("withCredentials"in o)){var l=/^(\w+:)?\/\/([^\/]+)/.exec(e);l&&(s=l[2]===window.location.host,l[1]&&(s&=l[1]===window.location.protocol))}s||"undefined"==typeof XDomainRequest||(o=new XDomainRequest,o.onload=a,o.onerror=r,o.ontimeout=r,o.onprogress=function(){},o.timeout=0,i=!0),o.onreadystatechange=function(){4===o.readyState&&(200===o.status||0==o.status&&o.responseText?a():r())},o.open("GET",e,!0),i&&setTimeout(function(){o.send()},0),o.send(null)};else{if("undefined"==typeof require)throw new TypeError("No environment fetch API available.");var D;R=function(e,t,n){if("file:///"!=e.substr(0,8))throw"Only file URLs of the form file:/// allowed running in Node.";return D=D||require("fs"),e=y?e.replace(/\//g,"\\").substr(8):e.substr(7),D.readFile(e,function(e,a){if(e)return n(e);var r=a+"";"\ufeff"===r[0]&&(r=r.substr(1)),t(r)})}}o.prototype.fetch=function(e){return new Promise(function(t,n){R(e.address,t,n)})};var j,L=function(){function t(t){var a=this;return Promise.resolve(e["typescript"==a.transpiler?"ts":a.transpiler]||(a.pluginLoader||a)["import"](a.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var r;return r=e.Compiler?n:e.createLanguageService?s:o,'var __moduleName = "'+t.name+'";'+r.call(a,t,e)+"\n//# sourceURL="+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,n.sourceMaps="inline",n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var r=new t.Compiler(n);return a(e.source,r,n.filename)}function a(e,t,n){try{return t.compile(e,n)}catch(a){throw a[0]}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",n.sourceMap="inline",n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return void 0===n.target&&(n.target=t.ScriptTarget.ES5),n.module=t.ModuleKind.System,n.inlineSourceMap=!0,t.transpile(e.source,n,e.address)}return r.prototype.transpiler="traceur",t}();!function(){function n(t){o=e.System,e.System=t}function a(){e.System=o}function r(e){var t=e.source.lastIndexOf("\n");return e.source+("\n//# sourceURL="!=e.source.substr(t,15)?"\n//# sourceURL="+e.address+(e.metadata.sourceMap?"!transpiled":""):"")+(e.metadata.sourceMap&&s&&"\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(e.metadata.sourceMap)))||"")}var o,s="undefined"!=typeof btoa;if("undefined"!=typeof document){var i,l=document.getElementsByTagName("script");$__curScript=l[l.length-1],j=function(e){i||(i=document.head||document.body||document.documentElement);var o=document.createElement("script");o.text=r(e);var s,l=window.onerror;if(window.onerror=function(n){s=t(n,"Evaluating "+e.address)},n(this),i.appendChild(o),i.removeChild(o),a(),window.onerror=l,s)throw s}}else if(v)j=function(o){try{n(this),new Function(r(o)).call(e),a()}catch(s){throw t(s,"Evaluating "+o.address)}};else{var u="vm",d=require(u);j=function(e){try{n(this),d.runInThisContext(r(e)),a()}catch(o){throw t(o.toString(),"Evaluating "+e.address)}}}}(),u.prototype=o.prototype,l.prototype=new u;var M,k=/^[^\/]+:\/\//,O={},T=new _(w);!function(){c(function(e){return function(){e.call(this),this.baseURL=w.substr(0,w.lastIndexOf("/")+1),this.set("@empty",this.newModule({}))}}),d("normalize",function(){return function(e,t){return"."==e[0]||"/"==e[0]?new _(e,t||T).href:e}}),d("import",function(e){return function(t,n,a){return e.call(this,t,n,a).then(function(e){return e.__useDefault?e["default"]:e})}}),l.prototype.config=function(e){function t(e){for(var t in e)return!0}if(e.baseURL){if(t(this.packages)||t(this.meta)||t(this.depCache)||t(this.bundles))throw new TypeError("baseURL should only be configured once and must be configured first.");this.baseURL=e.baseURL,h.call(this)}if(e.map)for(var n in e.map){var a=e.map[n];if("string"!=typeof a){var r=this.normalizeSync(n);this.defaultJSExtensions&&".js"!=n.substr(n.length-3,3)&&(r=r.substr(0,r.length-3));var o="";for(var s in this.packages)r.substr(0,s.length)==s&&(!r[s.length]||"/"==r[s.length])&&o.split("/").length<s.split("/").length&&(o=s);o&&this.packages[o].main&&(r=r.substr(0,r.length-this.packages[o].main.length-1));var s=this.packages[r]=this.packages[r]||{};s.map=a}else this.map[n]=a}if(e.packages)for(var n in e.packages){var i=this.normalizeSync(n);this.defaultJSExtensions&&".js"!=n.substr(n.length-3,3)&&(i=i.substr(0,i.length-3)),this.packages[i]=this.packages[i]||{};for(var l in e.packages[n])this.packages[i][l]=e.packages[n][l]}if(e.bundles)for(var n in e.bundles){for(var u=[],d=0;d<e.bundles[n].length;d++)u.push(this.normalizeSync(e.bundles[n][d]));this.bundles[n]=u}for(var c in e){var a=e[c],f=!1;if("baseURL"!=c&&"map"!=c&&"packages"!=c&&"bundles"!=c)if("object"!=typeof a||a instanceof Array)this[c]=a;else{this[c]=this[c]||{},("meta"==c||"depCache"==c)&&(f=!0);for(var n in a)f?this[c][this.normalizeSync(n)]=a[n]:this[c][n]=a[n]}}}}(),function(){function t(e,t){return new Promise(function(n,a){try{importScripts(t.address)}catch(r){a(r)}e.onScriptLoad(t),t.metadata.registered||a(t.address+" did not call System.register or AMD define"),n("")})}if("undefined"!=typeof document)var n=document.getElementsByTagName("head")[0];var a;l.prototype.onScriptLoad=function(){e.System=a},d("fetch",function(r){return function(o){var s=this;return o.metadata.scriptLoad&&(g||v)?v?t(s,o):new Promise(function(t,r){function i(e){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(u(),s.onScriptLoad(o),o.metadata.registered||r(o.address+" did not call System.register or AMD define"),t(""))}function l(e){u(),r(new Error("Unable to load script "+o.address))}function u(){d.detachEvent?d.detachEvent("onreadystatechange",i):(d.removeEventListener("load",i,!1),d.removeEventListener("error",l,!1)),n.removeChild(d)}var d=document.createElement("script");d.async=!0,d.attachEvent?d.attachEvent("onreadystatechange",i):(d.addEventListener("load",i,!1),d.addEventListener("error",l,!1)),a=e.System,e.System=s,d.src=o.address,n.appendChild(d)}):r.call(this,o)}})}(),function(){function t(e,t,n){if(p=!0,t)t=e.normalizeSync(t),n.name=t,t in e.defined||(e.defined[t]=n);else if(n.declarative){if(m)throw new TypeError("Multiple anonymous System.register calls in the same module file.");m=n}}function n(e,t,a){if(a[e.groupIndex]=a[e.groupIndex]||[],-1==x.call(a[e.groupIndex],e)){a[e.groupIndex].push(e);for(var r=0,o=e.normalizedDeps.length;o>r;r++){var s=e.normalizedDeps[r],i=t.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(void 0===i.groupIndex||i.groupIndex<l){if(void 0!==i.groupIndex&&(a[i.groupIndex].splice(x.call(a[i.groupIndex],i),1),0==a[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");i.groupIndex=l}n(i,t,a)}}}}function a(e,t){var a=t.defined[e];if(!a.module){a.groupIndex=0;var r=[];n(a,t,r);for(var s=!!a.declarative==r.length%2,l=r.length-1;l>=0;l--){for(var u=r[l],d=0;d<u.length;d++){var c=u[d];s?o(c,t):i(c,t)}s=!s}}}function r(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:{},importers:[]})}function o(t,n){if(!t.module){var a=n._loader.moduleRecords,s=t.module=r(t.name,a),i=t.module.exports,l=t.declare.call(e,function(e,t){if(s.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var a=0,r=s.importers.length;r>a;a++){var o=s.importers[a];if(!o.locked){var l=x.call(o.dependencies,s);o.setters[l](i)}}return s.locked=!1,t});if(s.setters=l.setters,s.execute=l.execute,!s.setters||!s.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=a[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(s),s.dependencies.push(p)):s.dependencies.push(null),s.setters[u]&&s.setters[u](c)}}}function s(e,t){var n,a=t.defined[e];if(a)a.declarative?u(e,[],t):a.evaluated||i(a,t),n=a.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!a||a.declarative)&&n&&n.__useDefault?n["default"]:n}function i(t,n){if(!t.module){var a={},r=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var o=0,l=t.normalizedDeps.length;l>o;o++){var u=t.normalizedDeps[o],d=n.defined[u];d&&i(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var a=0,r=t.deps.length;r>a;a++)if(t.deps[a]==e)return s(t.normalizedDeps[a],n);throw new TypeError("Module "+e+" not declared as a dependency.")},a,r);if(c&&(r.exports=c),a=r.exports,a&&a.__esModule)t.esModule=a;else{var f=a&&a.hasOwnProperty;t.esModule={};for(var m in a)(!f||a.hasOwnProperty(m))&&(t.esModule[m]=a[m]);t.esModule["default"]=a,b(t.esModule,"__useDefault",{value:!0})}}}function u(t,n,a){var r=a.defined[t];if(r&&!r.evaluated&&r.declarative){n.push(t);for(var o=0,s=r.normalizedDeps.length;s>o;o++){var i=r.normalizedDeps[o];-1==x.call(n,i)&&(a.defined[i]?u(i,n,a):a.get(i))}r.evaluated||(r.evaluated=!0,r.module.execute.call(e))}}var m,p;l.prototype.register=function(e,n,a){return"string"!=typeof e&&(a=n,n=e,e=null),"boolean"==typeof a?this.registerDynamic.apply(this,arguments):void t(this,e,{declarative:!0,deps:n,declare:a})},l.prototype.registerDynamic=function(e,n,a,r){"string"!=typeof e&&(r=a,a=n,n=e,e=null),t(this,e,{declarative:!1,deps:n,execute:r,executingRequire:a})},c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),d("onScriptLoad",function(e){return function(t){e.call(this,t),m&&(t.metadata.entry=m),p&&(t.metadata.format=t.metadata.format||"defined",t.metadata.registered=!0,p=!1,m=null)}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}});var h=/^\s*(\/\*.*\*\/\s*|\/\/[^\n]*\s*)*System\.register(Dyanmic)?\s*\(/;d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(m=null,p=!1,"register"==t.metadata.format&&(t.metadata.scriptLoad=!0),t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return"string"==typeof t.metadata.deps&&(t.metadata.deps=t.metadata.deps.split(",")),t.metadata.deps=t.metadata.deps||[],("register"==t.metadata.format||!t.metadata.format&&t.source.match(h))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(e){var t,n=this;if(n.defined[e.name])t=n.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if(!("register"!=e.metadata.format&&"esm"!=e.metadata.format&&"es6"!=e.metadata.format||(m=null,p=!1,j.call(n,e),m?t=m:e.metadata.bundle=!0,!t&&n.defined[e.name]&&(t=n.defined[e.name]),p||e.metadata.registered)))throw new TypeError(e.name+" detected as System.register but didn't execute.");t||(t={declarative:!1,deps:e.metadata.deps,execute:function(){return n.newModule({})}}),n.defined[e.name]=t,t.deps=f(t.deps),t.name=e.name;for(var r=[],o=0,s=t.deps.length;s>o;o++)r.push(Promise.resolve(n.normalize(t.deps[o],e.name)));return Promise.all(r).then(function(r){return t.normalizedDeps=r,{deps:t.deps,execute:function(){return a(e.name,n),u(e.name,[],n),n.defined[e.name]=void 0,n.newModule(t.declarative?t.module.exports:t.esModule)}}})}})}(),function(){var t=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,n=/\$traceurRuntime\s*\./,a=/babelHelpers\s*\./;d("translate",function(r){return function(o){var s=this;return r.call(s,o).then(function(r){if("esm"==o.metadata.format||"es6"==o.metadata.format||!o.metadata.format&&r.match(t))return o.metadata.format="esm",s._loadedTranspiler=s._loadedTranspiler||!1,s.pluginLoader&&(s.pluginLoader._loadedTranspiler=s._loadedTranspiler||!1),L.call(s,o).then(function(e){return o.metadata.sourceMap=void 0,e});if(s._loadedTranspiler===!1&&o.name==s.normalizeSync(s.transpiler)&&(r.length>100&&(o.metadata.format=o.metadata.format||"global","traceur"===s.transpiler&&(o.metadata.exports="traceur"),"typescript"===s.transpiler&&(o.metadata.exports="ts")),s._loadedTranspiler=!0),s._loadedTranspilerRuntime===!1&&(o.name==s.normalizeSync("traceur-runtime")||o.name==s.normalizeSync("babel/external-helpers*"))&&(r.length>100&&(o.metadata.format=o.metadata.format||"global"),s._loadedTranspilerRuntime=!0),"register"==o.metadata.format&&s._loadedTranspilerRuntime!==!0){if(!e.$traceurRuntime&&o.source.match(n))return s._loadedTranspilerRuntime=s._loadedTranspilerRuntime||!1,s["import"]("traceur-runtime").then(function(){return r});if(!e.babelHelpers&&o.source.match(a))return s._loadedTranspilerRuntime=s._loadedTranspilerRuntime||!1,s["import"]("babel/external-helpers").then(function(){return r})}return r})}})}();var P="undefined"!=typeof self?"self":"global";d("onScriptLoad",function(t){return function(n){if("global"==n.metadata.format){n.metadata.registered=!0;var a=p(n.metadata.exports,e);n.metadata.execute=function(){return a}}return t.call(this,n)}}),d("fetch",function(e){return function(t){return t.metadata.exports&&(t.metadata.format="global"),"global"!=t.metadata.format||!t.metadata.exports||t.metadata.globals||t.metadata.deps&&0!=t.metadata.deps.length||(t.metadata.scriptLoad=!0),e.call(this,t)}}),d("instantiate",function(t){return function(n){var a=this;if(n.metadata.format||(n.metadata.format="global"),n.metadata.globals)for(var r in n.metadata.globals)n.metadata.deps.push(n.metadata.globals[r]);return"global"!=n.metadata.format||n.metadata.registered||(n.metadata.execute=function(t,r,o){var s;if(n.metadata.globals){s={};for(var i in n.metadata.globals)s[i]=t(n.metadata.globals[i])}var l=n.metadata.exports,u=a.get("@@global-helpers").prepareGlobal(o.id,l,s);l&&(n.source+="\n"+P+'["'+l+'"] = '+l+";");var d=e.define,c=e.require;return e.define=void 0,e.module=void 0,e.exports=void 0,j.call(a,n),e.require=c,e.define=d,u()}),t.call(this,n)}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function a(t){n(function(n){if(-1==x.call(i,n)){try{var a=e[n]}catch(r){i.push(n)}t(n,a)}})}var r=this;t.call(r);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","external"];r.set("@@global-helpers",r.newModule({prepareGlobal:function(t,n,r){var s;if(r){s={};for(var i in r)s[i]=r[i],e[i]=r[i]}return n||(o={},a(function(e,t){o[e]=t})),function(){var t;if(n)t=p(n,e);else{var r,i,l={};a(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(l[e]=t,"undefined"!=typeof r?i||r===t||(i=!0):r=t)}),t=i?l:r}if(s)for(var u in s)e[u]=s[u];return t}}}))}}),function(){function t(e){a.lastIndex=0;var t=[];e.length/e.split("\n").length<200&&(e=e.replace(r,""));for(var n;n=a.exec(e);)t.push(n[1].substr(1,n[1].length-2));return t}var n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.]|module\.)exports\s*(\[['"]|\.)|(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])module\.exports\s*[=,]/,a=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,r=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm;if("undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var o=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");c(function(e){return function(){e.call(this),"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&(this._nodeRequire=require)}}),d("instantiate",function(r){return function(s){var i=this;if(s.metadata.format||(n.lastIndex=0,a.lastIndex=0,(a.exec(s.source)||n.exec(s.source))&&(s.metadata.format="cjs")),"cjs"==s.metadata.format){var l=s.metadata.deps||[];s.metadata.deps=l.concat(t(s.source)),s.metadata.executingRequire=!0,s.metadata.execute=function(t,n,a){for(var r=0;r<l.length;r++)t(l[r]);var u=s.address||"",d=u.split("/");d.pop(),d=d.join("/"),o&&u.substr(0,o.length)===o?(u=u.substr(o.length),d=d.substr(o.length)):"file:///"==u.substr(0,8)&&(u=u.substr(7),d=d.substr(7),y&&(u=u.substr(1),d=d.substr(1)));var c=e.define;e.define=void 0,e.__cjsWrapper={exports:n,args:[t,n,a,u,d,e]},s.source="(function(require, exports, module, __filename, __dirname, global) {"+s.source+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",j.call(i,s),e.__cjsWrapper=void 0,e.define=c}}return r.call(i,s)}})}(),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(d),a=(n[1].split(",")[t]||"require").replace(c,""),r=f[a]||(f[a]=new RegExp(l+a+u,"g"));r.lastIndex=0;for(var o,s=[];o=r.exec(e);)s.push(o[2]||o[3]);return s}function a(e,t,n,r){if("object"==typeof e&&!(e instanceof Array))return a.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.get(e);return o.__useDefault?o["default"]:o}throw new TypeError("Invalid require")}for(var i=[],l=0;l<e.length;l++)i.push(s["import"](e[l],r));Promise.all(i).then(function(e){t&&t.apply(null,e)},n)}function r(t,r,o){"string"!=typeof t&&(o=r,r=t,t=null),r instanceof Array||(o=r,r=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===r[r.length-1]&&r.pop();var i,l,u;-1!=(i=x.call(r,"require"))&&(r.splice(i,1),t||(r=r.concat(n(o.toString(),i)))),-1!=(l=x.call(r,"exports"))&&r.splice(l,1),-1!=(u=x.call(r,"module"))&&r.splice(u,1);var d={name:t,deps:r,execute:function(t,n,d){function c(e,n,r){return"string"==typeof e&&"function"!=typeof n?t(e):a.call(s,e,n,r,d.id)}for(var f=[],m=0;m<r.length;m++)f.push(t(r[m]));d.uri=d.id,d.config=function(){},-1!=u&&f.splice(u,0,d),-1!=l&&f.splice(l,0,n),-1!=i&&(c.toUrl=function(e){return s.normalizeSync(e,d.id)},f.splice(i,0,c));var p=e.require;e.require=a;var h=o.apply(-1==l?e:n,f);return e.require=p,"undefined"==typeof h&&d&&(h=d.exports),"undefined"!=typeof h?h:void 0}};if(t)0!=r.length||m.anonDefine||m.isBundle?(m.anonDefine&&m.anonDefine.name&&s.registerDynamic(m.anonDefine.name,m.anonDefine.deps,!1,m.anonDefine.execute),m.anonDefine=null):m.anonDefine=d,m.isBundle=!0,s.registerDynamic(t,d.deps,!1,d.execute);else{if(m.anonDefine)throw new TypeError("Multiple defines for anonymous module");m.anonDefine=d}}function o(t){m.anonDefine=null,m.isBundle=!1;var n=e.module,a=e.exports,o=e.define;return e.module=void 0,e.exports=void 0,e.define=r,function(){e.define=o,e.module=n,e.exports=a}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",d=/\(([^\)]*)\)/,c=/^\s+|\s+$/g,f={};r.amd={};var m={isBundle:!1,anonDefine:null};s.set("@@amd-helpers",s.newModule({createDefine:o,require:a,define:r,lastModule:m})),s.amdDefine=r,s.amdRequire=a}}),function(){var e=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;d("onScriptLoad",function(e){return function(t){e.call(this,t);var n=this.get("@@amd-helpers").lastModule;(n.anonDefine||n.isBundle)&&(t.metadata.format="defined",t.metadata.registered=!0,n.isBundle=!1),n.anonDefine&&(t.metadata.deps=t.metadata.deps?t.metadata.deps.concat(n.anonDefine.deps):n.anonDefine.deps,t.metadata.execute=n.anonDefine.execute,n.anonDefine=null)}}),d("fetch",function(e){return function(t){return"amd"===t.metadata.format&&(t.metadata.scriptLoad=!0),t.metadata.scriptLoad&&this.get("@@amd-helpers").createDefine(this),e.call(this,t)}}),d("instantiate",function(t){return function(n){var a=this;if("amd"==n.metadata.format||!n.metadata.format&&n.source.match(e)){if(n.metadata.format="amd",a.execute!==!1){var r=this.get("@@amd-helpers").createDefine(a);j.call(a,n),r(a);var o=this.get("@@amd-helpers").lastModule;if(!o.anonDefine&&!o.isBundle)throw new TypeError("AMD module "+n.name+" did not define");o.anonDefine&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(o.anonDefine.deps):o.anonDefine.deps,n.metadata.execute=o.anonDefine.execute),o.isBundle=!1,o.anonDefine=null}return t.call(a,n)}return t.call(a,n)}})}(),c(function(e){return function(){e.call(this),this.map={}}}),d("normalize",function(e){return function(t,n,a){if("."!=t.substr(0,1)&&"/"!=t.substr(0,1)&&!t.match(k)){var r,o=0;for(var s in this.map)if(t.substr(0,s.length)==s&&(t.length==s.length||"/"==t[s.length])){var i=s.split("/").length;if(o>=i)continue;r=s,o=i}r&&(t=this.map[r]+t.substr(r.length))}return e.call(this,t,n,a)}}),d("normalize",function(e){return function(t,n){var a=e.call(this,t,n);return this.has(a)?a:a.match(k)?(this.defaultJSExtensions&&".js"!=a.substr(a.length-3,3)&&(a+=".js"),a):(a=s(this.paths,a)||a,this.defaultJSExtensions&&".js"!=a.substr(a.length-3,3)&&(a+=".js"),"."==a[0]||"/"==a[0]?new _(a,T).href:new _(a,h.call(this)).href)}}),function(){function e(e){for(var t in this.packages)if(e.substr(0,t.length)===t&&(e.length===t.length||"/"===e[t.length]))return t}function t(e,t){var n,a=0;for(var r in e)if(t.substr(0,r.length)==r&&(t.length==r.length||"/"==t[r.length])){var o=r.split("/").length;if(a>=o)continue;n=r,a=o}return n?e[n]+t.substr(n.length):void 0}c(function(e){return function(){e.call(this),this.packages={}}}),d("normalize",function(n){return function(a,r){if(r)var o=e.call(this,r)||this.defaultJSExtensions&&".js"==r.substr(r.length-3,3)&&e.call(this,r.substr(0,r.length-3));if(o&&"."!==a[0]){var s=this.packages[o].map;s&&(a=t(s,a)||a,"."===a[0]&&(r=o+"/"))}var i=this.defaultJSExtensions&&".js"!=a.substr(a.length-3,3),l=n.call(this,a,r);".js"!=l.substr(l.length-3,3)&&(i=!1),i&&(l=l.substr(0,l.length-3));
var u=e.call(this,l);if(u){var d=this.packages[u];u===l&&d.main&&(l+="/"+("./"==d.main.substr(0,2)?d.main.substr(2):d.main));var c="";d.meta&&d.meta[l.substr(u.length+1)]||(d.defaultExtension?-1==l.split("/").pop().indexOf(".")&&(c="."+d.defaultExtension):i&&(c=".js"));var f="."+l.substr(u.length),m=t(d.map,f)||c&&t(d.map,f+c);m?l="./"==m.substr(0,2)?u+m.substr(1):m:l+=c}else i&&(l+=".js");return l}}),l.prototype.normalizeSync=l.prototype.normalize,d("locate",function(t){return function(n){var a=this;return Promise.resolve(t.call(this,n)).then(function(t){var r=e.call(a,n.name);if(r){var o=a.packages[r];if(o.format&&(n.metadata.format=n.metadata.format||o.format),o.loader&&(n.metadata.loader=n.metadata.loader||o.loader),o.meta){var s,i={},l=0;for(var u in o.meta)if(s=u.indexOf("*"),-1!==s&&u.substr(0,s)===n.name.substr(0,s)&&u.substr(s+1)===n.name.substr(n.name.length-u.length+s+1)){var d=u.split("/").length;d>l&&(bestDetph=d),m(i,o.meta[u],l!=d)}var c=o.meta[n.name.substr(r.length+1)];c&&m(i,c),i.alias&&"./"==i.alias.substr(0,2)&&(i.alias=r+i.alias.substr(1)),i.loader&&"./"==i.loader.substr(0,2)&&(i.loader=r+i.loader.substr(1)),m(n.metadata,i)}}return t})}})}(),function(){function e(e,t,n,a){var r,o=this;n&&-1!=(r=n.indexOf("!"))&&(n=n.substr(0,r));var s=t.lastIndexOf("!");if(-1!=s){var i=t.substr(0,s),l=t.substr(s+1)||i.substr(i.lastIndexOf(".")+1),u=o.defaultJSExtensions&&".js"!=i.substr(i.length-3,3);return a?(i=o.normalizeSync(i,n),l=o.normalizeSync(l,n),u&&(i=i.substr(0,i.length-3)),i+"!"+l):Promise.all([o.normalize(i,n),o.normalize(l,n)]).then(function(e){return i=e[0],u&&(i=i.substr(0,i.length-3)),i+"!"+e[1]})}return e.call(o,t,n)}d("normalize",function(t){return function(n,a){return e.call(this,t,n,a,!1)}}),d("normalizeSync",function(t){return function(n,a){return e.call(this,t,n,a,!0)}}),d("locate",function(e){return function(t){var n=this,a=t.name,r=a.lastIndexOf("!");return-1!=r&&(t.metadata.loader=a.substr(r+1),t.name=a.substr(0,r)),e.call(n,t).then(function(e){var r=t.metadata.loader;if(!r)return e;if(n.defined&&n.defined[a])return e;var o=n.pluginLoader||n;return o["import"](r).then(function(r){return t.metadata.loaderModule=r,t.metadata.loaderArgument=a,t.address=e,r.locate?r.locate.call(n,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(a){return"string"==typeof a&&(t.source=a),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(a){return t.metadata.format="defined",t.metadata.execute=function(){return a},e.call(n,t)}):e.call(n,t)}})}(),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias;return n?(t.metadata.format="defined",this.defined[t.name]={declarative:!0,deps:[n],declare:function(e){return{setters:[function(t){for(var n in t)e(n,t[n])}],execute:function(){}}}},""):e.call(this,t)}})}(),function(){function e(e,t,n){for(var a,r=t.split(".");r.length>1;)a=r.shift(),e=e[a]=e[a]||{};a=r.shift(),a in e||(e[a]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,a=this.meta,r=t.name,o=0;for(var s in a)if(n=x.call(s,"*"),-1!==n&&s.substr(0,n)===r.substr(0,n)&&s.substr(n+1)===r.substr(r.length-s.length+n+1)){var i=s.split("/").length;i>o&&(bestDetph=i),m(t.metadata,a[s],o!=i)}return a[r]&&m(t.metadata,a[r]),e.call(this,t)}});var t=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(a){return function(r){var o=r.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)&&(f=f.substr(0,f.length-2),r.metadata[f]=r.metadata[f]||[]),r.metadata[f]instanceof Array?r.metadata[f].push(m):e(r.metadata,f,m)}}}return a.call(this,r)}})}(),function(){function e(e,t){return Promise.resolve(e.normalize(t)).then(function(n){return e.loadedBundles_[n]=!0,e.bundles[n]=e.bundles[n]||e.bundles[t],e.load(n)}).then(function(){return""})}c(function(e){return function(){e.call(this),this.bundles={},this.loadedBundles_={}}}),d("locate",function(e){return function(t){return(t.name in this.loadedBundles_||t.name in this.bundles)&&(t.metadata.bundle=!0),e.call(this,t)}}),d("fetch",function(t){return function(n){var a=this;if(a.trace)return t.call(a,n);if(n.name in a.defined)return"";for(var r in a.loadedBundles_)if(-1!=x.call(a.bundles[r],n.name))return e(a,r);for(var r in a.bundles)if(-1!=x.call(a.bundles[r],n.name))return e(a,r);return t.call(a,n)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,a=n.depCache[t.name];if(a)for(var r=0;r<a.length;r++)n["import"](a[r]);return e.call(n,t)}})}(),function(){var e=/#\{[^\}]+\}|#\?.+$/;d("normalize",function(t){return function(n,a,r){var o=this,s=n.match(e);if(s){var i="?"!=s[0][1],l=i?s[0].substr(2,s[0].length-3):s[0].substr(2);if("."==l[0]||-1!=l.indexOf("/"))throw new TypeError("Invalid condition "+s[0]+"\n	Condition modules cannot contain . or / in the name.");var u="default",d=l.indexOf(".");-1!=d&&(u=l.substr(d+1),l=l.substr(0,d));var c=!i&&"~"==l[0];return c&&(l=l.substr(1)),o["import"](l,a,r).then(function(l){var d=p(u,l);if(i){if("string"!=typeof d)throw new TypeError("The condition value for "+s[0]+" doesn't resolving to a string.");n=n.replace(e,d)}else{if("boolean"!=typeof d)throw new TypeError("The condition value for "+s[0]+" isn't resolving to a boolean.");c&&(d=!d),n=d?n.replace(e,""):"@empty"}return t.call(o,n,a,r)})}return Promise.resolve(t.call(o,n,a,r))}})}(),E=new l,E.constructor=l,"object"==typeof exports&&(module.exports=r),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||r,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=r,E||(E=new o,E.constructor=o),"object"==typeof exports&&(module.exports=E),e.System=E}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"undefined"!=typeof URL&&"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var a=document.getElementsByTagName("script");$__curScript=a[a.length-1];var r=$__curScript.src,o=r.substr(0,r.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
//# sourceMappingURL=system.js.map
