function s(i){if(typeof i!="string"){const e=`stripIndent expects a string input, but received ${typeof i}`,r=i===null?"null":i===void 0?"undefined":typeof i=="object"?`object with keys: ${Object.keys(i).slice(0,5).join(", ")}`:String(i).slice(0,100);throw new Error(`${e}. Value preview: ${r}`)}if(!i.trim())return"";const n=i.split(`
`);for(;n.length&&!n[0].trim();)n.shift();for(;n.length&&!n[n.length-1].trim();)n.pop();if(!n.length)return"";let t=1/0;for(const e of n)if(e.trim()){const r=e.match(/^(\s*)/),o=r?r[1].length:0;t=Math.min(t,o)}return t===1/0||t===0?n.join(`
`):n.map(e=>e.length>=t?e.slice(t):e).join(`
`)}export{s as stripIndent};
