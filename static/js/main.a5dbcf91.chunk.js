(this.webpackJsonpsocial_login_authentication=this.webpackJsonpsocial_login_authentication||[]).push([[0],{11:function(e,n,t){e.exports=t(26)},17:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(8),r=t.n(o),i=(t(17),t(2)),l=t(7),u=t.n(l),s=t(1),g="https://pkcprashant.github.io/IN-CUBE-Login-Authentication-Page",d="https://cors-anywhere.herokuapp.com/",m={width:"auto",margin:"auto",marginTop:"20px",marginBottom:"20px"},h=function(e){var n=e.handleSuccess,t=e.handleFailure;return c.a.createElement(u.a,{clientId:"278205736150-prnf2ugv71kt5n7tnied504u767dlmj3.apps.googleusercontent.com",onSuccess:n,onFailure:t,render:function(e){return c.a.createElement(s.GoogleLoginButton,{onClick:e.onClick,style:m},"SIGNUP WITH GOOGLE")}})},f=function(e){var n=e.user,t=e.handleLogout;return console.log(n),c.a.createElement("span",null,c.a.createElement("h1",null,"Welcome ",n.name),c.a.createElement("img",{alt:"Profile",src:n.imageUrl}),c.a.createElement(s.GoogleLoginButton,{onClick:t,style:m},"SIGNOUT"))},S=function(e){var n=e.isUserSignedIn,t=e.changeSignInStatus,o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],s=Object(a.useState)(""),g=Object(i.a)(s,2),d=g[0],m=g[1];return c.a.createElement("div",{style:{textAlign:"center"}},("none"===n||"google"===n)&&(l?c.a.createElement(f,{user:d,handleLogout:function(){console.log("Log out"),u(!1),t((function(){return"none"})),m("")}}):c.a.createElement(h,{handleSuccess:function(e){console.log("Success"),u(!0),t((function(){return"google"})),m(e.profileObj)},handleFailure:function(e){console.log("Failure"),u(!1),t((function(){return"none"})),m("")}})))},p=function(e){var n=e.user,t=e.handleLogout;return console.log(n),c.a.createElement("span",null,c.a.createElement("h1",null,"Welcome ",n.name),n&&c.a.createElement("img",{alt:"Profile",src:n.picture.data.url}),c.a.createElement(s.FacebookLoginButton,{onClick:t,style:m},"SIGNOUT"))},E=t(9),k=t.n(E),b=function(e){var n=e.handleSuccess,t=e.handleFailure;return c.a.createElement(k.a,{appId:"555351001882800",fields:"name,email,picture",callback:n,onFailure:t,render:function(e){return c.a.createElement(s.FacebookLoginButton,{onClick:e.onClick,style:m},"SIGNUP WITH FACEBOOK")}})},I=function(e){var n=e.isUserSignedIn,t=e.changeSignInStatus,o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],s=Object(a.useState)(""),g=Object(i.a)(s,2),d=g[0],m=g[1];return c.a.createElement("div",{style:{textAlign:"center"}},!window.location.href.match("/?code=(.*)")&&("none"===n||"facebook"===n)&&(l?c.a.createElement(p,{user:d,handleLogout:function(){u(!1),t((function(){return"none"})),m("")}}):c.a.createElement(b,{handleSuccess:function(e){u(!0),t((function(){return"facebook"})),m(e)},handleFailure:function(e){u(!1),t((function(){return"none"})),m("")}})))},v=t(3),O=t.n(v),L=t(4),w=function(e){var n=e.handleLogin;return c.a.createElement("a",{href:"https://github.com/login/oauth/authorize?client_id=".concat("6bac23ed722557bf5e99","&scope=user&redirect_uri=").concat(g),onClick:n(),style:{textDecoration:"none"}},c.a.createElement(s.GithubLoginButton,{style:m},"SIGNUP WITH GITHUB"))},U=function(e){var n=e.user,t=e.handleLogout;return console.log(n),c.a.createElement("span",null,c.a.createElement("h1",null,"Welcome ",n.name),c.a.createElement("img",{alt:"Profile",src:n.avatar_url}),c.a.createElement(s.GithubLoginButton,{onClick:t,style:m},"SIGNOUT"))},j=function(e){var n=e.isUserSignedIn,t=e.changeSignInStatus,o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],s=Object(a.useState)(""),m=Object(i.a)(s,2),h=m[0],f=m[1],S=function(){var e=Object(L.a)(O.a.mark((function e(n){var a,c,o,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Code ",n),e.next=3,fetch("".concat(d,"https://github.com/login/oauth/access_token?client_id=").concat("6bac23ed722557bf5e99","&redirect_uri=").concat(g,"&client_secret=").concat("c48a8c89c103f96499cd5217f5fc81a2953762ea","&code=").concat(n),{method:"POST"});case 3:return a=e.sent,e.next=6,a.text();case 6:if(c=e.sent.split("&")[0].split("=")[1],console.log("Access Token ",c),!c||"bad_verification_code"===c){e.next=19;break}return e.next=11,fetch("".concat(d,"https://api.github.com/user?access_token=").concat(c));case 11:return o=e.sent,e.t0=JSON,e.next=15,o.text();case 15:e.t1=e.sent,r=e.t0.parse.call(e.t0,e.t1),console.log("USER ",r),r.id&&(f(r),u(!0),t((function(){return"github"})));case 19:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App",align:"center"},("none"===n||"github"===n)&&(l?c.a.createElement(U,{user:h,handleLogout:function(){f(""),u(!1),t((function(){return"none"})),window.location.href=g}}):c.a.createElement(w,{handleLogin:function(){window.location.href.match("/?code=(.*)")?S(window.location.href.match("/?code=(.*)")[1]):console.log("CODE COULD NOT BE GENERATED")}})))},_=t(5),x=function(e){var n=e.user,t=e.onLogoutClick;return console.log(n),c.a.createElement("span",null,c.a.createElement("h1",null,"Welcome ",n.localizedFirstName+" "+n.localizedLastName),n&&c.a.createElement("img",{alt:"Profile",src:n.profilePicture["displayImage~"].elements[2].identifiers[0].identifier}),c.a.createElement(s.LinkedInLoginButton,{onClick:t,style:m},"SIGNOUT"))},y=function(e){var n=e.handleSuccess,t=e.handleFailure;return c.a.createElement(_.a,{clientId:"86ogqcavau6buk",scope:"r_liteprofile",onFailure:t,onSuccess:n,redirectUri:g+"/linkedin",renderElement:function(e){return c.a.createElement(s.LinkedInLoginButton,{onClick:e.onClick,style:m},"SIGNUP WITH LINKEDIN")}})},C=function(e){var n=e.isUserSignedIn,t=e.changeSignInState,o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],s=Object(a.useState)(""),m=Object(i.a)(s,2),h=m[0],f=m[1],S=function(){var e=Object(L.a)(O.a.mark((function e(n){var a,c,o,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.code,console.log("Code ",a),!a){e.next=21;break}return e.next=5,fetch("".concat(d,"https://www.linkedin.com/oauth/v2/accessToken?client_id=").concat("86ogqcavau6buk","&client_secret=").concat("Hk7WnOhlnROLakU5","&grant_type=authorization_code&redirect_uri=").concat(g,"/linkedin&code=").concat(a));case 5:return c=e.sent,e.next=8,c.json();case 8:if(o=e.sent.access_token,console.log(o),!o||"Invalid access token"===o){e.next=21;break}return e.next=13,fetch("".concat(d,"https://api.linkedin.com/v2/me?projection=(id,localizedLastName,localizedFirstName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=").concat(o));case 13:return r=e.sent,e.next=16,r.json();case 16:i=e.sent,console.log(i),u(!0),f(i),t("linkedin");case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return c.a.createElement("div",{style:{textAlign:"center"}},("none"===n||"linkedin"===n)&&(l?c.a.createElement(x,{user:h,onLogoutClick:function(){u(!1),f(""),t("none")}}):c.a.createElement(y,{handleSuccess:S,handleFailure:function(e){console.log("ERROR WAS CAUSED ",e)}})))},N=function(e){var n=e.isUserSignedIn,t=e.changeSignInStatus;return window.location.href.match("/linkedin")?c.a.createElement(_.b,null):c.a.createElement(C,{isUserSignedIn:n,changeSignInState:function(e){t((function(){return e}))}})},G=function(){var e=Object(a.useState)("none"),n=Object(i.a)(e,2),t=n[0],o=n[1];return c.a.createElement("div",null,c.a.createElement(S,{isUserSignedIn:t,changeSignInStatus:o}),c.a.createElement(I,{isUserSignedIn:t,changeSignInStatus:o}),c.a.createElement(j,{isUserSignedIn:t,changeSignInStatus:o}),c.a.createElement(N,{isUserSignedIn:t,changeSignInStatus:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.a5dbcf91.chunk.js.map