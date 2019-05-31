$(document).ready(function(){
	$("div[class='con-nav']").find("li").children("a").click(function(){
		if($(this).next("ul").attr("data-title")=="1"){
		$(this).next("ul").show(500);
		$(this).next("ul").attr("data-title","0");
		}else{
			$(this).next("ul").hide(500);
			$(this).next("ul").attr("data-title","1");
		}
	})
})

//window.onload=function erji(){
//  var xiala=document.getElementsByClassName("con-nav").lastChild.children;
//  for(var i=0;i<xiala.length;i++){
//      xiala[i].onmouseover=function(){
//          this.lastChild.style.display="block";
//      }
//      xiala[i].onmouseout=function(){
//          this.lastChild.style.display="none";
//      }
//  }
//}
