document.addEventListener("dblclick",() =>{
  document.documentElement.requestFullscreen().catch((e)=>{

  console.log(e);
});
});
