(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{522:function(a,s,n){},551:function(a,s,n){"use strict";n(522)},557:function(a,s,n){"use strict";n.r(s);n(175);var t=n(0),e={props:{desc:String,cpp:String,js:String,lua:String},data:function(){var a={lang:"cpp",cppText:this.cpp,jsText:this.js,luaText:this.lua};if(""!=this.desc){var s=this.desc;s.startsWith("/")||(s="// "+s),a.cppText=s+"\n\n"+this.cpp,a.jsText=s+"\n\n"+this.js,a.luaText=s+"\n\n"+this.lua}return a},methods:{onLanguage:function(a){console.log(this.desc),t.a.set(t.a.prototype,"apiLang",a)},isLanguageHL:function(a){return t.a.prototype.apiLang==a?"showapi-lang-tag-hl":"showapi-lang-tag"},canShow:function(a){return t.a.prototype.apiLang==a}},watch:{apiLang:function(){}}},i=(n(551),n(46)),c=Object(i.a)(e,(function(){var a=this,s=a.$createElement,n=a._self._c||s;return n("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("div",{staticStyle:{float:"right"}},[n("span",{class:a.isLanguageHL("cpp"),on:{click:function(s){return a.onLanguage("cpp")}}},[a._v("Cpp")]),a._v(" "),n("span",{staticStyle:{color:"#ddd",padding:"0em .5em"}},[a._v("|")]),a._v(" "),n("span",{class:a.isLanguageHL("js"),on:{click:function(s){return a.onLanguage("js")}}},[a._v("Javascript")]),a._v(" "),n("span",{staticStyle:{color:"#ddd",padding:"0em .5em"}},[a._v("|")]),a._v(" "),n("span",{class:a.isLanguageHL("lua"),on:{click:function(s){return a.onLanguage("lua")}}},[a._v("Lua")])]),a._v(" "),n("div",[a._v(" ")]),a._v(" "),n("pre",{directives:[{name:"show",rawName:"v-show",value:a.canShow("cpp"),expression:"canShow('cpp')"}],staticClass:"language-cpp"},[a._v("      "),n("code",{staticClass:"language-cpp"},[a._v(a._s(this.cppText))]),a._v("\n  ")]),a._v(" "),n("pre",{directives:[{name:"show",rawName:"v-show",value:a.canShow("js"),expression:"canShow('js')"}],staticClass:"language-js"},[a._v("      "),n("code",{staticClass:"language-js"},[a._v(a._s(this.jsText))]),a._v("\n  ")]),a._v(" "),n("pre",{directives:[{name:"show",rawName:"v-show",value:a.canShow("lua"),expression:"canShow('lua')"}],staticClass:"language-lua"},[a._v("      "),n("code",{staticClass:"language-lua"},[a._v(a._s(this.luaText))]),a._v("\n  ")])])}),[],!1,null,"bc0529f4",null);s.default=c.exports}}]);