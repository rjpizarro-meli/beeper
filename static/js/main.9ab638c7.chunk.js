(this["webpackJsonpbeep-test"]=this["webpackJsonpbeep-test"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(1),r=t.n(c),o=t(4),s=t.n(o),a=(t(14),t(3)),u=t(5),l=t(6),b=t(8),j=t(7),d={ERROR:2429},m=function(e){Object(b.a)(t,e);var n=Object(j.a)(t);function t(){var e;Object(u.a)(this,t),(e=n.call(this)).beep=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.time,i=n.volume,c=n.sound,r=t||300,o=i||.5,s=c||d.ERROR,a=e.audioContext.createOscillator(),u=e.audioContext.createGain();a.connect(u),a.frequency.value=s,u.connect(e.audioContext.destination),u.gain.value=o,a.start(e.audioContext.currentTime),a.stop(e.audioContext.currentTime+.001*r)},e.vibrate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pattern,t=n||2e3;window.navigator.vibrate(t)};var i=window.AudioContext||window.webkitAudioContext;return e.audioContext=new i,e}return Object(l.a)(t,[{key:"render",value:function(){return this.props.children({beep:this.beep,vibrate:this.vibrate})}}]),t}(r.a.Component);m.BEEPS=d;var x=m,O=(t(15),function(e){return e}),v=function(e){return Object(i.jsx)("button",Object(a.a)(Object(a.a)({},e),{},{className:"button",children:e.children}))};var h=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("header",{className:"App-header",children:Object(i.jsx)(x,{children:function(e){var n=e.beep,t=e.vibrate;return Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(i.jsx)(v,{onClick:n,size:"large",children:O("Beep 1: 300ms, volume: 0.5")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return n({time:1e3})},size:"large",children:O("Beep 2: 1000ms, volume: 0.5")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return n({time:2e3})},size:"large",children:O("Beep 3: 2000ms, volume: 0.5")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return n({volume:1})},size:"large",children:O("Beep 4: 300ms, volume 1")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return n({volume:1,sound:2e3})},size:"large",children:O("Beep 5: 300ms, volume 0.5 - sound frequency: 2000")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return n({volume:1,sound:3e3})},size:"large",children:O("Beep 6: 300ms, volume 0.5 - sound frequency: 3000")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:t,size:"large",children:O("Vibraci\xf3n 1: 1000ms")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return t({pattern:[200,500,200]})},size:"large",children:O("Vibraci\xf3n 2: 200ms, 200ms")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){return t({pattern:[1e3,500,1500]})},size:"large",children:O("Vibraci\xf3n 3: 1000ms, 1500ms")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){n({time:2e3}),t({pattern:[800,400,800]})},size:"large",children:O("Combined 1: 2000ms - 2 vibraciones")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){n({time:2e3}),t({pattern:[2e3]})},size:"large",children:O("Combined 2: 2000ms - 1 vibracion")}),Object(i.jsx)("br",{}),Object(i.jsx)(v,{onClick:function(){n({time:2e3}),t({pattern:[500,250,500,250,500]})},size:"large",children:O("Combined 3: 2000ms - 3 vibraciones")})]})}})})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),c(e),r(e),o(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.9ab638c7.chunk.js.map