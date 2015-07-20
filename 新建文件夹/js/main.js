// JavaScript Document
var page=0;
$(function(){
    /*for(var i=1;i<7;i++){
        $(".nav"+i).addClass("first_animation");
    }*/
    $(".container").find("a").addClass("first_animation");
    $(".divv").addClass("first_animation_divv");

	$(".container a:eq(0)").css("background","transparent");
	$(".container input:eq(0)").attr("checked","checked");
	$(".container input").click(function(){
        //alert("1")
        for(var i=1;i<7;i++){
            $(".nav"+i).removeClass("first_animation");
        }
        $(".divv").removeClass("first_animation_divv");
		//$(".container a").removeClass("hover");
		//即将跳的页面的page数
		page=($(this).index())/2;
		//alert(page)
		//$(".container a:eq("+page+")").animate({"background":"#58666E"},3000);
		if(page==0)
		{
			page_down();
		}
		else
		{
			page_up();	
		}
	})
	
	$("body").mousewheel(function(event,delta){
        $(".container").find("a").removeClass("first_animation");
        $(".divv").removeClass("first_animation_divv");
		//$(".container a").removeClass("hover");
		if(page==0&&$(".water p").attr("display","block"))
		{
			page_up();
		}
		else if(page==0&&$(".water p").attr("display","none"))
		{
			page_down();
		}
		if(delta>0){//上
			if(page==0)
			{
				$("input:eq(5)").attr("checked",true);
				page=5;
			}
			else
			{
				page--; 
				$("input:eq("+page+")").attr("checked",true);
				if(page==0&&$(".water p").attr("display","none"))
				{
					page_down();
				}
				else
				{
					//$(".container a:eq("+page+")").animate({"background":"#58666E"},2000);
				}
			}
		}
		else{//下
			if(page==5)
			{
				page=0;
				if(page==0&&$(".water p").attr("display","none"))
				{
					page_down();
				}
				$("input:eq(0)").attr("checked",true);
			}
			else
			{
				page++;
				/*if(page==2)
				{
					//icno_change();
				}
				else
				{
					$(".icno img").attr("src","img/logo.png");
					$(".icno img").css("border-right-color","#595656");
					$(".icno_tran").css("color","#595656");
				}*/
				$("input:eq("+page+")").attr("checked",true);
				if(page==0){}
				else
				{
					//$(".container a:eq("+page+")").animate({"background":"#58666E"},2000);
				}
				}
			
			}
		})
})
document.onkeyup=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	$(".container a").removeClass("hover");
	if(e&&e.keyCode==40||e&&e.keyCode==38){
        $(".container").find("a").removeClass("first_animation");
        $(".divv").removeClass("first_animation_divv");
		if(page==0&&$(".water p").attr("display","block"))
		{
			page_up();
		}
		else if(page==0&&$(".water p").attr("display","none"))
		{
			page_down();
		}
	}
	if(e&&e.keyCode==40){//下
		stopDefault(e)
		if(page==5)
		{
			page=0;
			if(page==0&&$(".water p").attr("display","none"))
			{
				page_down();
			}
					$("input:eq(0)").attr("checked",true);
				}
				else{
					page++;
					/*if(page==2){
						//icno_change();
					}
					else{
						$(".icno img").attr("src","img/logo.png");
						$(".icno img").css("border-right-color","#595656");
						$(".icno_tran").css("color","#595656");
					}*/
					$("input:eq("+page+")").attr("checked",true);
					if(page==0){}
					else{
					
					//$(".container a:eq("+page+")").addClass("hover");
					}
				}
			}
		if(e && e.keyCode==38){//上
		
			if(page==0){
					$("input:eq(5)").attr("checked",true);
					page=5;
				}
				else
				{
					page--; 
					/*if(page==2){
						//icno_change();
					}
					else{
						$(".icno img").attr("src","img/logo.png");
						$(".icno img").css("border-right-color","#595656");
						$(".icno_tran").css("color","#595656");
					}*/
					$("input:eq("+page+")").attr("checked",true);
					if(page==0&&$(".water p").attr("display","none"))
					{
						page_down();
					}
					else
					{
						//$(".container a:eq("+page+")").animate({"background":"#58666E"},2000);
					}
				}
		}
		

	}; 
function stopDefault(e) {  
	e = e || window.event;
    //如果提供了事件对象，则这是一个非IE浏览器   
	if(e && e.preventDefault) {  
　　	//阻止默认浏览器动作(W3C)  
　	e.preventDefault();  
} else {  
　　//IE中阻止函数器默认动作的方式   
　　e.returnValue = false;   
}  
return false;  
}  

function page_down(){
	$(".water p").stop(true).slideDown(1000)
	$(".divv").stop(true).animate({"margin-top":"340px"},500);
	$(".nav1").stop(true).animate({"margin-top":"340px"},500);
	$(".nav2").stop(true).animate({"margin-top":"340px"},500);
	$(".nav3").stop(true).animate({"margin-top":"340px"},500);
	$(".nav4").stop(true).animate({"margin-top":"340px"},500);
	$(".nav5").stop(true).animate({"margin-top":"340px"},500);
	$(".nav6").stop(true).animate({"margin-top":"340px"},500);
	$(".icno").stop(true).animate({"margin-top":"130px"},500);
}
function page_up(){
	$(".water p").stop(true).slideUp(500)
	$(".divv").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav1").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav2").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav3").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav4").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav5").stop(true).animate({"margin-top":"240px"},1000);
	$(".nav6").stop(true).animate({"margin-top":"240px"},1000);
	/*$(".icno").stop(true).animate({"margin-top":"200px"},2000);*/
}
function icno_change(){
	$(".img_icno").animate({"background":"img/icon_2.png"},2000);
	$(".img_icno").animate({"border-right":"#000"},2000);
	$(".icno_tran").animate({"color":"#000"},2000);
}