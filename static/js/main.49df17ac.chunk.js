(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={container:"Container_container__2tApN"}},,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(3),o=n.n(i),s=(n(16),n(4)),d=n(5),u=n(6),l=n(10),b=n(9),j=n(7),h=n.n(j),v=n(8),f=n.n(v);Notification.propTypes={children:h.a.node.isRequired};var O=function(e){var t=e.children;return Object(c.jsx)("div",{className:f.a.container,children:t})};n(19);var x=function(e){var t=e.title,n=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:t}),n]})};n(20);var k=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},e)}))})};n(21);var p=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,i=e.positivePercentage;return Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["Good: ",t]}),Object(c.jsxs)("li",{children:["Neutral: ",n]}),Object(c.jsxs)("li",{children:["Bad: ",a]}),Object(c.jsxs)("li",{children:["Total: ",r]}),Object(c.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]})};n(22);var g=function(e){var t=e.message;return Object(c.jsxs)("p",{children:[" ",t," "]})},F=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState(Object(s.a)({},t,e.state[t]+1))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.round(100*t/n)||0},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)(O,{children:[Object(c.jsx)(x,{title:"Please leave feedback",children:Object(c.jsx)(k,{options:Object.keys(this.state),onLeaveFeedback:this.leaveFeedback})}),Object(c.jsx)(x,{title:"Statistics",children:this.countTotalFeedback()?Object(c.jsx)(p,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(c.jsx)(g,{message:"No feedback given"})})]})}}]),n}(a.Component);n(23);o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.49df17ac.chunk.js.map