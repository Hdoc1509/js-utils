var f=(t=[])=>!(!Array.isArray(t)||t.length===0||t.filter(n=>typeof n!="number").length>0),s=(t=[])=>!(!Array.isArray(t)||t.length===0||t.filter(n=>typeof n!="string").length>0),u=t=>{if(!!Array.isArray(t)&&t.length!==0)return t[Math.floor(Math.random()*t.length)]},i=[1,-1,"r"],o=(t=[],r=1)=>{if(!(!f(t)&&!s(t))&&!!i.includes(r)){if(t.length===1)return t;if(f(t)){if(r===1)return t.map(n=>n).sort((n,e)=>n-e);if(r===-1)return t.map(n=>n).sort((n,e)=>e-n);if(r==="r")return t.map(n=>n).sort(()=>.5-Math.random())}if(r===1)return t.map(n=>n).sort();if(r===-1)return t.map(n=>n).sort((n,e)=>n>e?-1:e>n?1:0);if(r==="r")return t.map(n=>n).sort(()=>.5-Math.random())}};export{f as arrayOfNumbers,s as arrayOfStrings,u as randomElement,o as sort};
