(this["webpackJsonpeasy-delivery"]=this["webpackJsonpeasy-delivery"]||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"formed":2021,"active":true,"tasks":[{"state":"pending","id":1,"pickUpDate":"2021-03-09T19:20+01:00","dropOffDate":"2021-03-10T19:20+01:00","pickUpAddress":{"street":"22 Rue du Grenier Saint-Lazare","number":"22","postalCode":"75003","city":"Paris","countryCode":"FRA","country":"France"},"dropOffAddress":{"street":"Calle Castilla","number":"102","postalCode":"41020","city":"Barcelona","countryCode":"ESP","country":"Spain"},"farm":"Tres Arroyos","abattoir":"M. Garcia","employee":"Juan Perez","truck":"Rigido","pigNumber":40,"pigType":"iberico"},{"state":"completed","id":2,"pickUpDate":"2021-10-20T19:20+01:00","dropOffDate":"2021-10-21T19:20+01:00","farm":"El Huerto","abattoir":"M. Del Sar","employee":"Antonio Fernandez","truck":"Articulado","pigNumber":20,"pigType":"Porcino Duroc"},{"state":"completed","id":50,"pickUpDate":"2021-08-03T19:20+01:00","dropOffDate":"2021-08-04T19:20+01:00","farm":"Los Martinez","abattoir":"Pineda","employee":"Antonio Fernandez","truck":"Articulado","pigNumber":60,"pigType":"Porcino Duroc"}]}')},19:function(e){e.exports=JSON.parse('{"formed":2021,"active":true,"farms":[{"name":"Tres arroyos","id":1,"geolocation":"11.1234.111","phone":"624 123 564","address":{"street":"Avenida Tres Gracias","number":"84","postalCode":"123123","city":"Madrid","countryCode":"ESP","country":"Espana"},"comments":"Acceso muy estrecho"},{"name":"El sol","id":2,"geolocation":"22.1234.222","phone":"623 3452 12","address":{"street":"Barriada La Palmera","number":"43","postalCode":"48123","city":"Cuenca","countryCode":"ESP","country":"Espana"},"comments":"horario de 12 a 17"},{"name":"Los robles","id":3,"geolocation":"44.456.33","phone":"624 456 789","address":{"street":"Calle Santa Cecilia","number":"67","postalCode":"68923","city":"Vigo","countryCode":"ESP","country":"Espana"},"comments":""}]}')},20:function(e){e.exports=JSON.parse('{"formed":2021,"active":true,"employees":[{"name":"Jose Maria","surname":"Fernandez Garcia","id":"1ABC","phone":"680 111 222","personalEmail":"jmfernandez@gmail.com","corporateEmail":"jmfernandez@easydelivery.com","iban":"ES04 1234 00 0000 0000000"},{"name":"Laura","surname":"Menendez Perez","id":"8HGJ","phone":"620 333 444","personalEmail":"lauramp@hotmail.com","corporateEmail":"lmenendez@easydelivery.com","iban":"ES08 4444 00 0000 0000123"},{"name":"Lorena","surname":"Luque Ceballo","id":"9QWEC","phone":"630 555 345","personalEmail":"lluqueceballo@yahoo.com","corporateEmail":"lluque@easydelivery.com","iban":"ES23 1234 00 0000 0004444"},{"name":"Antonio","surname":"Vazquez Torres","id":"5ASD","phone":"637 444 234","personalEmail":"antovazquez@gmail.com","corporateEmail":"avazquez@easydelivery.com","iban":"ES40 22 00 0000 1230000"}]}')},21:function(e){e.exports=JSON.parse('{"formed":2021,"active":true,"abattoirs":[{"name":"M. Gil","id":"45234","phone":"624 123 564","address":{"street":"Avenida San Jacinto","number":"-","postalCode":"49234","city":"Madrid","countryCode":"ESP","country":"Espana"},"comments":"Acceso muy estrecho"},{"name":"M. Orihuela","id":"89364","phone":"666 342 564","address":{"street":"Poligono Estrella","number":"543","postalCode":"53467","city":"Gijon","countryCode":"ESP","country":"Espana"},"comments":"-"},{"name":"M. Malaga SA","id":"48756","phone":"640 432 565","address":{"street":"Carretera Las Luces","number":"58","postalCode":"24543","city":"Malaga","countryCode":"ESP","country":"Espana"},"comments":"-"}]}')},29:function(e,a,s){},30:function(e,a,s){},31:function(e,a,s){},38:function(e,a,s){"use strict";s.r(a);s(1);var t=s(18),c=s.n(t),l=s(4),r=(s(29),s(30),s(31),s(3)),i=s(13),n=s(19),d=s(20),o=s(21),j=s(0),b=function(){return Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-black2 ",children:Object(j.jsxs)("div",{className:"container px-5",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:Object(j.jsxs)("div",{class:"header-logo",children:[Object(j.jsxs)("svg",{width:"80",height:"56",viewBox:"0 0 61 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{id:"pig-nose",children:[Object(j.jsx)("g",{id:"nose",filter:"url(#filter0_d)",children:Object(j.jsx)("path",{d:"M57 28.1944C57 38.526 50.3432 43.9195 39.3645 46.3727C34.1634 47.5349 28.7369 47.4982 23.5335 46.3467C12.3938 43.8815 4 38.4897 4 28.1944C4 17.681 10.6744 5.89734 22.383 1.37175C27.2652 -0.515325 32.7915 -0.460614 37.6166 1.56814C48.7052 6.23047 57 17.8297 57 28.1944Z",fill:"#D029D3","fill-opacity":"0.70"})}),Object(j.jsx)("g",{id:"nostril-left",filter:"url(#filter1_d)",children:Object(j.jsx)("path",{d:"M26.3988 24.5055C26.3988 28.9248 23.5033 32.5073 19.9316 32.5073C16.3598 32.5073 13.4643 28.9248 13.4643 24.5055C13.4643 20.0862 16.3598 14.6787 19.9316 14.6787C23.5033 14.6787 26.3988 20.0862 26.3988 24.5055Z",fill:"#FDB9FC","fill-opacity":"0.34"})}),Object(j.jsx)("g",{id:"nostril-right",filter:"url(#filter2_d)",children:Object(j.jsx)("path",{d:"M46.747 24.5055C46.747 28.9248 43.8515 32.5073 40.2798 32.5073C36.708 32.5073 33.8125 28.9248 33.8125 24.5055C33.8125 20.0862 36.708 14.6787 40.2798 14.6787C43.8515 14.6787 46.747 20.0862 46.747 24.5055Z",fill:"#FDB9FC","fill-opacity":"0.34"})})]}),Object(j.jsxs)("defs",{children:[Object(j.jsxs)("filter",{id:"filter0_d",x:"0",y:"0",width:"61",height:"55.2275",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),Object(j.jsxs)("filter",{id:"filter1_d",x:"9.46429",y:"14.6787",width:"20.9345",height:"25.8286",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),Object(j.jsxs)("filter",{id:"filter2_d",x:"29.8125",y:"14.6787",width:"20.9345",height:"25.8286",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})]})]}),Object(j.jsx)("h1",{className:"brand-title",children:"Easy Delivery"})]})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(l.b,{to:"/granjas",className:"nav-link ",children:[" ","Granjas"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(l.b,{to:"/mataderos",className:"nav-link ",children:[" ","Mataderos"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(l.b,{to:"/empleados",className:"nav-link ",children:[" ","Empleados"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(l.b,{to:"/tareas",className:"nav-link ",children:[" ","Tareas"]})})]})})]})})})},m=function(){return Object(j.jsx)("footer",{className:"py-5 bg-black2",children:Object(j.jsx)("div",{className:"container px-4 px-lg-5",children:Object(j.jsxs)("div",{className:"footer-text",children:[Object(j.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Easy Delivery 2021"}),Object(j.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 61 56",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{id:"pig-nose-footer",children:[Object(j.jsx)("g",{id:"nose",filter:"url(#filter0_d)",children:Object(j.jsx)("path",{d:"M57 28.1944C57 38.526 50.3432 43.9195 39.3645 46.3727C34.1634 47.5349 28.7369 47.4982 23.5335 46.3467C12.3938 43.8815 4 38.4897 4 28.1944C4 17.681 10.6744 5.89734 22.383 1.37175C27.2652 -0.515325 32.7915 -0.460614 37.6166 1.56814C48.7052 6.23047 57 17.8297 57 28.1944Z",fill:"#D029D3","fill-opacity":"0.70"})}),Object(j.jsx)("g",{id:"nostril-left-footer",filter:"url(#filter1_d)",children:Object(j.jsx)("path",{d:"M26.3988 24.5055C26.3988 28.9248 23.5033 32.5073 19.9316 32.5073C16.3598 32.5073 13.4643 28.9248 13.4643 24.5055C13.4643 20.0862 16.3598 14.6787 19.9316 14.6787C23.5033 14.6787 26.3988 20.0862 26.3988 24.5055Z",fill:"#FDB9FC","fill-opacity":"0.34"})}),Object(j.jsx)("g",{id:"nostril-right-footer",filter:"url(#filter2_d)",children:Object(j.jsx)("path",{d:"M46.747 24.5055C46.747 28.9248 43.8515 32.5073 40.2798 32.5073C36.708 32.5073 33.8125 28.9248 33.8125 24.5055C33.8125 20.0862 36.708 14.6787 40.2798 14.6787C43.8515 14.6787 46.747 20.0862 46.747 24.5055Z",fill:"#FDB9FC","fill-opacity":"0.34"})})]}),Object(j.jsxs)("defs",{children:[Object(j.jsxs)("filter",{id:"filter0_d",x:"0",y:"0",width:"61",height:"55.2275",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),Object(j.jsxs)("filter",{id:"filter1_d",x:"9.46429",y:"14.6787",width:"20.9345",height:"25.8286",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),Object(j.jsxs)("filter",{id:"filter2_d",x:"29.8125",y:"14.6787",width:"20.9345",height:"25.8286",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[Object(j.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),Object(j.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(j.jsx)("feOffset",{dy:"4"}),Object(j.jsx)("feGaussianBlur",{stdDeviation:"2"}),Object(j.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),Object(j.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),Object(j.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),Object(j.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]})]})]})]})})})},p=function(e){return Object(j.jsx)("div",{className:"card h-100 border-completed card-shadow ",children:Object(j.jsx)(l.b,{className:"card-link",to:"/detalle-tarea",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h3",{className:"card-title",children:["Tarea ",e.completedTask.id]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item  mb-2",children:["Fecha recogida: ",e.completedTask.pickUpDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.completedTask.farm}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Fecha entrega: ",e.completedTask.dropOffDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.completedTask.abattoir})]})]})})},e.completedTask.id)},x=function(e){var a=e.taskData.tasks.map((function(e,a){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(p,{completedTask:e})})}));return Object(j.jsxs)("section",{className:"done-section",children:[Object(j.jsx)("div",{className:"card text-white bg-completed my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Tareas completadas"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a}),Object(j.jsx)("div",{className:"col-md-4 mb-5"})]})},h=function(e){(new Date).toLocaleDateString("es",{year:"numeric",month:"short",day:"numeric"});return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card h-100 border-pending card-shadow",children:Object(j.jsx)(l.b,{className:"card-link",to:"/detalle-tarea",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h3",{className:"card-title",children:["Tarea ",e.pendingTask.id]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item  mb-2",children:["Fecha recogida: ",e.pendingTask.pickUpDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.pendingTask.farm}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Fecha entrega: ",e.pendingTask.dropOffDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.pendingTask.abattoir})]})]})})},e.pendingTask.id)})},u=function(e){var a=e.taskData.tasks.map((function(e,a){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(h,{pendingTask:e})})}));return Object(j.jsxs)("section",{className:"pending-section",children:[Object(j.jsx)("div",{className:"card text-white bg-pending my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Tareas pendientes"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a})]})},O=function(e){return Object(j.jsxs)("main",{className:"container px-4 px-lg-5",children:[Object(j.jsx)(u,{taskData:e.taskData}),Object(j.jsx)(x,{taskData:e.taskData})]})},f=function(){return Object(j.jsx)("main",{className:"page-wrapper bg-gra-02 p-t-100 p-b-100 ",children:Object(j.jsx)("div",{className:"wrapper wrapper--w680",children:Object(j.jsx)("div",{className:"card card-4",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h2",{className:"text-black mb-4",children:"Nueva granja"}),Object(j.jsxs)("form",{id:"contactForm",method:"POST",children:[Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"name",children:"Nombre"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"name"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"address",children:"Direccion"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"address"})]})})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"location",children:"Geolocalizacion"}),Object(j.jsx)("input",{className:"input--style-4",type:"email",id:"location"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"phone",children:"Telefono"}),Object(j.jsx)("input",{className:"input--style-4",type:"phone",id:"phone"})]})})]}),Object(j.jsx)("div",{className:"row row-space",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"info",children:"Comentarios"}),Object(j.jsx)("textarea",{style:{height:"10rem"},className:"input--style-4",type:"text",id:"info"})]})})}),Object(j.jsx)("div",{className:"p-t-15",children:Object(j.jsx)("button",{className:"btn-form btn--radius-2 btn--employee ",type:"submit",children:"Crear"})})]})]})})})})},N=function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card h-100 border-completed",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:e.farmData.name}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item mb-2",children:[" ","Geolocalizacion: ",e.farmData.geolocation]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:[e.farmData.address.street,", numero"," ",e.farmData.address.number," "]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Codigo postal ",e.farmData.address.postalCode]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Codigo postal ",e.farmData.address.city]}),Object(j.jsx)("li",{className:"list-group-item  mb-2",children:e.farmData.phone}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Info adicional: ",e.farmData.comments]})]})]})})})},g=function(e){var a=e.farmData.farms.map((function(e,a){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(N,{farmData:e})})}));return Object(j.jsxs)("main",{className:"container min-vh-100 px-4 px-lg-5 min-h",children:[Object(j.jsx)("div",{className:"card text-white bg-completed my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Granjas"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a}),Object(j.jsx)(l.b,{to:"/nueva-granja",type:"button ",className:"btn btn-add btn-floating btn-warning ",children:Object(j.jsx)("i",{className:"fas plus-icon fa-plus"})})]})},v=function(e){return Object(j.jsx)("div",{className:"card h-100 border-pending",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:e.abattoirData.name}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Direccion: ",e.abattoirData.address.street,", numero"," ",e.abattoirData.address.number," "]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["CP ",e.abattoirData.address.postalCode,","," ",e.abattoirData.address.city]}),Object(j.jsxs)("li",{className:"list-group-item  mb-2",children:["Tlf.: ",e.abattoirData.phone]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Info adicional: ",e.abattoirData.comments]})]})]})})},y=function(e){var a=e.abattoirData.abattoirs.map((function(e){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(v,{abattoirData:e})})}));return Object(j.jsxs)("main",{className:"container min-vh-100 px-4 px-lg-5",children:[Object(j.jsx)("div",{className:"card text-white bg-pending my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Mataderos"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a}),Object(j.jsx)(l.b,{to:"/nuevo-matadero",type:"button",className:"btn btn-add btn-warning btn-center",children:Object(j.jsx)("i",{className:"fas plus-icon fa-plus"})})]})},w=function(){return Object(j.jsx)("main",{className:"page-wrapper bg-gra-04 p-t-100 p-b-100 ",children:Object(j.jsx)("div",{className:"wrapper wrapper--w680",children:Object(j.jsx)("div",{className:"card card-4",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h2",{className:"text-black mb-4",children:"Nuevo matadero"}),Object(j.jsxs)("form",{id:"contactForm",method:"POST",children:[Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"name",children:"Nombre"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"name"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"address",children:"Direccion"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"address"})]})})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"location",children:"Geolocation"}),Object(j.jsx)("input",{className:"input--style-4",type:"email",id:"location"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"phone",children:"Telefono"}),Object(j.jsx)("input",{className:"input--style-4",type:"phone",id:"phone"})]})})]}),Object(j.jsx)("div",{className:"row row-space",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"info",children:"Comentarios"}),Object(j.jsx)("textarea",{style:{height:"10rem"},className:"input--style-4",type:"text",id:"info"})]})})}),Object(j.jsx)("div",{className:"p-t-15",children:Object(j.jsx)("button",{className:"btn-form btn--radius-2 btn--farm ",type:"submit",children:"Crear"})})]})]})})})})},C=function(){return Object(j.jsx)("main",{className:"page-wrapper bg-gra-02 p-t-100 p-b-100 ",children:Object(j.jsx)("div",{className:"wrapper wrapper--w680",children:Object(j.jsx)("div",{className:"card card-4",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h2",{className:"text-black mb-4",children:"Nuevo empleado"}),Object(j.jsxs)("form",{id:"contactForm",method:"POST",children:[Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"name",children:"Nombre"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"name"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"surname",children:"Apellido"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"surmane"})]})})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"email",children:"Email"}),Object(j.jsx)("input",{className:"input--style-4",type:"email",id:"email"})]})}),Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"phone",children:"Telefono"}),Object(j.jsx)("input",{className:"input--style-4",type:"phone",id:"phone"})]})})]}),Object(j.jsx)("div",{className:"row row-space",children:Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"banknumber",children:"Numero de cuenta"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"banknumber"})]})})}),Object(j.jsx)("div",{className:"row row-space",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"info",children:"Comentarios"}),Object(j.jsx)("textarea",{style:{height:"10rem"},className:"input--style-4",type:"text",id:"info"})]})})}),Object(j.jsx)("div",{className:"p-t-15",children:Object(j.jsx)("button",{className:"btn-form btn--radius-2 btn--employee",type:"submit",children:"Crear"})})]})]})})})})},k=function(e){return Object(j.jsx)("div",{className:"card h-100 border-completed",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h3",{className:"card-title",children:[e.employeeData.name," ",e.employeeData.surname]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item  mb-2",children:["Email personal: ",e.employeeData.personalEmail]}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Tlf.: ",e.employeeData.phone,"."]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.employeeData.iban})]})]})})},D=function(e){var a=e.employeeData.employees.map((function(e){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(k,{employeeData:e})})}));return Object(j.jsxs)("main",{className:"container min-vh-100 px-4 px-lg-5",children:[Object(j.jsx)("div",{className:"card text-white bg-completed my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Empleados"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-md-2 mb-3",children:Object(j.jsx)(l.b,{to:"/nuevo-empleado",type:"button",className:"btn btn-add btn-warning btn-center",children:Object(j.jsx)("i",{className:"fa plus-icon fa-plus"})})})})]})},S=function(){return Object(j.jsxs)("main",{className:"container min-vh-100 px-4 px-lg-5",children:[Object(j.jsx)("div",{className:"card text-white bg-task my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Detalle tarea"})})}),Object(j.jsx)("div",{className:"row gx-4 my-5 py-4 justify-content-center",children:Object(j.jsx)("div",{className:"col-6 ",children:Object(j.jsxs)("div",{className:"card h-100 ",children:[Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h3",{className:"card-title",children:"Tarea 1"}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsx)("li",{className:"list-group-item  mb-2",children:"Fecha de recogida"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Fecha de entrega"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Direccion de recogida"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Granja"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Matadero"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Empleado"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Camion"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"N. cerdos"}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:"Tipo de cerdos"})]})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsxs)("div",{className:"d-flex flex-row col-sm-auto",children:[Object(j.jsx)("button",{className:"btn btn-task btn-sm m-1",href:"#!",children:"Editar"}),Object(j.jsx)("button",{className:"btn btn-task btn-sm m-1",href:"#!",children:"Guardar"})]})})]})})})]})},F=function(e){return Object(j.jsxs)("div",{className:"card h-100 border-task",children:[Object(j.jsx)(l.b,{className:"card-link",to:"/detalle-tarea",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("h3",{className:"card-title",children:["Tarea ",e.taskData.id]}),Object(j.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(j.jsxs)("li",{className:"list-group-item  mb-2",children:["Fecha recogida: ",e.taskData.pickUpDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.taskData.farm}),Object(j.jsxs)("li",{className:"list-group-item mb-2",children:["Fecha entrega: ",e.taskData.dropOffDate]}),Object(j.jsx)("li",{className:"list-group-item mb-2",children:e.taskData.abattoir})]})]})}),Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-md-2 mb-3",children:Object(j.jsx)(l.b,{to:"/nueva-tarea",type:"button",className:"btn btn-add btn-warning btn-center",children:Object(j.jsx)("i",{className:"fas plus-icon fa-plus"})})})})]},e.taskData.id)},T=function(e){var a=e.taskData.tasks.map((function(e){return Object(j.jsx)("div",{className:"col-md-4 mb-5",children:Object(j.jsx)(F,{taskData:e})})}));return Object(j.jsxs)("main",{className:"container min-vh-100 px-4 px-lg-5",children:[Object(j.jsx)("div",{className:"card text-white bg-task my-5 py-4 text-center",children:Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h2",{className:"text-black m-0",children:"Tareas"})})}),Object(j.jsx)("div",{className:"row gx-4 gx-lg-5",children:a})]})},B=s(40),M=function(){return Object(j.jsx)("main",{className:"page-wrapper bg-gra-05 p-t-100 p-b-100 ",children:Object(j.jsx)("div",{className:"wrapper wrapper--w680",children:Object(j.jsx)("div",{className:"card-form card-4",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h2",{className:"text-black mb-4",children:"Nueva tarea"}),Object(j.jsxs)("form",{id:"contactForm",method:"POST",children:[Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsxs)("div",{className:"col-2 mb-3",children:[Object(j.jsx)(B.a.Label,{children:"Granja"}),Object(j.jsxs)(B.a.Select,{className:"task-select ","aria-label":"Default select example",children:[Object(j.jsx)("option",{children:"Granjas"}),Object(j.jsx)("option",{value:"Tres Arroyos",children:"Tres Arroyos"}),Object(j.jsx)("option",{value:"El Huerto",children:"El Huerto"}),Object(j.jsx)("option",{value:"Granja el sol",children:"Granja el sol"}),Object(j.jsx)("option",{value:"Granja La Serena",children:"Granja La Serena"})]})]}),Object(j.jsxs)("div",{className:"col-2 mb-3",children:[Object(j.jsx)(B.a.Label,{children:"Matadero"}),Object(j.jsxs)(B.a.Select,{className:"task-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{children:"Mataderos"}),Object(j.jsx)("option",{value:"M. Gil",children:"M. Gil"}),Object(j.jsx)("option",{value:"M. Orihuela",children:"M. Orihuela"}),Object(j.jsx)("option",{value:"M. Malaga SA",children:"M. Malaga SA"})]})]})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsxs)("div",{className:"col-2 mb-3",children:[Object(j.jsx)(B.a.Label,{children:"Empleado"}),Object(j.jsxs)(B.a.Select,{className:"task-select ","aria-label":"Default select example",children:[Object(j.jsx)("option",{disabled:"disabled",selected:"selected",children:"Empleados"}),Object(j.jsx)("option",{value:"J. M. Fernandez Garcia",children:"J. M. Fernandez Garcia"}),Object(j.jsx)("option",{value:"Laura Menenez Perez",children:"Laura Menenez Perez"}),Object(j.jsx)("option",{value:"Lorena Luque Ceballo",children:"Lorena Luque Ceballo"}),Object(j.jsx)("option",{value:"Antonio Vazquez Torres",children:"Antonio Vazquez Torres"})]})]}),Object(j.jsxs)("div",{className:"col-2 mb-3",children:[Object(j.jsx)(B.a.Label,{children:"Camion"}),Object(j.jsxs)(B.a.Select,{className:"task-select ","aria-label":"Default select example",children:[Object(j.jsx)("option",{disabled:"disabled",selected:"selected",children:"Camiones"}),Object(j.jsx)("option",{value:"rigid",children:"Rigido"}),Object(j.jsx)("option",{value:"articulado",children:"Articulado"}),Object(j.jsx)("option",{value:"trailer",children:"Trailer"})]})]})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-2 ",children:Object(j.jsx)("div",{className:"input-group-form ",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"pigsNumber",children:"N. Cerdos"}),Object(j.jsx)("input",{className:"input--style-4",type:"text",id:"pigsNumber",name:"pigsNumber"})]})})}),Object(j.jsxs)("div",{className:"col-2 mb-3",children:[Object(j.jsx)(B.a.Label,{children:"Tipo cerdos"}),Object(j.jsxs)(B.a.Select,{className:"task-select ","aria-label":"Default select example",children:[Object(j.jsx)("option",{disabled:"disabled",selected:"selected",children:"Cerdos"}),Object(j.jsx)("option",{value:"white",children:"Blanco"}),Object(j.jsx)("option",{value:"iberic",children:"Iberico"}),Object(j.jsx)("option",{value:"duroc",children:"Duroc"})]})]})]}),Object(j.jsxs)("div",{className:"row row-space",children:[Object(j.jsx)("div",{className:"col-md-6 mb-3",children:Object(j.jsxs)(B.a.Group,{controlId:"dob",children:[Object(j.jsx)(B.a.Label,{children:"Fecha recogida granja"}),Object(j.jsx)(B.a.Control,{className:"input-select ",type:"date",name:"dob",placeholder:"Fecha"})]})}),Object(j.jsx)("div",{className:"col-md-6 mb-3",children:Object(j.jsxs)(B.a.Group,{controlId:"dob",children:[Object(j.jsx)(B.a.Label,{children:"Fecha entrega matadero"}),Object(j.jsx)(B.a.Control,{className:"input-select ",type:"date",name:"dob",placeholder:"Fecha"})]})})]}),Object(j.jsx)("div",{className:"row row-space",children:Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("label",{className:"label",for:"info",children:"Comentarios"}),Object(j.jsx)("textarea",{style:{height:"10rem"},className:"input--style-4",type:"text",id:"info"})]})})}),Object(j.jsx)("div",{className:"p-t-15",children:Object(j.jsx)("button",{className:"btn-form btn--radius-2 btn--task",type:"submit",children:"Crear"})})]})]})})})})};var G=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)(O,{taskData:i})}),Object(j.jsx)(r.a,{path:"/granjas",children:Object(j.jsx)(g,{farmData:n})}),Object(j.jsx)(r.a,{path:"/tareas",children:Object(j.jsx)(T,{taskData:i})}),Object(j.jsx)(r.a,{path:"/mataderos",children:Object(j.jsx)(y,{abattoirData:o})}),Object(j.jsx)(r.a,{path:"/empleados",children:Object(j.jsx)(D,{employeeData:d})}),Object(j.jsx)(r.a,{path:"/nueva-granja",children:Object(j.jsx)(f,{})}),Object(j.jsx)(r.a,{path:"/nuevo-matadero",children:Object(j.jsx)(w,{})}),Object(j.jsx)(r.a,{path:"/nuevo-empleado",children:Object(j.jsx)(C,{})}),Object(j.jsx)(r.a,{path:"/nueva-tarea",children:Object(j.jsx)(M,{})}),Object(j.jsx)(r.a,{path:"/detalle-tarea",children:Object(j.jsx)(S,{})})]}),Object(j.jsx)(m,{})]})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,l=a.getLCP,r=a.getTTFB;s(e),t(e),c(e),l(e),r(e)}))};c.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.14180035.chunk.js.map