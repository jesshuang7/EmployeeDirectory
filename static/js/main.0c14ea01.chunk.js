(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(2),c=n.n(r),a=n(12),l=n.n(a),i=(n(23),n(13)),o=n(14),h=n(17),d=n(16),j=n(15),u=n.n(j),m=function(){return u.a.get("https://randomuser.me/api/?results=50",{headers:{"Access-Control-Allow-Origin":""}})};var b=function(e){return Object(s.jsx)("div",{className:"container",style:e.style,children:e.children})};n(42);var O=function(e){return Object(s.jsx)("form",{className:"search",children:Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"employee"}),Object(s.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"searchName",list:"searchNames",type:"search",className:"form-control",placeholder:"filter by employee's name",id:"searchName"})]})})};n(43);var f=function(e){return Object(s.jsx)("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var p=function(e,t){return Object(s.jsxs)("table",{class:"table table-striped",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Image"}),"descending"===e.sortingOrder?Object(s.jsxs)("th",{className:"hover",value:"name",onClick:function(){return e.sortingFunc(e)},children:["Name ",Object(s.jsx)("i",{className:"bi bi-caret-down-fill"})]}):"ascending"===e.sortingOrder?Object(s.jsxs)("th",{className:"hover",value:"name",onClick:function(){return e.sortingFunc(e)},children:["Name ",Object(s.jsx)("i",{className:"bi bi-caret-up-fill"})]}):Object(s.jsx)("th",{className:"hover",value:"name",onClick:function(){return e.sortingFunc(e)},children:"Name "}),Object(s.jsx)("th",{scope:"col",children:"Phone"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"DOB"})]})}),Object(s.jsx)("tbody",{children:e.filteredList.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.medium,alt:e.name.first})}),Object(s.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(s.jsxs)("td",{children:[" ",e.cell," "]}),Object(s.jsxs)("td",{children:[" ",e.email]}),Object(s.jsxs)("td",{children:[" ",new Date(Date.parse(e.dob.date)).toLocaleDateString()]})]})}))})]})},x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],search:"",filteredList:[],sortingOrder:"descending"},e.handleInputChange=function(t){e.setState({search:t.target.value}),e.searchEmployee(e.state.search)},e.searchEmployee=function(t){console.log("Search",t);var n=e.state.employees.filter((function(e){return(e.name.first+""+e.name.last).toLowerCase().includes(t.toLowerCase())}));e.setState({filteredList:n}),console.log(n)},e.onSortChange=function(){e.setState({employees:e.state.sortingOrder?e.state.employees.sort((function(e,t){return e.name.last<t.name.last?-1:e.name.last>t.name.last?1:0})):e.state.employees.reverse((function(e,t){return e.name.last<t.name.last?1:e.name.last>t.name.last?-1:0})),sortingOrder:!e.state.sortingOrder})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){return e.setState({employees:t.data.results,filteredList:t.data.results,sortingEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)(f,{children:[Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results"})]}),Object(s.jsxs)(b,{style:{minHeight:"80%"},children:[Object(s.jsx)("h1",{className:"text-center"}),Object(s.jsx)(O,{handleInputChange:this.handleInputChange}),Object(s.jsx)(p,{filteredList:this.state.filteredList,onSortChange:this.state.onSortChange})]})]})}}]),n}(r.Component);var g=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(x,{})})};n(44);l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.0c14ea01.chunk.js.map