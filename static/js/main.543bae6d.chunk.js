(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{13:function(e,a,t){e.exports=t.p+"static/media/map-pin.284d1ea8.svg"},37:function(e,a,t){e.exports=t.p+"static/media/logo-text.1653c647.svg"},39:function(e,a,t){e.exports=t(73)},44:function(e,a,t){},50:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),o=t(12),m=t(3),i=(t(44),t(8)),s=t(37),u=t.n(s);var p=function(){return l.a.createElement("div",{id:"page-landing"},l.a.createElement("div",{className:"content-wrapper"},l.a.createElement("img",{src:u.a,alt:"happy"}),l.a.createElement("main",null,l.a.createElement("h1",null,"Leve a felicidade para o mundo"),l.a.createElement("p",null,"Visite orfanatos e mude o dia de muitas crian\xe7as.")),l.a.createElement("div",{className:"location"},l.a.createElement("strong",null,"Curitiba"),l.a.createElement("span",null,"Paran\xe1")),l.a.createElement(o.b,{to:"/nlw-happy/app",className:"enter-app"},l.a.createElement(i.b,{size:26,color:"rgba(0,0,0,0.6)"}))))},E=t(15),d=t(13),h=t.n(d),g=t(75),b=t(76),f=t(74),v=t(77),N=(t(50),t(6)),y=t.n(N).a.icon({iconUrl:h.a,iconSize:[58,68],iconAnchor:[29,68],popupAnchor:[170,2]}),w=t(38),k=t.n(w).a.create({baseURL:"https://nlw-happy.herokuapp.com"});var F=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){k.get("orphanages").then((function(e){r(e.data)}))}),[]),l.a.createElement("div",{id:"page-map"},l.a.createElement("aside",null,l.a.createElement("header",null,l.a.createElement("img",{src:h.a,alt:""}),l.a.createElement("h2",null,"Escolha um orfanato no mapa"),l.a.createElement("p",null,"Muitas crian\xe7as est\xe3o esperando a sua visita :)")),l.a.createElement("footer",null,l.a.createElement("strong",null,"Curitiba"),l.a.createElement("span",null,"Paran\xe1"))),l.a.createElement(g.a,{center:[-25.4669495,-49.2334783],zoom:15,style:{width:"100%",height:"100%"}},l.a.createElement(b.a,{url:"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return l.a.createElement(f.a,{key:e.id,position:[e.latitude,e.longitude],icon:y},l.a.createElement(v.a,{closeButton:!1,minWidth:240,maxWidth:240,className:"map-popup"},e.name,l.a.createElement(o.b,{to:"/nlw-happy/orphanage/".concat(e.id)},l.a.createElement(i.b,{size:20,color:"#FFF"}))))}))),l.a.createElement(o.b,{to:"/nlw-happy/orphanage/create",className:"create-orphanage"},l.a.createElement(i.e,{size:12,color:"#FFF"})))};t(68),t(69);function z(){var e=Object(m.f)().goBack;return l.a.createElement("aside",{className:"app-sidebar"},l.a.createElement("img",{src:h.a,alt:"Happy"}),l.a.createElement("footer",null,l.a.createElement("button",{type:"button",onClick:e},l.a.createElement(i.a,{size:24,color:"#FFF"}))))}function x(){var e=Object(m.g)(),a=Object(n.useState)(),t=Object(E.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(0),s=Object(E.a)(o,2),u=s[0],p=s[1];return Object(n.useEffect)((function(){k.get("orphanages/".concat(e.id)).then((function(e){c(e.data)}))}),[e.id]),r?l.a.createElement("div",{id:"page-orphanage"},l.a.createElement(z,null),l.a.createElement("main",null,l.a.createElement("div",{className:"orphanage-details"},l.a.createElement("img",{src:r.images[u].url,alt:r.name}),l.a.createElement("div",{className:"images"},r.images.map((function(e,a){return l.a.createElement("button",{key:e.id,className:u===a?"active":"",type:"button",onClick:function(){p(a)}},l.a.createElement("img",{key:e.id,src:e.url,alt:r.name}))}))),l.a.createElement("div",{className:"orphanage-details-content"},l.a.createElement("h1",null,r.name),l.a.createElement("p",null,r.about),l.a.createElement("div",{className:"map-container"},l.a.createElement(g.a,{center:[r.latitude,r.longitude],zoom:16,style:{width:"100%",height:280},dragging:!1,touchZoom:!1,zoomControl:!1,scrollWheelZoom:!1,doubleClickZoom:!1},l.a.createElement(b.a,{url:"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(f.a,{interactive:!1,icon:y,position:[r.latitude,r.longitude]})),l.a.createElement("footer",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/dir/?api=1&destination=".concat(r.latitude,",").concat(r.longitude)},"Ver rotas no Google Maps"))),l.a.createElement("hr",null),l.a.createElement("h2",null,"Instru\xe7\xf5es para visita"),l.a.createElement("p",null,r.instructions),l.a.createElement("div",{className:"open-details"},l.a.createElement("div",{className:"hour"},l.a.createElement(i.c,{size:32,color:"#15B6D6"}),"Segunda \xe0 Sexta ",l.a.createElement("br",null),r.opening_hours),r.open_on_weekends?l.a.createElement("div",{className:"open-on-weekends"},l.a.createElement(i.d,{size:32,color:"#39CC83"}),"Atendemos ",l.a.createElement("br",null),"fim de semana"):l.a.createElement("div",{className:"open-on-weekends dont-open"},l.a.createElement(i.d,{size:32,color:"#FF669D"}),"N\xe3o atendemos ",l.a.createElement("br",null),"fim de semana")))))):l.a.createElement("p",null,"Carregando ... ")}t(70);function j(){return l.a.createElement("div",{id:"page-create-orphanage"},l.a.createElement(z,null),l.a.createElement("main",null,l.a.createElement("form",{className:"create-orphanage-form"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Dados"),l.a.createElement(g.a,{center:[-25.4669495,-49.2334783],style:{width:"100%",height:280},zoom:15},l.a.createElement(b.a,{url:"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(f.a,{interactive:!1,icon:y,position:[-25.4669495,-49.2334783]})),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"name"},"Nome"),l.a.createElement("input",{id:"name"})),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"about"},"Sobre ",l.a.createElement("span",null,"M\xe1ximo de 300 caracteres")),l.a.createElement("textarea",{id:"name",maxLength:300})),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"images"},"Fotos"),l.a.createElement("div",{className:"uploaded-image"}),l.a.createElement("button",{className:"new-image"},l.a.createElement(i.e,{size:24,color:"#15b6d6"})))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Visita\xe7\xe3o"),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"instructions"},"Instru\xe7\xf5es"),l.a.createElement("textarea",{id:"instructions"})),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"opening_hours"},"Nome"),l.a.createElement("input",{id:"opening_hours"})),l.a.createElement("div",{className:"input-block"},l.a.createElement("label",{htmlFor:"open_on_weekends"},"Atende fim de semana"),l.a.createElement("div",{className:"button-select"},l.a.createElement("button",{type:"button",className:"active"},"Sim"),l.a.createElement("button",{type:"button"},"N\xe3o")))),l.a.createElement("button",{className:"confirm-button",type:"submit"},"Confirmar"))))}var C=function(){return l.a.createElement(o.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/nlw-happy",exact:!0,component:p}),l.a.createElement(m.a,{path:"/nlw-happy/app",component:F}),l.a.createElement(m.a,{path:"/nlw-happy/orphanage/create",component:j}),l.a.createElement(m.a,{path:"/nlw-happy/orphanage/:id",component:x})))};t(71),t(72);var O=function(){return l.a.createElement(C,null)};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.543bae6d.chunk.js.map