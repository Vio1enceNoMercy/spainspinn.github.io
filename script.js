var balls=0;
w=document.documentElement.clientWidth-Spa.width;
h=document.documentElement.clientHeight-Spa.height;
x1=w/2;
y1=h-30;
Spa.style.left=900+"px";
Spa.style.top=800+"px";
dx1=Math.floor(Math.random()*10-5);
dy1=-Math.floor(Math.random()*5);
function move_Spainball(){
    if(x1<=0 ||x1>=w){dx1=-dx1;}
    if(y1<=0||y1>=h){dy1=-dy1;}
    x1=x1+dx1;
    y1=y1+dy1;
   if (dy1==0){dy1=-3;}
if (dx1==0){dx1=3;}
    Spa.style.left=x1+"px";
Spa.style.top=y1+"px";}
interval1=setInterval(move_Spainball,7)
function spball()
{
    balls++;
    alert(balls)

}
