(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},r={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return s(e)}function n(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}r.keys=function(){return Object.keys(a)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=s("ce5b"),n=s.n(r),i=s("8c4f"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticStyle:{margin:"30px"}},[s("v-card",[s("v-card-title",{staticClass:"headline primary",staticStyle:{color:"white",margin:"auto"},attrs:{"primary-title":""}},[s("v-spacer",[s("div",{staticClass:"text-center"},[s("v-icon",{staticStyle:{color:"white"}},[t._v("mdi-view-headline")]),t._v("\n                FRAMEWORKS\n            ")],1)]),s("div",{staticClass:"text-right"},[[s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.openNewDialog()}}},[s("v-icon",[t._v("mdi-plus")]),t._v("\n                        Add\n                    ")],1)],s("Dialog",{attrs:{show:t.show,childData:t.parentData},on:{newRow:function(e){return t.addRow(e)}}})],2)],1),s("v-simple-table",{staticStyle:{margin:"20px"}},[[s("thead",[s("tr",[s("th",[t._v("\n                        Title\n                    ")]),s("th",[t._v("\n                        Description\n                    ")]),s("th",[t._v("\n                        Deadline\n                    ")]),s("th",[t._v("\n                        Priority\n                    ")]),s("th",[t._v("\n                        Is Complete\n                    ")]),s("th",[t._v("\n                        Action\n                    ")])])]),s("tbody",t._l(t.rows,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.description))]),s("td",[t._v(t._s(t.formatDate(e.dead)))]),s("td",[t._v(t._s(e.priority))]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.completeRows,expression:"completeRows"}],attrs:{type:"checkbox",id:"checkbox",label:"Is Complete"},domProps:{value:e.title,checked:Array.isArray(t.completeRows)?t._i(t.completeRows,e.title)>-1:t.completeRows},on:{change:function(s){var a=t.completeRows,r=s.target,n=!!r.checked;if(Array.isArray(a)){var i=e.title,o=t._i(a,i);r.checked?o<0&&(t.completeRows=a.concat([i])):o>-1&&(t.completeRows=a.slice(0,o).concat(a.slice(o+1)))}else t.completeRows=n}}})]),s("td",[t.completeRows.includes(e.title)?t._e():s("v-row",[s("v-btn",{attrs:{color:"primary",dark:""},nativeOn:{click:function(s){return t.openOldDialog(e,a)}}},[s("v-icon",[t._v("mdi-square-edit-outline")]),t._v("\n                                Update\n                            ")],1)],1),s("v-row",[s("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){return t.deleteRow(a)}}},[s("v-icon",[t._v("mdi-close-circle")]),t._v("\n                                Delete\n                            ")],1)],1)],1)])}),0)]],2)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center"},[s("v-dialog",{attrs:{width:"300"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("v-card",[t.childData.adding?s("v-card-title",{staticClass:"primary",staticStyle:{color:"white"}},[s("v-icon",{staticStyle:{color:"white"}},[t._v("\n        mdi-plus-circle")]),t._v("\n        Add Task\n      ")],1):s("v-card-title",{staticClass:"primary",staticStyle:{color:"white"}},[s("v-icon",{staticStyle:{color:"white"}},[t._v("\n        mdi-square-edit-outline")]),t._v("\n        Edit Task\n    ")],1),s("v-container",[s("v-row",{attrs:{"no-gutters":""}},[s("v-form",{ref:"form",attrs:{"lazy-validation":""}},[t.childData.adding?s("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[s("v-text-field",{attrs:{rules:[t.rules.required,t.rules.distinct,t.rules.length],label:"Title",outlined:""},model:{value:t.childData.title,callback:function(e){t.$set(t.childData,"title",e)},expression:"childData.title"}})],1):t._e(),s("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[s("v-text-field",{attrs:{label:"Description",rules:[t.rules.required],outlined:""},model:{value:t.childData.description,callback:function(e){t.$set(t.childData,"description",e)},expression:"childData.description"}})],1),s("v-col",{attrs:{cols:"12",sm:"2",md:"12"}},[s("v-text-field",{attrs:{label:"Deadline",outlined:"",rules:[t.rules.required],type:"date"},model:{value:t.childData.dead,callback:function(e){t.$set(t.childData,"dead",e)},expression:"childData.dead"}}),s("p",[t._v("Priority")]),s("v-radio-group",{attrs:{rules:[t.rules.required],row:""},model:{value:t.childData.priority,callback:function(e){t.$set(t.childData,"priority",e)},expression:"childData.priority"}},[s("v-radio",{attrs:{label:"Low",value:"Low"}}),s("v-radio",{attrs:{label:"Med",value:"Med"}}),s("v-radio",{attrs:{label:"High",value:"High"}})],1)],1)],1)],1)],1),s("v-divider"),s("v-card-actions",[s("v-spacer"),t.childData.adding?s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.validateAndAdd()}}},[s("v-icon",[t._v("mdi-plus-circle")]),t._v("\n            Add\n        ")],1):s("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.validateAndAdd()}}},[s("v-icon",[t._v("mdi-square-edit-outline")]),t._v("\n            Edit\n        ")],1),s("v-btn",{attrs:{color:"error"},on:{click:function(e){return t.$emit("newRow",-1)}}},[t._v("\n            Cancel\n        ")])],1)],1)],1)],1)},d=[],u=(s("6762"),s("2fdb"),s("025a")),f={name:"Dialog",created:function(){},props:{title:String,rowList:Array,childData:Object,show:Boolean},methods:{validateAndAdd:function(){this.$refs.form.validate()&&this.changeRows()},changeRows:function(){this.$refs.form.resetValidation(),this.show=!1,this.$emit("newRow",this.childData)}},data:function(){var t=this;return{show:!1,rules:{required:function(t){return!!t||"Required."},distinct:function(e){return!t.childData.titles.includes(e)||"Must be a distinct title"},length:function(t){return t.length<30||"Value too long"}}}}},b=f,h=s("2877"),j=Object(h["a"])(b,l,d,!1,null,null,null),p=j.exports,v=s("c1df"),m=s.n(v),w={created:function(){},components:{Dialog:p,VueToastr:u["a"]},methods:{addRow:function(t){-1!=t&&(-1==this.currRow?(this.rows.push(t),this.toast("Successfully added task!")):(this.rows[this.currRow]=t,this.toast("Successfully edited task!"))),this.show=!1},openNewDialog:function(){this.parentData={adding:!0,titles:this.rows.map(function(t){return t.title}),title:"",description:"",dead:"",priority:""},this.show=!0,this.currRow=-1},openOldDialog:function(t,e){this.parentData={adding:!1,titles:this.rows.map(function(t){return t.title}),title:t.title,description:t.description,dead:t.dead,priority:t.priority},this.show=!0,this.currRow=e},closeDialog:function(){this.show=!1},deleteRow:function(t){this.rows.splice(t,1),this.completeRows.splice(t,1),this.$toasted.show("Successfully deleted task!",{theme:"outline",position:"bottom-right",duration:5e3})},formatDate:function(t){return t?m()(t,"YYYY/MM/DD").format("MM/DD/YYYY"):""},toast:function(t){this.$toasted.show(t,{theme:"outline",position:"bottom-right",duration:5e3})}},watch:{},computed:{},data:function(t){return{rows:[],currRow:-1,parentData:{titles:[],title:"",description:"",dead:"",priority:""},show:!1,completeRows:[]}}},y=w,g=Object(h["a"])(y,o,c,!1,null,null,null),k=g.exports,_=[{path:"/toDo",name:"toDo",component:k},{path:"*",name:"default",redirect:"/toDo"}],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},x=[],R={},z=Object(h["a"])(R,D,x,!1,null,null,null),O=z.exports,S=s("a65d"),A=s.n(S);a["default"].use(i["a"]),a["default"].use(n.a),a["default"].use(A.a,{duration:1e3}),a["default"].config.productionTip=!1,new a["default"]({router:new i["a"]({routes:_}),vuetify:new n.a,render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.7615b359.js.map