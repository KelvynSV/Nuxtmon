(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{244:function(e,n,o){var content=o(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(178).default)("023b546b",content,!0,{sourceMap:!1})},245:function(e,n,o){"use strict";o.r(n);o(44);var t={props:{type:Object},computed:{typeColor:function(){switch(this.type.type.name){case"fairy":return{"--bg-color":"#f483bb"};case"steel":return{"--bg-color":"#b4b4cc"};case"dark":return{"--bg-color":"#5d4038"};case"dragon":return{"--bg-color":"#673ab7"};case"ghost":return{"--bg-color":"#7555a6"};case"rock":return{"--bg-color":"#bda537"};case"bug":return{"--bg-color":"#98b92e"};case"psychic":return{"--bg-color":"#ec407a"};case"flying":return{"--bg-color":"#9e87e1"};case"ground":return{"--bg-color":"#dfb352"};case"poison":return{"--bg-color":"#aa47bc"};case"fighting":return{"--bg-color":"#d32f2e"};case"ice":return{"--bg-color":"#80deea"};case"grass":return{"--bg-color":"#4cb050"};case"electric":return{"--bg-color":"#fecd07"};case"water":return{"--bg-color":"#2097f5"};case"fire":return{"--bg-color":"#e86513"};case"normal":return{"--bg-color":"#bfb97f"}}}}},r=(o(247),o(43)),component=Object(r.a)(t,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("label",{style:e.typeColor},[e._v(e._s(e.type.type.name))])}),[],!1,null,"bd45d572",null);n.default=component.exports},246:function(e,n,o){var content=o(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(178).default)("53ca59b0",content,!0,{sourceMap:!1})},247:function(e,n,o){"use strict";o(244)},248:function(e,n,o){var t=o(177)((function(i){return i[1]}));t.push([e.i,"\nlabel[data-v-bd45d572]{\n    background-color: var(--bg-color);\n    border-radius: 14px;\n    padding: 2px 6px 4px 6px;\n    margin: 2px;\n    color: white;\n}\n",""]),t.locals={},e.exports=t},250:function(e,n,o){"use strict";o(246)},251:function(e,n,o){var t=o(177)((function(i){return i[1]}));t.push([e.i,"\n.pokemon-card[data-v-0debc015]{\n  width: 220px;\n  margin: 20px;\n  padding: 30px 10px 30px 10px;\n  display: inline-block;\n  text-align: center;\n  box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.pokemon-card-title[data-v-0debc015]{\n  margin-top: 0px;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.span-id[data-v-0debc015]{\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  font-size: 20px;\n  background-color: #939cc7;\n  border-radius: 50px;\n  color: white;\n  text-align: center;\n  box-shadow:  2px 2px 8px #909090;\n}\n",""]),t.locals={},e.exports=t},252:function(e,n,o){"use strict";o.r(n);var t={components:{PokemonTypeTag:o(245).default},props:{pokemon:{type:Object,default:function(){}}}},r=(o(250),o(43)),component=Object(r.a)(t,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"nm-card pokemon-card"},[o("span",{staticClass:"span-id title"},[e._v(e._s(e.pokemon.id))]),e._v(" "),o("img",{attrs:{src:e.pokemon.sprites.front_default,alt:"Imagem do pokemon"}}),e._v(" "),o("div",{staticClass:"px-6 py-4"},[o("p",{staticClass:"pokemon-card-title title"},[e._v(e._s(e.pokemon.name))]),e._v(" "),o("p",[e._v("\n      "+e._s(e.pokemon.version_group.name)+"\n    ")])]),e._v(" "),o("div",{staticClass:"px-6 pt-4 pb-2"},e._l(e.pokemon.types,(function(e){return o("pokemon-type-tag",{key:e.type.name,attrs:{type:e}})})),1)])}),[],!1,null,"0debc015",null);n.default=component.exports;installComponents(component,{PokemonTypeTag:o(245).default})}}]);