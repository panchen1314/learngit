var arr=["../img/ic1.jpg","../img/ic2.jpg","../img/ic3.jpg"];
var pic=document.getElementById("pic");
var nav=document.getElementById("nav");
var lis=document.getElementsByTagName("li");
var index=0;
function change(){
    if(index==2){
        index=0;				
    }else{
        index++;
    }
    pic.src=arr[index];

    for(var n=0;n<lis.length;n++){
        lis[n].className="";
    }
    lis[index].className="active"

}
var t=setInterval(change,2000)

pic.onmouseenter=function(){
    clearInterval(t);
}
pic.onmouseleave=function(){
    t=setInterval(change,2000)
}
for(var n=0;n<lis.length;n++){
    lis[n].index=n;
    lis[n].onmouseenter=function(){
        for(var j=0;j<lis.length;j++){
            lis[j].className=""
        }
        this.className="active";
        index=this.index
        pic.src=arr[index]
    }
}