(window.webpackJsonp=window.webpackJsonp||[]).push([[9,4],{252:function(n,t,e){var content=e(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(181).default)("5a4aca86",content,!0,{sourceMap:!1})},257:function(n,t,e){"use strict";e(252)},258:function(n,t,e){var o=e(180)((function(i){return i[1]}));o.push([n.i,"\n.pokemon-form[data-v-30b68d57] {\n        margin: auto;\n        max-width: 1100px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n\n        border-radius: 50px;\nbackground: linear-gradient(315deg, #cacaca, #f0f0f0);\nbox-shadow:  -20px -20px 60px #bebebe,\n             20px 20px 60px #ffffff;\n}\n#avatarDiv[data-v-30b68d57]{\n        width: 100%;\n        display: block;\n        text-align: center;\n}\n.pokemonAvatar[data-v-30b68d57]{\n        max-width: 300px;\n}\n",""]),o.locals={},n.exports=o},261:function(n,t,e){var content=e(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(181).default)("6deaf1af",content,!0,{sourceMap:!1})},264:function(n,t,e){"use strict";e.r(t);var o=e(13),r=(e(59),e(19),e(36),e(37),{data:function(){return{pokemonDetail:{},pokemonEvolution:{},loadedData:!1}},beforeMount:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/"+self.$nuxt.$route.query.id).then((function(n){return n.json()})).then((function(t){return n.pokemonDetail=t})),fetch("https://pokeapi.co/api/v2/evolution-chain/"+self.$nuxt.$route.query.id).then((function(n){return n.json()})).then((function(t){return n.pokemonEvolution=t}))]);case 2:t.sent,n.loadedData=!0;case 4:case"end":return t.stop()}}),t)})))()}}),c=(e(257),e(44)),component=Object(c.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.loadedData?e("div",{staticClass:"pokemon-form"},[e("div",{attrs:{id:"avatarDiv"}},[e("img",{staticClass:"pokemonAvatar",attrs:{src:n.pokemonDetail.sprites.other["official-artwork"].front_default}})])]):n._e()}),[],!1,null,"30b68d57",null);t.default=component.exports},266:function(n,t,e){"use strict";e(261)},267:function(n,t,e){var o=e(180)((function(i){return i[1]}));o.push([n.i,"\nbody{\n    background: #e0e0e0;\n}\n",""]),o.locals={},n.exports=o},278:function(n,t,e){"use strict";e.r(t);e(266);var o=e(44),component=Object(o.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("pokemon-detail-form")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PokemonDetailForm:e(264).default})}}]);