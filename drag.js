function dragElement(e){var n=0,t=0,o=0,u=0;function m(e){(e=e||window.event).preventDefault(),o=e.clientX,u=e.clientY,document.onmouseup=l,document.onmousemove=d}function d(m){(m=m||window.event).preventDefault(),n=o-m.clientX,t=u-m.clientY,o=m.clientX,u=m.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function l(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=m:e.onmousedown=m}
