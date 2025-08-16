let s1 = document.getElementById("sq1");

s1.addEventListener("mouseenter",function(){
    let n =  Math.floor(Math.random()*100);
    s1.innerHTML = `${n}`;
})

s1.addEventListener("mouseleave",function(){
  s1.innerHTML = `1`;
})

let s2 = document.getElementById("sq2");

let clr = "green";

s2.addEventListener("mouseenter",function(){
  if(clr == "green"){
    s2.style.backgroundColor = "green";
    clr = "yellow";
  } else if(clr == "yellow"){
    s2.style.backgroundColor = "yellow";
    clr = "blue";
  } else{
    s2.style.backgroundColor = "blue";
    clr = "green";
  }
})

s2.addEventListener("mouseleave",function(){
   s2.style.backgroundColor = "white";
})

let s3 = document.getElementById("sq3");

s3.addEventListener("mouseenter",function(){
  let a = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256);
  s3.style.backgroundColor = `rgb(${a},${b},${c})`
})

s3.addEventListener("mouseleave",function(){
  s3.style.backgroundColor = "white";  
})

let s4 = document.getElementById("sq4");

function randomcolor(){
  let a = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256);
  return `rgb(${a},${b},${c})`;
}
s4.addEventListener("mouseenter",function(){
  s1.style.backgroundColor = randomcolor();
  s2.style.backgroundColor = randomcolor();
  s3.style.backgroundColor = randomcolor();
})
s4.addEventListener("mouseleave",function(){
  s1.style.backgroundColor = "white";  
  s2.style.backgroundColor = "white";
  s3.style.backgroundColor = "white";
})
