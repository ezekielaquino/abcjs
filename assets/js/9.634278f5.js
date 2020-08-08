(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(n,t,e){},476:function(n,t,e){"use strict";var i=e(348);e.n(i).a},489:function(n,t,e){"use strict";e.r(t);e(166),e(65),e(44),e(66);var i=e(0),u={name:"tune-book-info",props:{type:{type:String,required:!0}},computed:{functionString:function(){return"title"===this.type?"getTuneByTitle":"getTuneById"}},data:function(){return{tuneNames:[],currentTune:"",currentInfo:"",abcjs:null,tunebook:null}},mounted:function(){var n=this;i.a.nextTick((function(){n.abcjs=e(303)}))},methods:{redraw:function(n){this.tunebook=new this.abcjs.TuneBook(n),"title"===this.type?this.tuneNames=this.tunebook.tunes.map((function(n){return n.title})):this.tuneNames=this.tunebook.tunes.map((function(n){return n.id}))},setInfo:function(){var n;n="title"===this.type?this.tunebook.getTuneByTitle(this.currentTune):this.tunebook.getTuneById(this.currentTune),this.currentInfo='{\n&nbsp;&nbsp;id: "'.concat(n.id,'",\n&nbsp;&nbsp;title: "').concat(n.title,'",\n&nbsp;&nbsp;startPos: ').concat(n.startPos,',\n&nbsp;&nbsp;abc: "').concat(this.abcSnippet(n.abc),'",\n&nbsp;&nbsp;pure: "').concat(this.abcSnippet(n.pure),'",\n}'),this.currentInfo=this.currentInfo.replace(/\n/g,"<br>")},sanitizeAbcString:function(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},abcSnippet:function(n){return this.sanitizeAbcString(n.substring(0,50)).replace(/\n/g,"\\n")+"..."}}},r=(e(476),e(43)),o=Object(r.a)(u,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ClientOnly",[e("div",{staticClass:"tune-book-info"},[e("label",[n._v("Choose Tune:\n\t\t"),e("select",{directives:[{name:"model",rawName:"v-model",value:n.currentTune,expression:"currentTune"}],on:{change:[function(t){var e=Array.prototype.filter.call(t.target.options,(function(n){return n.selected})).map((function(n){return"_value"in n?n._value:n.value}));n.currentTune=t.target.multiple?e:e[0]},n.setInfo]}},n._l(n.tuneNames,(function(t){return e("option",{key:t},[n._v(n._s(t))])})),0)]),n._v(" "),n.currentTune?e("div",{staticClass:"language- my-code"},[e("div",[n._v("const info = tunebook."+n._s(n.functionString)+'("'+n._s(n.currentTune)+'");')]),n._v(" "),e("div",[n._v("console.log(info);")]),n._v(" "),e("div",{staticClass:"code-results",domProps:{innerHTML:n._s(n.currentInfo)}})]):n._e()])])}),[],!1,null,"5a8141b0",null);t.default=o.exports}}]);