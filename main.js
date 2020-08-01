let navigation=document.querySelector(".icofont-navigation-menu");
let mbBarUl=document.querySelector(".mb-bar-ul");
let allContent=document.querySelector('.all-content');



const tl=new TimelineMax();

let currently=false;
navigation.addEventListener('click',()=>{
  if(currently==false){
    const tl=new TimelineMax();
    if(mbBarUl.classList.contains("active")){
      currently=true;
      tl.to(mbBarUl,0.3,{opacity:0});
      tl.to(mbBarUl,0.15,{scaleY:0,transformOrigin:"top"});
      tl.to(mbBarUl,0.15,{height:"0px"});
      mbBarUl.classList.remove("active");
    }
    else{
      currently=true;
      tl.to(mbBarUl,0.15,{height:"auto"});
      tl.to(mbBarUl,0.15,{scaleY:1,transformOrigin:"top"});
      tl.to(mbBarUl,0.3,{opacity:1});
      mbBarUl.classList.add("active");
    }
    setTimeout(()=>{currently=false},700);
  }
  else{
    return 0;
  }
});
