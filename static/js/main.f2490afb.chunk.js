(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{35:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c}));var n=function(e){return e.preventDefault()},r=function(e,t){var a=e;do{if(a===t)return a;a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType);return null},c=function(e){return e.replace(/\r\n|\r|\n/gm," ")}},48:function(e,t){},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=.75},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(9),r=a(0),c=a(35),l=function(e,t){var a=Object(r.useState)(e),c=Object(n.a)(a,2),l=c[0],i=c[1];return[l,function(e){t&&t(e),i(e)}]},i=function(e,t){var a=l(e,t),r=Object(n.a)(a,2),c=r[0],i=r[1];return[c,function(){return i(!0)},function(){return i(!1)}]},o=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return[c,function(){return l(!c)}]},s=function(e,t,a){Object(r.useEffect)((function(){if(a&&e){var n=function(a){var n=a.target;Object(c.a)(n,e)||t()};return document.addEventListener("click",n),document.addEventListener("focusin",n),function(){document.removeEventListener("click",n),document.removeEventListener("focusin",n)}}}),[e,t,a])}},54:function(e){e.exports=JSON.parse('{"create":"Create","edit":"Edit","submit":"Submit","delete":"Delete","cancel":"Cancel","app/home":"Home","app/boards":"Boards","app/get-started":"Get started","app/go-back":"Go back","app/page404":"Such page doesn\'t exist","app/board404":"Such board doesn\'t exist","app/open-menu":"Menu","app/close-menu":"Close","app/change-language":"Change language","boards/title":"Title","boards/new-board":"New Board","lists/title":"title","lists/new-list":"New List","cards/content":"Content","cards/new-card":"New Card"}')},55:function(e){e.exports=JSON.parse('{"create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","submit":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","app/home":"\u0414\u043e\u043c\u043e\u0439","app/boards":"\u0414\u043e\u0441\u043a\u0438","app/get-started":"\u041d\u0430\u0447\u0430\u0442\u044c","app/go-back":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","app/page404":"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/board404":"\u0422\u0430\u043a\u043e\u0439 \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/open-menu":"\u041c\u0435\u043d\u044e","app/close-menu":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","app/change-language":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u044f\u0437\u044b\u043a","boards/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","boards/new-board":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443","lists/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","lists/new-list":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a","cards/content":"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","cards/new-card":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}')},64:function(e,t,a){e.exports=a(95)},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},8:function(e,t,a){"use strict";var n=a(48);a.o(n,"HORIZONTAL_SCROLLING_SPEED_FACTOR")&&a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return n.HORIZONTAL_SCROLLING_SPEED_FACTOR})),a.o(n,"preventDefault")&&a.d(t,"preventDefault",(function(){return n.preventDefault})),a.o(n,"removeLineBreaks")&&a.d(t,"removeLineBreaks",(function(){return n.removeLineBreaks})),a.o(n,"useCallbackOnExternalAction")&&a.d(t,"useCallbackOnExternalAction",(function(){return n.useCallbackOnExternalAction})),a.o(n,"useStateWithCallback")&&a.d(t,"useStateWithCallback",(function(){return n.useStateWithCallback})),a.o(n,"useSwitchWithCallback")&&a.d(t,"useSwitchWithCallback",(function(){return n.useSwitchWithCallback})),a.o(n,"useToggle")&&a.d(t,"useToggle",(function(){return n.useToggle}));var r=a(49);a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return r.a}));var c=a(35);a.d(t,"preventDefault",(function(){return c.b})),a.d(t,"removeLineBreaks",(function(){return c.c}));var l=a(50);a.d(t,"useCallbackOnExternalAction",(function(){return l.a})),a.d(t,"useStateWithCallback",(function(){return l.b})),a.d(t,"useSwitchWithCallback",(function(){return l.c})),a.d(t,"useToggle",(function(){return l.d}))},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(26),i=a.n(l),o=a(16),s=a(3),d=a(115),u=a(110),b=a(6),f=(a(73),a(74),{en:{name:"english",translation:a(54)},ru:{name:"russian",translation:a(55)}}),m=(a(75),a(9)),E=a(8);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(n||(n={}));n.SET_LANGUAGE;var O,p=n.SET_LANGUAGE,g=function(){var e=Object(u.a)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.locale.languageCode})),n=Object(E.useStateWithCallback)(a,(function(e){return t({type:p,payload:{languageCode:a=e,languageName:f[a].name}});var a})),r=Object(m.a)(n,2),l=r[0],i=r[1];return c.a.createElement("label",{className:"change-language"},e.formatMessage({id:"app/change-language",defaultMessage:"Change language"}),c.a.createElement("select",{value:l,onChange:function(e){i(e.target.value)},className:"language-select"},Object.entries(f).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement("option",{key:a,value:a,className:"language-option"},n.name)}))))},v=function(){var e=Object(u.a)(),t=Object(r.useRef)(null),a=Object(E.useToggle)(!1),n=Object(m.a)(a,2),l=n[0],i=n[1];return Object(E.useCallbackOnExternalAction)(t.current,i,l),c.a.createElement("div",{className:"site-menu".concat(l?" expand":""),ref:t},c.a.createElement("button",{onClick:i,className:"toggler"},l?e.formatMessage({id:"app/close-menu",defaultMessage:"Close"}):e.formatMessage({id:"app/open-menu",defaultMessage:"Menu"})),c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{className:"dropdown-inner"},c.a.createElement(g,null))))},j=function(){var e=Object(u.a)();return c.a.createElement("header",{className:"site-header"},c.a.createElement("div",{className:"placeholder"}),c.a.createElement("nav",{className:"site-navigation"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},e.formatMessage({id:"app/home",defaultMessage:"Home"}))),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/boards"},e.formatMessage({id:"app/boards",defaultMessage:"Boards"}))))),c.a.createElement(v,null))},C=a(21),I=(a(77),Object(r.forwardRef)((function(e,t){var a=e.className,n=void 0===a?"":a,r=Object(C.a)(e,["className"]),l="button";return n&&(l+=" "+n),c.a.createElement("button",Object.assign({className:l},r,{ref:t}))}))),T=a(2),A=a(116),N=(a(78),Object(r.forwardRef)((function(e,t){var a=e.labelValue,n=void 0!==a&&a,l=e.isInvalid,i=void 0!==l&&l,o=e.className,s=e.value,d=Object(C.a)(e,["labelValue","isInvalid","className","value"]),u=Object(r.useState)(!!s),b=Object(m.a)(u,2),f=b[0],E=b[1];Object(r.useEffect)((function(){E(!!s)}),[s]);var O="textarea";i&&(O+=" invalid"),n&&f&&(O+=" hide-label"),o&&(O+=" "+o);var p=Object(T.a)(Object(T.a)({className:O,spellCheck:!1,value:s},d),{},{ref:t});return c.a.createElement("div",{className:"textarea-container"},n?c.a.createElement("label",{className:"label"},c.a.createElement("span",{className:"label-value".concat(f?" hide":"")},n),c.a.createElement(A.a,Object.assign({},p,{ref:t}))):c.a.createElement(A.a,Object.assign({},p,{ref:t})))}))),D=a(111),_=a(112),R=a(113),S=a(114),y=(a(79),function(e){var t=e.fieldName,a=e.value,n=void 0===a?"":a,l=e.displayOnViewMode,i=e.titles,o=e.initialEditMode,s=void 0!==o&&o,d=e.onEditToggle,b=e.iconToggle,f=void 0!==b&&b,O=e.exitOnSubmit,p=void 0===O||O,g=e.onSubmit,v=e.onDelete,j=Object(u.a)(),C=Object(r.useRef)(null),T=Object(r.useRef)(null),A=Object(E.useSwitchWithCallback)(s,d),y=Object(m.a)(A,3),L=y[0],h=y[1],M=y[2],k=Object(r.useState)(n),x=Object(m.a)(k,2),w=x[0],G=x[1],B=!w.trim(),H=function(){if(!B){var e=w.trim();n!==e&&g(e),p?M():G("")}};Object(r.useEffect)((function(){var e;L&&(null===(e=C.current)||void 0===e||e.focus())}),[L]),Object(r.useEffect)((function(){G(n)}),[n,L]),Object(E.useCallbackOnExternalAction)(T.current,M,L);var P=(null===i||void 0===i?void 0:i.edit)||j.formatMessage({id:"edit"}),V=(null===i||void 0===i?void 0:i.submit)||j.formatMessage({id:"submit"}),W=(null===i||void 0===i?void 0:i.cancel)||j.formatMessage({id:"cancel"}),F=(null===i||void 0===i?void 0:i.delete)||j.formatMessage({id:"delete"});return c.a.createElement("div",{className:"field-editor".concat(L?" edit":""),ref:T},c.a.createElement("div",{className:"field-editor-textarea-container"},c.a.createElement(N,{labelValue:t,title:L?t:void 0,isInvalid:B,value:l&&!L?l:w,rowsMax:3,disabled:!L,required:!0,onChange:function(e){G(Object(E.removeLineBreaks)(e.target.value))},onKeyDown:function(e){"Escape"===e.key&&M(),"Enter"===e.key&&(e.preventDefault(),H())},ref:C}),c.a.createElement("div",{className:"default-prevention-boundary",onClick:E.preventDefault},!L&&(f?c.a.createElement(I,{className:"field-editor-button edit-button",title:P,onClick:h},c.a.createElement(D.a,{fontSize:"inherit"})):c.a.createElement("button",{className:"click-overlay",title:P,onClick:h})))),c.a.createElement("div",{className:"buttons-container"},L&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(I,{className:"field-editor-button submit-button",title:V,onClick:H,disabled:B},c.a.createElement(_.a,{fontSize:"inherit"})),c.a.createElement(I,{className:"field-editor-button",title:W,onClick:M},c.a.createElement(R.a,{fontSize:"inherit"}))),v&&c.a.createElement(I,{className:"field-editor-button",title:F,onClick:v},c.a.createElement(S.a,{fontSize:"inherit"})))))}),L=(a(80),function(){var e=Object(u.a)();return c.a.createElement("main",{className:"home-page"},c.a.createElement("h1",null,"Trello clone"),c.a.createElement(o.b,{to:"/boards"},c.a.createElement(I,null,e.formatMessage({id:"app/get-started",defaultMessage:"Get started"}))))}),h=(a(81),a(82),a(20)),M=a(117);!function(e){e.CREATE_LIST="CREATE_LIST",e.DELETE_LIST="DELETE_LIST",e.CHANGE_LIST="CHANGE_LIST",e.MOVE_CARD="MOVE_CARD"}(O||(O={}));O.CREATE_LIST,O.DELETE_LIST,O.CHANGE_LIST,O.MOVE_CARD;var k,x=O.CREATE_LIST,w=O.DELETE_LIST,G=O.CHANGE_LIST,B=O.MOVE_CARD;!function(e){e.CREATE_BOARD="CREATE_BOARD",e.DELETE_BOARD="DELETE_BOARD",e.CHANGE_BOARD="CHANGE_BOARD",e.MOVE_LIST="MOVE_LIST"}(k||(k={}));k.CREATE_BOARD,k.CHANGE_BOARD,k.DELETE_BOARD,k.MOVE_LIST;var H,P=k.CREATE_BOARD,V=k.DELETE_BOARD,W=k.CHANGE_BOARD,F=k.MOVE_LIST;a(83);!function(e){e.CREATE_CARD="CREATE_CARD",e.DELETE_CARD="DELETE_CARD",e.CHANGE_CARD="CHANGE_CARD"}(H||(H={}));H.CREATE_CARD,H.DELETE_CARD,H.CHANGE_CARD;var J,Z=H.CREATE_CARD,z=H.DELETE_CARD,U=H.CHANGE_CARD,Y=Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onDelete,r=e.onEdit,i=Object(u.a)(),o=Object(s.d)((function(e){return e.cards[a].content})),d=function(){return n(a)},b=function(e){return r(a,e)},f=Object(E.useToggle)(!0),O=Object(m.a)(f,2),p=O[0],g=O[1];return c.a.createElement(h.b,{draggableId:a,index:t,disableInteractiveElementBlocking:p},(function(e){return t=e.draggableProps.style,a=c.a.createElement("div",Object.assign({className:"card"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement(y,{fieldName:i.formatMessage({id:"cards/content",defaultMessage:"Content"}),value:o,onSubmit:b,onDelete:d,onEditToggle:g})),"fixed"!==t.position?a:Object(l.createPortal)(a,document.getElementById("draggable"));var t,a}))})),q=Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",{className:"card new-card"},c.a.createElement(y,{fieldName:a.formatMessage({id:"cards/content",defaultMessage:"Content"}),displayOnViewMode:a.formatMessage({id:"cards/new-card",defaultMessage:"New card"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t}))})),K=Object(r.memo)((function(e){var t=e.listId,a=Object(s.c)(),n=Object(s.d)((function(e){var a;return(null===(a=e.lists[t])||void 0===a?void 0:a.cards)||[]})),l=Object(r.useCallback)((function(e){return a(function(e,t){return{type:Z,payload:{listId:e,cardId:Object(M.a)(),content:t}}}(t,e))}),[a,t]),i=Object(r.useCallback)((function(e){return a(function(e,t){return{type:z,payload:{listId:e,cardId:t}}}(t,e))}),[a,t]),o=Object(r.useCallback)((function(e,t){return a(function(e,t){return{type:U,payload:{cardId:e,content:t}}}(e,t))}),[a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.c,{droppableId:t,type:"card"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"list-of-cards"}),n.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(Y,{index:t,id:e,onDelete:i,onEdit:o}))})),e.placeholder)})),c.a.createElement(q,{onCreate:l}))})),Q=Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onEdit,r=e.onDelete,l=Object(u.a)(),i=Object(s.d)((function(e){return e.lists[a].title})),o=function(){return r(a)},d=function(e){return n(a,e)},b=Object(E.useToggle)(!0),f=Object(m.a)(b,2),O=f[0],p=f[1];return c.a.createElement(h.b,{draggableId:a,index:t,disableInteractiveElementBlocking:O},(function(e){return c.a.createElement("div",Object.assign({className:"list"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement("header",null,c.a.createElement(y,{fieldName:l.formatMessage({id:"lists/title",defaultMessage:"Title"}),value:i,onDelete:o,onSubmit:d,onEditToggle:p})),c.a.createElement(K,{listId:a}))}))})),X=function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",{className:"list new-list"},c.a.createElement(y,{fieldName:a.formatMessage({id:"lists/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"lists/new-list",defaultMessage:"Create card"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t}))},$=Object(r.memo)((function(e){var t=e.boardId,a=Object(s.d)((function(e){var a;return(null===(a=e.boards.byId[t])||void 0===a?void 0:a.lists)||[]})),n=Object(s.c)(),l=Object(r.useCallback)((function(e){return n(function(e,t){return{type:x,payload:{boardId:e,listId:Object(M.a)(),title:t}}}(t,e))}),[n,t]),i=Object(r.useCallback)((function(e){return n(function(e,t){return function(a,n){var r=n().lists[t].cards;return a({type:w,payload:{boardId:e,listId:t,cardsIds:r}})}}(t,e))}),[t,n]),o=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:G,payload:{listId:e,title:t}}}(e,t))}),[n]),d=Object(r.useCallback)((function(e,a){return n(function(e,t,a){return{type:F,payload:{boardId:e,fromIndex:t,toIndex:a}}}(t,e,a))}),[n,t]),u=Object(r.useCallback)((function(e,t,a,r){return n(function(e,t,a,n){return{type:B,payload:{fromListId:e,toListId:t,fromIndex:a,toIndex:n}}}(e,t,a,r))}),[n]);return c.a.createElement(h.a,{onDragEnd:function(e){var t=e.destination,a=e.source,n=e.type;if(t)if("card"===n){var r=a.droppableId,c=a.index,l=t.droppableId,i=t.index;if(r===l&&c===i)return;u(r,l,c,i)}else if("list"===n){if(a.index===t.index)return;d(a.index,t.index)}}},c.a.createElement("div",{className:"list-of-lists"},c.a.createElement(h.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef}),a.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(Q,{index:t,id:e,onEdit:o,onDelete:i}))})),e.placeholder)})),c.a.createElement(X,{onCreate:l})))})),ee=(a(84),function(e){var t=e.message,a=Object(b.f)(),n=Object(u.a)();return c.a.createElement("main",{className:"not-found-page"},c.a.createElement("div",{className:"message"},c.a.createElement("span",{className:"error-code"},"404"),c.a.createElement("p",null,t),c.a.createElement(I,{onClick:a.goBack},n.formatMessage({id:"app/go-back",defaultMessage:"Go back"}))))}),te=function(e){var t=e.match,a=Object(u.a)(),n=t.params.id;if(Object(s.d)((function(e){return!!e.boards.byId[n]}))){return c.a.createElement("main",{className:"board-page",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;window.innerHeight<=600||(null===(t=a)||void 0===t?void 0:t.closest(".list"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement($,{boardId:n}))}return c.a.createElement(ee,{message:a.formatMessage({id:"app/board404",defaultMessage:"Such board doesn't exist"})})},ae=(a(85),Object(r.memo)((function(e){var t=e.id,a=e.onEdit,n=e.onDelete,r=Object(u.a)(),l=Object(s.d)((function(e){return e.boards.byId[t].title})),i=Object(E.useToggle)(!1),d=Object(m.a)(i,2),b=d[0],f=d[1],O={fieldName:r.formatMessage({id:"boards/title",defaultMessage:"Title"}),value:l,iconToggle:!0,onEditToggle:f,onSubmit:function(e){return a(t,e)},onDelete:function(){return n(t)}};return c.a.createElement(o.c,{to:"/boards/".concat(t),className:"board-link",onClick:b?E.preventDefault:void 0},c.a.createElement(y,O))}))),ne=Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",null,c.a.createElement("div",{className:"board-link new-board"},c.a.createElement(y,{fieldName:a.formatMessage({id:"boards/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"boards/new-board",defaultMessage:"Create board"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t})))})),re=function(){var e=Object(b.f)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.boards.allIds})),n=Object(r.useCallback)((function(e){return t(function(e){return{type:P,payload:{boardId:Object(M.a)(),title:e}}}(e))}),[t]),l=Object(r.useCallback)((function(a){e.location.pathname.includes(a)&&e.push("/boards/"),t(function(e){return function(t,a){var n=a(),r=n.boards,c=n.lists,l=r.byId[e].lists,i=l.map((function(e){return c[e].cards})).flat();return t({type:V,payload:{boardId:e,listsIds:l,cardsIds:i}})}}(a))}),[t,e]),i=Object(r.useCallback)((function(e,a){t(function(e,t){return{type:W,payload:{boardId:e,title:t}}}(e,a))}),[t]);return c.a.createElement("nav",{className:"boards-navigation",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;(null===(t=a)||void 0===t?void 0:t.closest(".field-editor.edit"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(ae,{id:e,onDelete:l,onEdit:i}))}))),c.a.createElement(ne,{onCreate:n}))},ce=function(){var e=Object(u.a)();return c.a.createElement(ee,{message:e.formatMessage({id:"app/page404",defaultMessage:"Such page doesn't exist"})})},le=function(){var e=Object(s.d)((function(e){return e.locale.languageCode}));return c.a.createElement(d.a,{locale:e,messages:f[e].translation},c.a.createElement(j,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:L}),c.a.createElement(b.a,{path:"/boards",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(re,null),c.a.createElement(b.a,{path:"/boards/:id",component:te}))}}),c.a.createElement(b.a,{path:"*",component:ce})))},ie=a(14),oe=a(59),se=a(60),de=a(61),ue=function(){try{var e=JSON.stringify(Ue.getState());localStorage.setItem("state",e)}catch(t){return}},be=a.n(de)()((function(){Ue.subscribe(ue)}),1e3),fe=n.SET_LANGUAGE,me=null===(J=navigator.language)||void 0===J?void 0:J.slice(0,2),Ee="en";me in f&&(Ee=me);var Oe={languageCode:Ee,languageName:f[Ee].name},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case fe:return Object(T.a)(Object(T.a)({},e),n);default:return e}},ge=a(30),ve=a(23),je=a(13),Ce=k.CREATE_BOARD,Ie=k.DELETE_BOARD,Te=k.CHANGE_BOARD,Ae=k.MOVE_LIST,Ne=O.CREATE_LIST,De=O.DELETE_LIST,_e={byId:{},allIds:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Ce:var r=n,c=r.boardId,l=r.title,i=Object(T.a)(Object(T.a)({},e.byId),{},Object(je.a)({},c,{id:c,title:l,lists:[]}));return Object(T.a)(Object(T.a)({},e),{},{byId:i,allIds:[].concat(Object(ve.a)(e.allIds),[c])});case Ie:var o=n,s=o.boardId,d=e.byId,u=(d[s],Object(C.a)(d,[s].map(ge.a))),b=e.allIds.filter((function(e){return e!==s}));return Object(T.a)(Object(T.a)({},e),{},{byId:u,allIds:b});case Te:var f=n,m=f.boardId,E=f.title,O=Object(T.a)(Object(T.a)({},e.byId),{},Object(je.a)({},m,Object(T.a)(Object(T.a)({},e.byId[m]),{},{title:E})));return Object(T.a)(Object(T.a)({},e),{},{byId:O});case Ae:var p=n,g=p.boardId,v=p.fromIndex,j=p.toIndex,I=Object(T.a)({},e.byId),A=Object(T.a)({},I[g]),N=Object(ve.a)(A.lists),D=N.splice(v,1);return N.splice.apply(N,[j,0].concat(Object(ve.a)(D))),A.lists=N,I[g]=A,Object(T.a)(Object(T.a)({},e),{},{byId:I});case Ne:var _=n,R=_.boardId,S=_.listId,y=Object(T.a)({},e.byId[R]);y.lists=[].concat(Object(ve.a)(y.lists),[S]);var L=Object(T.a)(Object(T.a)({},e.byId),{},Object(je.a)({},R,y));return Object(T.a)(Object(T.a)({},e),{},{byId:L});case De:var h=n,M=h.boardId,k=h.listId,x=Object(T.a)({},e.byId[M]);x.lists=x.lists.filter((function(e){return e!==k}));var w=Object(T.a)(Object(T.a)({},e.byId),{},Object(je.a)({},M,x));return Object(T.a)(Object(T.a)({},e),{},{byId:w});default:return e}},Se=O.CREATE_LIST,ye=O.DELETE_LIST,Le=O.CHANGE_LIST,he=O.MOVE_CARD,Me=H.CREATE_CARD,ke=H.DELETE_CARD,xe=k.DELETE_BOARD,we={},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Se:var r=n,c=r.listId,l=r.title;return Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},c,{id:c,title:l,cards:[]}));case ye:var i=n,o=i.listId,s=(e[o],Object(C.a)(e,[o].map(ge.a)));return Object(T.a)({},s);case Le:var d=n,u=d.listId,b=d.title;return Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},u,Object(T.a)(Object(T.a)({},e[u]),{},{title:b})));case Me:var f=n,m=f.listId,E=f.cardId,O=Object(T.a)({},e[m]);return O.cards=[].concat(Object(ve.a)(O.cards),[E]),Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},m,O));case ke:var p=n,g=p.listId,v=p.cardId,j=Object(T.a)({},e[g]);return j.cards=j.cards.filter((function(e){return e!==v})),Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},g,j));case he:var I,A=n,N=A.fromListId,D=A.toListId,_=A.fromIndex,R=A.toIndex,S=Object(T.a)({},e),y=Object(T.a)({},S[N]);y.cards=Object(ve.a)(y.cards);var L=y.cards.splice(_,1);S[N]=y;var h=Object(T.a)({},S[D]);return h.cards=Object(ve.a)(h.cards),(I=h.cards).splice.apply(I,[R,0].concat(Object(ve.a)(L))),S[D]=h,S;case xe:var M=n,k=M.listsIds,x={};for(var w in e)e.hasOwnProperty(w)&&!k.includes(w)&&(x[w]=e[w]);return x;default:return e}},Be=H.CREATE_CARD,He=H.DELETE_CARD,Pe=H.CHANGE_CARD,Ve=O.DELETE_LIST,We=k.DELETE_BOARD,Fe={},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Be:var r=n,c=r.cardId,l=r.content;return Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},c,{id:c,content:l}));case He:var i=n,o=i.cardId,s=(e[o],Object(C.a)(e,[o].map(ge.a)));return Object(T.a)({},s);case Pe:var d=n,u=d.cardId,b=d.content;return Object(T.a)(Object(T.a)({},e),{},Object(je.a)({},u,Object(T.a)(Object(T.a)({},e[u]),{},{content:b})));case Ve:var f=n,m=f.cardsIds,E={};for(var O in e)e.hasOwnProperty(O)&&!m.includes(O)&&(E[O]=e[O]);return E;case We:var p=n,g=p.cardsIds,v={};for(var j in e)e.hasOwnProperty(j)&&!g.includes(j)&&(v[j]=e[j]);return v;default:return e}},Ze=Object(ie.combineReducers)({locale:pe,boards:Re,lists:Ge,cards:Je}),ze=[se.a],Ue=Object(ie.createStore)(Ze,function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),Object(oe.composeWithDevTools)(ie.applyMiddleware.apply(void 0,ze)));be(),i.a.render(c.a.createElement(r.StrictMode,null,c.a.createElement(o.a,{basename:"/trello-clone"},c.a.createElement(s.a,{store:Ue},c.a.createElement(le,null)))),document.getElementById("app"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f2490afb.chunk.js.map