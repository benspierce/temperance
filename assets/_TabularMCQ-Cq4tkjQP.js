import{bw as A,e as E,j as t,D as m}from"./index-DdzLJo6o.js";import{u as M}from"./useGraderAnswer-BWBwoSXl.js";function Q(r){const{fields:x,kids:i}=r;A(i,["type","parsed","message","technical"]);const[c,j]=E(r,x.value,{}),{showAnswer:f,displayAnswer:b}=M(r);if(r.parseError)return t.jsx(m,{props:r,title:"TabularMCQ Parse Error",message:String(i.message||"Failed to parse TabularMCQ content"),technical:i.technical?JSON.stringify(i.technical,null,2):void 0});if(!i||!i.parsed)return t.jsx(m,{props:r,title:"TabularMCQ Error",message:"No content provided",technical:`Expected YAML content inside <TabularMCQ>:
cols: Col1, Col2, Col3
rows: Row1, Row2, Row3

Received: ${JSON.stringify(i,null,2)}`});const l=i.parsed,d=l.mode||"radio",C=l.rows,o=l.cols;if(!Array.isArray(C)||C.length===0)return t.jsx(m,{props:r,title:"TabularMCQ Error",message:"No rows defined",technical:`Add rows to your content:
rows: Item1, Item2, Item3

Parsed data: ${JSON.stringify(l,null,2)}`});if(!Array.isArray(o)||o.length===0)return t.jsx(m,{props:r,title:"TabularMCQ Error",message:"No columns defined",technical:`Add columns to your content:
cols: Col1, Col2, Col3

Parsed data: ${JSON.stringify(l,null,2)}`});const y=(e,s)=>{j({...c,[e]:s})},v=(e,s)=>{const a=c[e]||[],u=a.includes(s)?a.filter(n=>n!==s):[...a,s].sort((n,h)=>n-h);j({...c,[e]:u})},g=(e,s)=>d==="checkbox"?(c[e]||[]).includes(s):c[e]===s;return t.jsx("div",{className:"tabular-mcq",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r.title}),o.map((e,s)=>t.jsx("th",{children:e.text},e.id||s))]})}),t.jsx("tbody",{children:C.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:e.text}),o.map((s,a)=>{const u=`${r.id}-${e.id}-${a}`,n=f?b==null?void 0:b[e.id]:void 0,h=n!==void 0&&n.includes(a),N=n!==void 0&&!h&&g(e.id,a),k=h?"tabular-mcq-correct":N?"tabular-mcq-wrong":"";return t.jsx("td",{className:k,children:t.jsx("label",{htmlFor:u,children:t.jsx("input",{id:u,type:d==="checkbox"?"checkbox":"radio",name:d==="radio"?`tabular-mcq-row-${r.id}-${e.id}`:void 0,checked:g(e.id,a),onChange:()=>d==="checkbox"?v(e.id,a):y(e.id,a)})})},s.id||a)})]},e.id))})]})})}export{Q as default};
