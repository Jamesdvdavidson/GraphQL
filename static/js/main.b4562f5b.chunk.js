(this["webpackJsonpgraphql-website"]=this["webpackJsonpgraphql-website"]||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),i=a(26),s=a(161),o=a(163),l=a(164),d=a(66),j=a(166),b=a(165),h=a(1),u=Object(s.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,cursor:"pointer"},buttonText:{textTransform:"none",marginLeft:3,textDecoration:"none"}}}));function v(){var e=u();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(o.a,{position:"static",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(b.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"stretch",children:[Object(h.jsx)(b.a,{item:!0,xs:8,sm:8,md:8,lg:8,children:Object(h.jsx)(d.a,{onClick:function(){return window.location.hash=""},variant:"h6",className:e.title,style:{float:"left"},children:"Open Referral UK - Services for older people"})},"NavBarTitle"),Object(h.jsx)(b.a,{item:!0,xs:4,sm:4,md:4,lg:4,children:Object(h.jsx)("div",{style:{float:"right"},children:Object(h.jsxs)(b.a,{container:!0,spacing:0,direction:"row",children:[Object(h.jsx)(b.a,{item:!0,xs:"auto",sm:"auto",md:"auto",lg:"auto",children:Object(h.jsx)(i.b,{to:"/",children:Object(h.jsx)(j.a,{variant:"contained",className:e.buttonText,color:"inherit",style:{float:"right"},children:"Home"})})},"NavBarButtonsHome"),Object(h.jsx)(b.a,{item:!0,xs:"auto",sm:"auto",md:"auto",lg:"auto",children:Object(h.jsx)(i.b,{to:"/services/",children:Object(h.jsx)(j.a,{variant:"contained",className:e.buttonText,color:"inherit",children:"Services"})})},"NavBarButtonsServices"),Object(h.jsx)(b.a,{item:!0,xs:"auto",sm:"auto",md:"auto",lg:"auto",children:Object(h.jsx)(i.b,{to:"/about/",children:Object(h.jsx)(j.a,{variant:"contained",className:e.buttonText,color:"inherit",children:"About"})})},"NavBarButtonsAbout")]})})},"NavBarButtons")]})})})})}var m,p,y=a(15),g=a(167),x=a(168),O=a(169),C=a.p+"static/media/Detailed Project Proposal and initial literature review.ba82b46d.pdf",f=function(){return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(g.a,{maxWidth:"false",style:{marginTop:5},children:Object(h.jsx)(x.a,{variant:"outlined",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Open Referral UK - Services for older people"}),Object(h.jsx)(d.a,{variant:"h5",children:"Welcome"}),Object(h.jsx)(d.a,{variant:"body1",children:"This is a demonstration tool to demonstrate the use of the GraphQL API in a client website, taking advantage of GraphQL to fetch only the data need for each page."}),Object(h.jsx)(d.a,{variant:"h5",children:"Data"}),Object(h.jsx)(d.a,{variant:"body1",children:"The data for the app comes from an Open Referral UK Pilot API, containing data about services available in the Bristol area."}),Object(h.jsx)(d.a,{variant:"body1",children:"This data was provided by Bristol City Council a while ago to Open Referral UK, this data is demonstration purposes only."}),Object(h.jsx)(d.a,{variant:"body1",children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://openreferraluk.org/",children:"Open Referral UK"})}),Object(h.jsx)(d.a,{variant:"body1",children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:"https://api.porism.com/ServiceDirectoryService/swagger-ui.html",children:"Documentation"})}),Object(h.jsx)(d.a,{variant:"body1",children:"This site was built as a part of my final year dissertation."}),Object(h.jsxs)(d.a,{variant:"body1",children:["My project proposal can be found\xa0",Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:C,children:"here"}),"."]}),Object(h.jsx)(d.a,{variant:"h5",children:"Start"}),Object(h.jsx)(i.b,{to:"/services/",children:Object(h.jsx)(j.a,{variant:"contained",style:{textTransform:"none"},children:"Services"})})]})})})},"Home")},S=a(18),_=a(74),w=a(48),B=new w.InMemoryCache,P=new w.ApolloClient({cache:B,uri:"https://davids44-graphql.herokuapp.com/"}),A=a(170),k=a(188),T=a(171),I=a(172),F=function(e){var t=[e.loc[0],e.loc[1]];return Object(h.jsxs)(A.a,{center:t,zoom:11,scrollWheelZoom:!1,style:{height:300},children:[Object(h.jsx)(k.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(h.jsx)(T.a,{position:t,children:e.hasOwnProperty("name")&&""!==e.name?Object(h.jsx)(I.a,{children:e.name}):null})]})},L=function(e){var t=e.data,a=[];return t.hasOwnProperty("service_at_locations")&&0!==t.service_at_locations.length?Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Location"}),t.service_at_locations.map((function(e){e.location.latitude&&e.location.longitude&&a.push([e.location.latitude,e.location.longitude]);var t=[];return e.location.hasOwnProperty("physical_addresses")&&e.location.physical_addresses.length&&(t=e.location.physical_addresses.map((function(e){var t=[];return t.push(e.hasOwnProperty("address_1")&&""!==e.address_1?e.address_1:null),t.push(e.hasOwnProperty("city")&&""!==e.city?e.city:null),t.push(e.hasOwnProperty("country")&&""!==e.country?e.country:null),t.push(e.hasOwnProperty("state_province")&&""!==e.state_province?e.state_province:null),t.push(e.hasOwnProperty("postal_code")&&""!==e.postal_code?e.postal_code:null),t}))),e.location.hasOwnProperty("physical_addresses")?Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h5",children:"Address"}),Object(h.jsx)("div",{children:t.map((function(e){return e.map((function(e,t){return Object(h.jsx)(d.a,{variant:"body1",children:e},t)}))}))},"Addresses"),Object(h.jsx)("div",{},"map")]},e.id):null})),a!==[]?Object(h.jsx)(F,{loc:a[0],name:t.name}):null]}):null},z=a(173),N=a(174),H=a(175),W=a(177),q=a(176),G=function(e){var t=e.data;return Object(h.jsx)(z.a,{dense:!0,children:Object(h.jsx)(b.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"stretch",children:t.hasOwnProperty("service_taxonomys")&&0!==t.service_taxonomys.length?t.service_taxonomys.map((function(e,t){return Object(h.jsx)(b.a,{item:!0,xs:"auto",sm:"auto",md:"auto",lg:"auto",children:Object(h.jsxs)(N.a,{children:[Object(h.jsx)(H.a,{style:{minWidth:10},children:Object(h.jsx)(q.a,{})}),Object(h.jsx)(W.a,{primary:e.hasOwnProperty("taxonomy")?e.taxonomy.name:null})]})},t)})):null})})},$=function(e){var t=e.data;return Object(h.jsxs)(O.a,{style:{height:"auto"},children:[Object(h.jsx)(d.a,{color:"textSecondary",gutterBottom:!0,children:t.id}),Object(h.jsx)(d.a,{variant:"h4",component:"h2",children:t.name}),Object(h.jsx)(d.a,{variant:"body2",component:"p",children:t.description}),Object(h.jsx)(G,{data:t})]})},R=function(e){var t=e.data;return t.hasOwnProperty("contacts")&&0!==t.contacts.length?Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Contact Information"}),0!==t.contacts.length&&t.contacts.map((function(e,t){return Object(h.jsxs)(c.a.Fragment,{children:[e.name||e.title?Object(h.jsxs)(d.a,{variant:"body2",children:["Name: ",[e.name,e.title].join(" ")]}):null,e.hasOwnProperty("phones")&&e.phones.map((function(e,t){return Object(h.jsxs)(d.a,{variant:"body2",children:["Number: ",e.number]},"phone".concat(t))}))]},"Contact".concat(t))}))]}):null},D=function(e){var t=e.data;return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{color:"textSecondary",gutterBottom:!0,children:t.organization.id}),Object(h.jsx)(d.a,{variant:"h5",children:"Organization"}),t.organization.name===t.organization.description?Object(h.jsx)(d.a,{variant:"body2",children:t.organization.name}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.a,{variant:"body2",children:t.organization.name}),Object(h.jsx)(d.a,{variant:"body2",children:t.organization.description})]}),Object(h.jsx)(d.a,{variant:"body2",children:t.organization.email}),Object(h.jsx)(d.a,{variant:"body2",children:""!==t.organization.url?Object(h.jsx)("a",{href:t.organization.url,target:"_blank",rel:"noreferrer noopener",children:t.organization.url}):null})]})},t.organization.id)},M=function(e){var t=e.data;return t.hasOwnProperty("eligibilitys")&&0!==t.eligibilitys.length&&Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Eligibility"}),t.eligibilitys.map((function(e,t){return Object(h.jsxs)(c.a.Fragment,{children:[e.hasOwnProperty("minimum_age")&&null!==e.minimum_age&&Object(h.jsxs)(d.a,{variant:"body2",children:["Minimum age: ",e.minimum_age]},"min".concat(t)),e.hasOwnProperty("maximum_age")&&null!==e.maximum_age&&Object(h.jsxs)(d.a,{variant:"body2",children:["Maximum age: ",e.maximum_age]},"max".concat(t))]},t)}))]},"eligibilitys")},E=function(e){var t=e.data;return t.hasOwnProperty("fees")&&""!==t.fees?Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Fees"}),Object(h.jsx)(d.a,{variant:"body2",children:t.fees})]}):null},K=function(e){var t=e.data;return t.hasOwnProperty("service_areas")&&0!==t.service_areas.length?Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Service Areas"}),t.service_areas.map((function(e,t){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h5",children:"Area"}),Object(h.jsx)(d.a,{variant:"body2",children:e.hasOwnProperty("service_area")?e.service_area:""}),e.hasOwnProperty("uri")&&""!==e.uri?Object(h.jsx)(d.a,{variant:"body2",children:Object(h.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:e.uri,children:e.uri})}):null]},t)}))]}):null},Q=a(64),U=function(e){var t=e.data,a=[];if(console.log(t.service_at_locations),t.hasOwnProperty("service_at_locations")&&0!==t.service_at_locations.length){var n,c=Object(Q.a)(t.service_at_locations);try{for(c.s();!(n=c.n()).done;){var r=n.value;if(r.hasOwnProperty("regular_schedule")&&0!==r.regular_schedule.length){var i,s=Object(Q.a)(r.regular_schedule);try{for(s.s();!(i=s.n()).done;){var o=i.value;o.hasOwnProperty("description")&&""!==o.description&&a.push(o.description)}}catch(l){s.e(l)}finally{s.f()}}}}catch(l){c.e(l)}finally{c.f()}}return 0!==a.length?Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h4",children:"Times"}),a.map((function(e,t){return Object(h.jsx)(d.a,{variant:"body2",children:e},t)}))]}):null},J=Object(s.a)({root:{minWidth:275,height:"100%"},title:{fontSize:14},pos:{marginBottom:12},fullHeightCard:{height:"100%"},buttonText:{textTransform:"none"}}),Z=function(e){var t=e.data,a=J();return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsxs)(g.a,{style:{paddingTop:5},children:[Object(h.jsx)(x.a,{className:a.root,variant:"outlined",children:Object(h.jsxs)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:[Object(h.jsxs)(b.a,{item:!0,xs:12,sm:6,md:6,children:[Object(h.jsx)($,{data:t}),Object(h.jsx)(R,{data:t}),Object(h.jsx)(M,{data:t}),Object(h.jsx)(U,{data:t}),Object(h.jsx)(K,{data:t}),Object(h.jsx)(E,{data:t})]},t.id),Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,children:Object(h.jsx)(L,{data:t})},"location")]})}),Object(h.jsx)(x.a,{variant:"outlined",style:{marginTop:5},children:Object(h.jsx)(D,{data:t})})]})},t.id)},V=function(e){var t=Object(w.gql)(m||(m=Object(_.a)(["\n    query service($id: String!) {\n        service(id: $id) {\n        accreditations\n        assured_date\n        attending_access\n        attending_type\n        contacts {\n            id\n            name\n            phones {\n                id\n                number\n            }\n            title\n        }\n        cost_options {\n            amount\n            amount_description\n            id\n            option\n            valid_from\n            valid_to\n        }\n        deliverable_type\n        description\n        eligibilitys {\n            eligibility\n            id\n            maximum_age\n            minimum_age\n            taxonomys {\n                id\n                name\n                parent {\n                    id\n                    name\n                    parent {\n                        id\n                        name\n                        vocabulary\n                    }\n                    vocabulary\n                }\n                vocabulary\n            }\n        }\n        email\n        fees\n        id\n        languages {\n            id\n            language\n        }\n        name\n        organization {\n            description\n            email\n            id\n            logo\n            name\n            uri\n            url\n        }\n        regular_schedules {\n            byday\n            bymonthday\n            closes_at\n            description\n            dtstart\n            freq\n            id\n            interval\n            opens_at\n            valid_from\n            valid_to\n        }\n        service_areas {\n            service_area\n            uri\n        }\n        service_at_locations {\n            id\n            location {\n                description\n                id\n                latitude\n                longitude\n                name\n                physical_addresses {\n                    address_1\n                    city\n                    country\n                    id\n                    postal_code\n                    state_province\n                }\n            }\n            regular_schedule {\n                byday\n                bymonthday\n                closes_at\n                description\n                dtstart\n                freq\n                id\n                interval\n                opens_at\n                valid_from\n                valid_to\n            }\n        }\n        service_taxonomys {\n            id\n            taxonomy {\n                id\n                name\n                parent {\n                    id\n                    name\n                    vocabulary\n                }\n                vocabulary\n            }\n        }\n        status\n        url\n        }\n    }\n    "]))),a=Object(n.useState)({}),c=Object(S.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(0),o=Object(S.a)(s,2),l=o[0],d=o[1];return P.query({query:t,variables:{id:e.match.params.id}}).then((function(e){i(e.data.service),d(1)})),Object(h.jsx)(h.Fragment,{children:l?Object(h.jsx)(Z,{data:r}):Object(h.jsx)("p",{children:"Loading"})})},Y=a(178),X=Object(s.a)({root:{minWidth:275,height:"100%"},title:{fontSize:14},pos:{marginBottom:12},fullHeightCard:{height:"100%"},buttonText:{textTransform:"none"}}),ee=function(e){var t,a,n=e.row,c=X();return Object(h.jsxs)(x.a,{className:c.root,variant:"outlined",children:[Object(h.jsxs)(O.a,{style:{height:"auto"},children:[Object(h.jsx)(d.a,{className:c.title,color:"textSecondary",gutterBottom:!0,children:n.id}),Object(h.jsx)(d.a,{variant:"h5",component:"h2",children:n.name}),Object(h.jsx)(d.a,{variant:"body2",component:"p",children:(t=n.description,a=200,t.length<=a?t:"".concat(t.slice(0,a),"..."))})]}),Object(h.jsx)(Y.a,{style:{bottom:0},children:Object(h.jsx)(i.b,{to:"/services/".concat(n.id),children:Object(h.jsx)(j.a,{className:c.buttonText,size:"small",children:"Learn more"})})})]})},te=a(78),ae=a(25),ne=a(180),ce=a(181),re=a(186),ie=a(185),se=a(182),oe=a(179),le=a(184),de=function(e){var t=e.state,a=e.handleChange,n=e.name,c=e.label;return Object(h.jsx)(oe.a,{style:{marginBottom:0},control:Object(h.jsx)(le.a,{checked:t[n],onChange:a,name:n,color:"primary"}),label:c},n)},je=a(55),be=a(28),he=Object(be.map)(je.Services.taxonomies,"name").sort(),ue=a(56),ve=a.n(ue),me=function(e){var t=e.setWhere,a=e.setIsLoaded,n=e.postcode,r=e.proximity,i={};he.map((function(e){return i["checked".concat(e)]=!1}));var s,o=[],l=[],u=[],v=[],m=c.a.useState(i),p=Object(S.a)(m,2),y=p[0],g=p[1],C=function(e){g(Object(ae.a)(Object(ae.a)({},y),{},Object(te.a)({},e.target.name,e.target.checked)))},f=Object(Q.a)(he.entries());try{for(f.s();!(s=f.n()).done;){var _=Object(S.a)(s.value,2),w=_[0],B=_[1],P=Object(be.find)(je.Services.taxonomies,{name:B}).category;"Services"===P&&l.push(Object(h.jsx)(de,{state:y,handleChange:C,name:"checked".concat(B),label:"".concat(B)},"".concat(P).concat(w))),"Coping"===P&&v.push(Object(h.jsx)(de,{state:y,handleChange:C,name:"checked".concat(B),label:"".concat(B)},"".concat(P).concat(w))),"Activities"===P&&u.push(Object(h.jsx)(de,{state:y,handleChange:C,name:"checked".concat(B),label:"".concat(B)},"".concat(P).concat(w))),"Socialising"===P&&o.push(Object(h.jsx)(de,{state:y,handleChange:C,name:"checked".concat(B),label:"".concat(B)},"".concat(P).concat(w)))}}catch(A){f.e(A)}finally{f.f()}return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(ne.a,{row:!0,children:Object(h.jsx)(d.a,{variant:"h6",children:"How far would you travel?"})}),Object(h.jsxs)(ne.a,{row:!0,children:[Object(h.jsxs)(ce.a,{children:[Object(h.jsx)(re.a,{htmlFor:"input-postal-code",children:"Postal Code"}),Object(h.jsx)(ie.a,{id:"input-postal-code",inputRef:n,"aria-describedby":"my-helper-text",autoComplete:"off"}),Object(h.jsx)(se.a,{id:"my-helper-text",children:"e.g. BS2 0PH"})]}),"\xa0",Object(h.jsxs)(ce.a,{children:[Object(h.jsx)(re.a,{htmlFor:"input-proximity",children:"Proximity"}),Object(h.jsx)(ie.a,{id:"input-proximity",inputRef:r,type:"number","aria-describedby":"my-helper-text",autoComplete:"off"}),Object(h.jsx)(se.a,{id:"my-helper-text",children:"Distance in Km"})]})]}),Object(h.jsx)(ne.a,{row:!0,children:Object(h.jsx)(d.a,{variant:"h6",children:"Which of these are you interested in?"})}),Object(h.jsx)(ne.a,{row:!0,children:Object(h.jsxs)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:[Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(h.jsx)(x.a,{variant:"outlined",style:{height:"100%",backgroundColor:"#e9f5de"},children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h6",children:Object(h.jsx)("b",{children:"Services"})}),l]})})},"ServicesFilters"),Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(h.jsx)(x.a,{variant:"outlined",style:{height:"100%",backgroundColor:"#def5ea"},children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h6",children:Object(h.jsx)("b",{children:"Activities"})}),u]})})},"ActivitiesFilters"),Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(h.jsx)(x.a,{variant:"outlined",style:{height:"100%",backgroundColor:"#e6def5"},children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h6",children:Object(h.jsx)("b",{children:"Socialising"})}),o]})})},"SocialisingFilters"),Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,lg:3,children:Object(h.jsx)(x.a,{variant:"outlined",style:{height:"100%",backgroundColor:"#f3efd3"},children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"h6",children:Object(h.jsx)("b",{children:"Coping"})}),v]})})},"CopingFilters")]})}),Object(h.jsxs)(ne.a,{row:!0,style:{marginTop:5},children:[Object(h.jsx)(ce.a,{style:{marginBottom:10},children:Object(h.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){if(console.log(!ve()(n.current.value)),""===n.current.value||ve()(n.current.value)){a(0);var e=Object(be.keys)(Object(be.pickBy)(y)).map((function(e){return e.substring(7)}));if(0!==e.length){var c={and:[{vocabulary:"BCC Age Groups",taxonomy_id:"bccagegroup:18"},{or:e.map((function(e){return{vocabulary:Object(be.find)(je.Services.taxonomies,{name:e}).vocabulary,taxonomy_id:Object(be.find)(je.Services.taxonomies,{name:e}).id}}))}]};""!==n.current.value&&"0"!==r.current.value&&""!==r.current.value&&(c.and[0].postcode=n.current.value,c.and[0].proximity=1e3*parseInt(r.current.value)),t(c)}else t({}),a(2)}else alert("Invalid postcode")},children:"Submit"})}),Object(h.jsx)(ce.a,{style:{marginBottom:10,marginLeft:5},children:Object(h.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){window.location.reload()},children:"Clear"})})]})]},"Filters")},pe=function(e){return Object(h.jsx)(g.a,{disableGutters:!1,maxWidth:!1,children:Object(h.jsx)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(h.jsx)(x.a,{variant:"outlined",children:Object(h.jsx)(O.a,{children:Object(h.jsx)(d.a,{variant:"body2",children:e.msg})})})},"Error")})})},ye=a(183),ge=a(189),xe=a(20),Oe=function(e){var t=e.data,a=e.postcode,c=e.proximity,r=Object(n.useState)(""!==a&&ve()(a)?null:new xe.LatLng(51.454649,-2.587954)),s=Object(S.a)(r,2),o=s[0],l=s[1],j=Object(n.useState)(""!==a&&ve()(a)?0:1),b=Object(S.a)(j,2),u=b[0],v=b[1];0===u&&null===o&&fetch("https://api.postcodes.io/postcodes/".concat(a),{cache:"force-cache"}).then((function(e){return e.json().then((function(e){console.log(e),l(new xe.LatLng(parseFloat(e.result.latitude),parseFloat(e.result.longitude))),v(1)}))}));var m=t.map((function(e){return e.hasOwnProperty("service_at_locations")&&0!==e.service_at_locations.length?e.service_at_locations.map((function(t){return t.hasOwnProperty("location")&&null!==t.location.latitude&&null!==t.location.longitude?{id:e.id,name:e.name,lat:t.location.latitude,long:t.location.longitude}:null})):null}));Object(be.pull)(m,null),Object(be.pull)(m,void 0);var p=Object(be.flatten)(m).map((function(e,t){return Object(h.jsx)(T.a,{position:new xe.LatLng(e.lat,e.long),children:Object(h.jsx)(I.a,{children:Object(h.jsx)(i.b,{to:"/services/".concat(e.id),children:Object(h.jsx)(d.a,{variant:"body2",children:e.name})})})},t)}));return u?Object(h.jsxs)(A.a,{center:o,zoom:11,scrollWheelZoom:!0,style:{height:300},children:[Object(h.jsx)(k.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),p,c?Object(h.jsx)(ye.a,{children:Object(h.jsx)(ge.a,{center:o,pathOptions:{fillColor:"blue"},radius:1e3*c})}):null]}):null},Ce=function(e){var t={where:e.where,per_page:300,page:1};return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(d.a,{variant:"h6",children:"GraphQL Query"}),Object(h.jsx)(d.a,{variant:"body2",style:{whiteSpace:"break-spaces"},children:"query services ($page: Int, $per_page: Int, $where: Object) {\n            services (page: $page, per_page: $per_page, where: $where) {\n                services {\n                  id\n                  name\n                  description\n                  service_at_locations {\n                    location {\n                      latitude\n                      longitude\n                    }\n                  }\n                }\n            }\n        }"}),Object(h.jsx)(d.a,{variant:"h6",children:"Arguments"}),Object(h.jsx)(d.a,{variant:"body2",style:{whiteSpace:"break-spaces"},children:JSON.stringify(t,null,"\t")})]})},fe=function(){var e,t,a=Object(w.gql)(p||(p=Object(_.a)(["\n        query services ($page: Int, $per_page: Int, $where: Object) {\n            services (page: $page, per_page: $per_page, where: $where) {\n                page {\n                    first\n                    last\n                    number\n                    size\n                    totalElements\n                    totalPages\n                }\n                services {\n                  id\n                  name\n                  description\n                  service_at_locations {\n                    location {\n                      latitude\n                      longitude\n                    }\n                  }\n                }\n            }\n        }"]))),c=Object(n.useState)([]),r=Object(S.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(2),l=Object(S.a)(o,2),j=l[0],u=l[1],v=Object(n.useState)({}),m=Object(S.a)(v,2),y=m[0],x=m[1],O=Object(n.useRef)(null),C=Object(n.useRef)(null);return e=a,t={result:[i,s],isLoaded:[j,u],where:[y,x]},Object(be.isEmpty)(t.where[0])||t.where.hasOwnProperty("and")&&t.where[0].and.hasOwnProperty("or")&&0===t.where[0].and.or.length?2!==t.isLoaded[0]&&t.isLoaded[1](2):P.query({query:e,variables:{per_page:100,page:1,where:t.where[0]}}).then((function(e){t.result[1](e.data.services.services),t.isLoaded[1](1)})),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(g.a,{disableGutters:!1,maxWidth:!1,children:[Object(h.jsx)(d.a,{variant:"h3",children:"Services"}),Object(h.jsx)(me,{setWhere:x,setIsLoaded:u,postcode:O,proximity:C})]}),Object(h.jsx)("div",{children:1===j?Object(h.jsx)(g.a,{disableGutters:!1,maxWidth:!1,children:Object(h.jsxs)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:[Object(h.jsx)(b.a,{item:!0,xs:12,sm:12,md:8,lg:9,children:Object(h.jsx)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:i.map((function(e){return Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(h.jsx)(ee,{row:e})},e.id)}))})}),Object(h.jsxs)(b.a,{item:!0,xs:12,sm:12,md:4,lg:3,children:[Object(h.jsx)(Oe,{data:i,postcode:O.current.value,proximity:C.current.value}),Object(h.jsx)(Ce,{where:y})]})]})}):0===j?Object(h.jsx)(pe,{msg:"Loading"}):Object(h.jsx)(pe,{msg:"Please select some tags"})})]})},Se=function(){return Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{exact:!0,path:"/services",component:fe}),Object(h.jsx)(y.a,{path:"/services/:id",component:V})]})},_e=Object(s.a)({card:{BackgroundColor:"lavenderblush"},root:{marginTop:5}}),we=function(){var e=_e();return Object(h.jsx)(g.a,{className:e.root,disableGutters:!1,maxWidth:!1,children:Object(h.jsx)(b.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"stretch",children:Object(h.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(h.jsx)(x.a,{className:e.card,variant:"outlined",children:Object(h.jsxs)(O.a,{children:[Object(h.jsx)(d.a,{variant:"body2",children:"GraphQL API Demonstration site"}),Object(h.jsx)(d.a,{variant:"body2",children:"James Davidson"})]})})},"About")})})},Be=function(){return Object(h.jsx)("main",{children:Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{exact:!0,path:"/",component:f}),Object(h.jsx)(y.a,{path:"/services",component:Se}),Object(h.jsx)(y.a,{path:"/about",component:we})]})})},Pe=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)(Be,{})]})};Object(r.render)(Object(h.jsx)(i.a,{children:Object(h.jsx)(Pe,{})}),document.getElementById("root"))},55:function(e,t){t.Services={taxonomies:[{id:"bccservicetype:349",name:"Tea / Coffee",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:156",name:"Yoga / Meditation",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:15",name:"Independent Living",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:14",name:"Housing",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:88",name:"Mobility Aids",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:154",name:"Home Care",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:159",name:"Music",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:41",name:"Clubs / Classes",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:10",name:"Befriending",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:21",name:"Arts / Crafts",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:104",name:"Isolation",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:167",name:"Handyman",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:72",name:"Benefits",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:43",name:"Dancing",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:48",name:"Respite",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:13",name:"Dementia",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:64",name:"Day Care",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:17",name:"Volunteering",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:11",name:"Chiropodist / Foot Care",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:87",name:"Residential Home",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:90",name:"Food / Meals / Cooking",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:189",name:"Walking",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:16",name:"Shopping",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:201",name:"Singing",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:120",name:"Bereavement / Grief",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:221",name:"Crime",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:158",name:"Swimming",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:118",name:"Visual Impairment",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:30",name:"Counselling",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:46",name:"Zumba",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:345",name:"Community Centre / Hub",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:190",name:"Live in Care",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:73",name:"Sports",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:71",name:"Health",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:24",name:"Animals",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:12",name:"Debt / Money",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:568",name:"Badminton",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:144",name:"Personal Health",vocabulary:"BCC Services",category:"Coping"},{id:"bccservicetype:44",name:"Pilates",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:145",name:"Personal Assistant",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:94",name:"Hairdressing",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:413",name:"Bingo",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:150",name:"Computers / IT",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:254",name:"Books / Reading",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:203",name:"Community Transport",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:178",name:"Card / Tabletop Games",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:19",name:"Trips",vocabulary:"BCC Services",category:"Socialising"},{id:"bccservicetype:223",name:"Physiotherapy",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:166",name:"Cleaning",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:149",name:"Energy / Heating",vocabulary:"BCC Services",category:"Services"},{id:"bccservicetype:449",name:"Tai Chi",vocabulary:"BCC Services",category:"Activities"},{id:"bccservicetype:148",name:"Gardening",vocabulary:"BCC Services",category:"Services"}]}}},[[135,1,2]]]);
//# sourceMappingURL=main.b4562f5b.chunk.js.map