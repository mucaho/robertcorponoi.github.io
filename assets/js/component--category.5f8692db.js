(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{197:function(t,e,s){},198:function(t,e,s){},199:function(t,e,s){},200:function(t,e,s){"use strict";s.d(e,"c",function(){return o}),s.d(e,"b",function(){return r}),s.d(e,"a",function(){return i});var n=s(1),a=n.a.observable({});function o(t,e){return n.a.set(a,t,e)}function r(t){return a[t]}function i(t,e){var s=e.matched[0],n=s?s.components.default:{};if(t.stringified&&n.__file)return console.error("An error occurred while executing "+"page-query for ".concat(n.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},201:function(t,e,s){"use strict";var n=s(197);s.n(n).a},202:function(t,e,s){"use strict";var n=s(198);s.n(n).a},203:function(t,e,s){"use strict";var n=s(1),a=s(200),o=s(77),r=n.a.config.optionMergeStrategies;e.a=function(t){var e=t.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=n;else{e.__pageQuery=n,e.computed=r.computed({$page:function(){return Object(a.b)(this.$route.path)}},e.computed);var i=function(t){e[t]=r[t]([c(e)],e[t])},c=function(){return function(t,n,r){s.e(40).then(s.bind(null,208)).then(function(s){s.default(t,e.__pageQuery).then(function(e){404===e.code?r({name:o.b,params:{0:t.path}}):r()}).catch(function(e){e.code===o.a||404===e.code?(console.error(e),r({name:o.b,params:{0:t.path}})):Object(a.a)(e,t)})})}};i("beforeRouteEnter"),i("beforeRouteUpdate")}}},204:function(t,e,s){"use strict";var n={props:["post"]},a=(s(201),s(4)),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-meta"},[t._v("\n  Committed "+t._s(t.post.date)+".\n  "),t.post.timeToRead?[s("strong",[t._v(t._s(t.post.timeToRead)+" min parse.")])]:t._e()],2)},[],!1,null,null,null);e.a=o.exports},205:function(t,e,s){"use strict";var n={props:["post"]},a=(s(202),s(4)),o=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-tags"},t._l(t.post.tags,function(e){return s("g-link",{key:e.id,staticClass:"post-tags__link",attrs:{to:e.path}},[t._v(t._s(e.title))])}),1)},[],!1,null,null,null);e.a=o.exports},206:function(t,e,s){"use strict";var n=s(199);s.n(n).a},207:function(t,e,s){"use strict";var n=s(204),a=s(205),o={components:{PostMeta:n.a,PostTags:a.a},props:["post"]},r=(s(206),s(4)),i=Object(r.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("g-link",{staticClass:"post-card-link",attrs:{to:t.post.path}},[s("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[s("div",{staticClass:"post-card__header"},[t.post.coverImage?s("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.coverImage}}):t._e()],1),s("div",{staticClass:"post-card__content"},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),s("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}})],1)])])},[],!1,null,null,null);e.a=i.exports},254:function(t,e,s){"use strict";s.r(e);var n={components:{PostCard:s(207).a},metaInfo:{title:"Category"}},a=s(4),o=s(203),r=function(t){Object(o.a)(t,void 0)},i=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"container"},[e("div",{staticClass:"posts"},this._l(this.$page.category.belongsTo.edges,function(t){return e("PostCard",{key:t.node.id,attrs:{post:t.node}})}),1)])])},[],!1,null,null,null);"function"==typeof r&&r(i);e.default=i.exports}}]);