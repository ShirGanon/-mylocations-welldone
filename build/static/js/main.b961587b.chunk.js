(this.webpackJsonpmylocations=this.webpackJsonpmylocations||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(12),r=n.n(c),o=(n(35),n(9)),s=(n(36),n(67)),d=n(68),l=n(71),u=n(65),j=n(72),b=n(44),O=Object(i.createContext)({}),f=n(2),g=Object(u.a)({toolBar:{justifyContent:"center"}});function h(e){var t=e.onViewButton,n=e.onEditButton,a=Object(i.useContext)(O),c=a.categories,r=a.setCategories,u=a.selectedTitle,h=a.setSelectedTitle,x=a.newCategory,m=a.setNewCategory,v=a.onSelectCategory,y=a.selected,C=Object(i.useState)(""),S=Object(o.a)(C,2),p=S[0],B=S[1],w=Object(i.useState)(null),T=Object(o.a)(w,2),N=T[0],k=T[1],E=g(),I=Boolean(N);return Object(i.useEffect)((function(){k(null),h(null===y?"Categories":c.find((function(e){return e.id===y})).title)}),[y]),Object(f.jsx)("div",{children:Object(f.jsx)(s.a,{position:"static",children:Object(f.jsxs)(d.a,{className:E.toolBar,children:[Object(f.jsx)("a",{children:u}),null!==y?Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{variant:"contained",onClick:function(){return t()},children:"View"}),Object(f.jsx)(l.a,{variant:"contained",onClick:function(){return n()},children:"Edit"}),Object(f.jsx)(l.a,{variant:"contained",onClick:function(){return function(){var e=c;e=e.filter((function(e){return e.id!==y})),r(e),v(null),m(!x)}()},children:"Delete"})]}):Object(f.jsx)(l.a,{variant:"contained",color:"secondary",onClick:function(e){k(N?null:e.currentTarget)},children:"New Category"}),Object(f.jsx)(j.a,{open:I,anchorEl:N,children:Object(f.jsx)(b.a,{elevation:3,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",value:p,name:"newategory",onChange:function(e){return B(e.target.value)}}),Object(f.jsx)(l.a,{variant:"outlined",onClick:function(){if(""!==p){var e=c,t=e[e.length-1].id;e.push({title:p,id:t+1}),r(e),m(!x),B(""),k(null)}},children:"Submit"})]})})})]})})})}var x=Object(u.a)({categoryItem:{border:"solid 1px grey",borderRadius:"10px",cursor:"pointer"},categoriesTitle:{borderBottom:"1px solid"}});function m(){var e=Object(i.useContext)(O),t=e.editButton,n=e.onSelectCategory,a=e.categories,c=e.setCategories,r=e.onEditButton,s=e.setSelectedTitle,d=x(),l=Object(i.useState)(null),u=Object(o.a)(l,2),j=u[0],b=u[1],g=Object(i.useState)(""),h=Object(o.a)(g,2),m=h[0],v=h[1];return Object(i.useEffect)((function(){v(j)}),[j]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{className:d.categoriesTitle,children:"Categories"}),a.map((function(e){return Object(f.jsx)("div",{className:d.categoryItem,onClick:function(){return!t&&(j===(i=e).title?b(null):b(i.title),void n(i));var i},children:t&&j===e.title?Object(f.jsx)("input",{type:"text",value:m,id:"fname",name:"categoryName",onChange:function(e){return v(e.target.value)},onKeyDown:function(t){return function(e,t){if("Enter"===e.key){var n=a;n.find((function(e){return e.id===t})).title=m,c(n),b(m),s(m),r()}}(t,e.id)}}):Object(f.jsx)("a",{style:{color:j===e.title?"red":"black"},children:e.title})},e.title)}))]})}function v(){var e=Object(i.useContext)(O),t=e.selected,n=e.items.filter((function(e){return e.category.id===t})).map((function(e){return Object(f.jsx)("div",{children:"".concat(e.name," | ").concat(e.address," | ").concat(e.coordinates)},e.name)}));return Object(f.jsx)("div",{children:n})}var y=n(69),C=n(70),S=Object(u.a)({container:{padding:"0px"},item:{width:"600px"}});function p(){var e=S(),t=Object(i.useContext)(O),n=t.viewButton,a=t.editButton,c=t.selected;return Object(f.jsx)("div",{children:Object(f.jsx)(y.a,{className:e.container,maxWidth:"sm",children:Object(f.jsxs)(C.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center",spacing:1,children:[Object(f.jsx)(C.a,{item:!0,className:e.item,children:Object(f.jsx)(b.a,{elevation:3,children:Object(f.jsx)(m,{editButton:a})})}),n&&Object(f.jsx)(C.a,{item:!0,className:e.item,children:Object(f.jsx)(b.a,{elevation:3,children:Object(f.jsx)(v,{selected:c})})})]})})})}var B=function(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)("Categories"),r=Object(o.a)(c,2),s=r[0],d=r[1],l=Object(i.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1],g=Object(i.useState)(!1),x=Object(o.a)(g,2),m=x[0],v=x[1],y=Object(i.useState)([{title:"Category 1",id:0},{title:"Category 2",id:1},{title:"Category 3",id:2}]),C=Object(o.a)(y,2),S=C[0],B=C[1],w=Object(i.useState)(!1),T=Object(o.a)(w,2),N=T[0],k=T[1],E=Object(i.useState)([{name:"Mahane Yehuda",address:"Agripas St 90, Jerusalem",coordinates:"31.785, 35.212",id:0,category:{id:0}},{name:"Jaffa Flea Market",address:"Olei Zion St, Tel Aviv-Yafo",coordinates:"32.053, 34.756",id:1,category:{id:0}},{name:"Old Train Station",address:"Kaufmann St, Tel Aviv-Yafo",coordinates:"32.059, 34.762",id:2,category:{id:0}},{name:"Sheba Medical Center",address:"Derech Sheba 2, Ramat Gan",coordinates:"32.047, 34.842",id:3,category:{id:1}},{name:"HaBama Center",address:"HaCarmel St 20, Ganei Tikva",coordinates:"32.059, 34.879",id:4,category:{id:1}},{name:"Country Club Kiryat Hasharon",address:"HaMoran St 7, Netanya",coordinates:"32.302, 34.877",id:5,category:{id:2}},{name:"Laniado Hospital",address:"Divrei Khayim St 16, Netanya",coordinates:"32.346, 34.855",id:6,category:{id:2}}]),I=Object(o.a)(E,2),D=I[0],F=I[1],H=function(){v(!m)},M=function(){b(!1),v(!1)};return Object(f.jsx)(O.Provider,{value:{selected:n,setselected:a,viewButton:j,setViewButton:b,editButton:m,setEditButton:v,onSelectCategory:function(e){null===n?a(e.id):null===e||n===e.id?a(null):a(e.id),M()},categories:S,setCategories:B,onEditButton:H,selectedTitle:s,setSelectedTitle:d,newCategory:N,setNewCategory:k,items:D,setItems:F},children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(h,{onViewButton:function(){b(!j)},onEditButton:H}),Object(f.jsx)(p,{onSelect:M})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),w()}},[[43,1,2]]]);
//# sourceMappingURL=main.b961587b.chunk.js.map