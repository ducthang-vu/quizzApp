(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(15),r=n.n(a),i=(n(50),n(13)),o=(n(51),n(52),n(3));var u=function(){return Object(o.jsx)("header",{className:"main-header",children:Object(o.jsx)("h1",{children:"QuizApp!"})})},j=(n(54),n(35));var l=function(){return Object(o.jsx)("footer",{className:"main-footer",children:Object(o.jsxs)("div",{className:"container flex",children:[Object(o.jsx)("p",{children:"Made by Thang"}),Object(o.jsx)("a",{href:"https://github.com/ducthang-vu/quizApp",children:Object(o.jsx)(j.a,{icon:["fab","github"]})})]})})},b=(n(59),n(99));var h=function(){return Object(o.jsxs)("div",{className:"main-waiting",children:[Object(o.jsx)("h2",{children:"Fetching questions..."}),Object(o.jsx)("div",{id:"canvas-wrapper",children:Object(o.jsx)(b.a,{color:"secondary"})})]})},d=(n(62),n(82));var O=function(e){var t=function(e){var t=e.question,n=t.correct_answer,c=t.incorrect_answers;return d.shuffle(c.concat(n))},n=Object(c.useState)(t(e)),a=Object(i.a)(n,2),r=a[0],u=a[1];return Object(c.useEffect)((function(){u(t(e))}),[e]),Object(o.jsxs)("div",{className:"question-box",children:[Object(o.jsx)("h3",{className:"question-box__title",dangerouslySetInnerHTML:{__html:e.question.question}}),r.map((function(e,t){return Object(o.jsx)("button",{className:"question-box__btn answer-btn",onClick:function(){return u([e])},dangerouslySetInnerHTML:{__html:e}},t)})),1===r.length&&Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("button",{className:"question-box__btn confirm-btn",onClick:function(){if(1!==r.length)throw new Error("More than one answer");var t=r[0]===e.question.correct_answer?1:0;e.answerQuestion(t)},children:"CONFIRM"}),Object(o.jsx)("button",{className:"question-box__btn cancel-btn",onClick:function(){return u(t(e))},children:"Cancel"})]})]})},x=(n(63),n(98));var f=function(e){var t=e.score,n=t.score,c=t.total;return Object(o.jsx)("div",{className:"final-result",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Congratulations!"}),Object(o.jsxs)("p",{className:"score",children:["Your score final score is: ",Object(o.jsxs)("span",{children:[n,"/",c]})]}),Object(o.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){return window.location.reload()},children:"Play again!"})]})})},m=(n(64),n(100));var p=function(e){var t=e.questions,n=Object(c.useState)(0),a=Object(i.a)(n,2),r=a[0],u=a[1],j=Object(c.useState)(0),l=Object(i.a)(j,2),b=l[0],h=l[1];return Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("div",{className:"container",children:r<t.length?Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(m.a,{variant:"progress",steps:10,position:"static",activeStep:r,className:"stepper",backButton:"",nextButton:""}),Object(o.jsxs)("h2",{children:["Question ","".concat(r+1,"/").concat(t.length)," "]}),Object(o.jsx)(O,{question:t[r],answerQuestion:function(e){h(b+e),u(r+1)}})]}):Object(o.jsx)(f,{score:{score:b,total:t.length}})})})},v=n(41),g=n.n(v);var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){g.a.get("https://opentdb.com/api.php?amount=10").then((function(e){return s(e.data.results)}))}),[]),Object(o.jsxs)("div",{className:"app flex",children:[Object(o.jsx)(u,{}),Object(o.jsx)("main",{children:n.length?Object(o.jsx)(p,{questions:n}):Object(o.jsx)(h,{})}),Object(o.jsx)(l,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=n(14),q=n(42);N.b.add(q.a),r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.0f476042.chunk.js.map