var s=async(t,o=2)=>{if(t===0)return"0 Bytes";const B=1024,r=o<0?0:o,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(t)/Math.log(B));return`${parseFloat((t/B**n).toFixed(r))} ${e[n]}`};export { s as default };

