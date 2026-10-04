/* A clean ribbon shares the exact centerline and width of the infinity channel. */
(function(root){
 const channelWidth=20,bodyLength=128;
 const segments=[
  [[135,66],[158,22],[233,22],[233,65]],
  [[233,65],[233,111],[158,111],[135,66]],
  [[135,66],[112,21],[33,20],[33,64]],
  [[33,64],[33,110],[112,110],[135,66]]
 ];
 const curvePath='M135 66 C158 22 233 22 233 65 C233 111 158 111 135 66 C112 21 33 20 33 64 C33 110 112 110 135 66';
 function curve(u){
  u=((u%4)+4)%4;const i=Math.floor(u),t=u-i,v=1-t,p=segments[i];
  const x=v*v*v*p[0][0]+3*v*v*t*p[1][0]+3*v*t*t*p[2][0]+t*t*t*p[3][0];
  const y=v*v*v*p[0][1]+3*v*v*t*p[1][1]+3*v*t*t*p[2][1]+t*t*t*p[3][1];
  const dx=3*v*v*(p[1][0]-p[0][0])+6*v*t*(p[2][0]-p[1][0])+3*t*t*(p[3][0]-p[2][0]);
  const dy=3*v*v*(p[1][1]-p[0][1])+6*v*t*(p[2][1]-p[1][1])+3*t*t*(p[3][1]-p[2][1]);
  return {x,y,angle:Math.atan2(dy,dx)*180/Math.PI};
 }
 const samples=Array.from({length:2401},(_,i)=>({u:i/600,...curve(i/600),s:0}));
 for(let i=1;i<samples.length;i++)samples[i].s=samples[i-1].s+Math.hypot(samples[i].x-samples[i-1].x,samples[i].y-samples[i-1].y);
 const perimeter=samples[samples.length-1].s;
 function atDistance(distance){
  const s=((distance%perimeter)+perimeter)%perimeter;let lo=0,hi=samples.length-1;
  while(hi-lo>1){const mid=(lo+hi)>>1;if(samples[mid].s<s)lo=mid;else hi=mid}
  const a=samples[lo],b=samples[hi],f=(s-a.s)/(b.s-a.s);return curve(a.u+(b.u-a.u)*f);
 }
 const ease=t=>t*t*(3-2*t);
 function colorAt(p){
  const keys=[[0,[5,217,237]],[.25,[250,88,84]],[.5,[55,225,157]],[1,[5,217,237]]];
  for(let i=1;i<keys.length;i++)if(p<=keys[i][0]){const a=keys[i-1],b=keys[i],mix=ease((p-a[0])/(b[0]-a[0]));return 'rgb('+a[1].map((v,j)=>Math.round(v+(b[1][j]-v)*mix)).join(',')+')'}
  return 'rgb(5,217,237)';
 }
 function state(progress){
  const p=Math.max(0,Math.min(1,progress)),distance=p*perimeter,start=distance-bodyLength/2;
  return {color:colorAt(p),dasharray:bodyLength+' '+(perimeter-bodyLength),dashoffset:-start,head:atDistance(distance+bodyLength/2),tail:atDistance(start)};
 }
 const headPath='M16 0 L-12 -17 L-12 17 Z',tailPath='M-16 0 L12 -17 L12 17 Z';
 const api={state,curvePath,channelWidth,headPath,tailPath};
 if(typeof module==='object'&&module.exports)module.exports=api;else root.ShuffleIntroMotion=api;
})(typeof window==='object'?window:this);
