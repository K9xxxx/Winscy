let navigation=document.querySelector(".icofont-navigation-menu");
let mbBarUl=document.querySelector(".mb-bar-ul");
let bgnr1=document.querySelector('.background.nr1');
let bgnr2=document.querySelector('.background.nr2');
let bgnr3=document.querySelector('.background.nr3');



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

const bantl=new TimelineMax({repeat:-1,repeatDelay:3,delay:3});
  bantl.fromTo(bgnr1,0.5,{delay:3,left:"-100%"},{left:0});
  bantl.to(bgnr1,0.5,{delay:6,left:"100%"});
  bantl.to(bgnr1,0,{left:"-100%"});
  bantl.fromTo(bgnr2,0.5,{left:"-100%"},{left:0},"-=0.5");
  bantl.to(bgnr2,0.5,{delay:6,left:"100%"});
  bantl.to(bgnr2,0,{left:"-100%"});
  bantl.fromTo(bgnr3,0.5,{left:"-100%"},{left:0},"-=0.5");
  bantl.to(bgnr3,0.5,{delay:6,left:"100%"});
  bantl.to(bgnr3,0,{left:"-100%"});
