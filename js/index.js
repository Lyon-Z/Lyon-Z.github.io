window.onload = function(){
	var wh = window.innerHeight;
	var ww = window.innerWidth;
	var num = 0;
	var chgpage1 = document.getElementById('chgbtn1');
	var chgpage2 = document.getElementById('chgbtn2');
	var page1 = document.querySelector('.pageone');//新增选择器
	var page2 = document.querySelector('.pagetwo');
	var page3 = document.querySelector('.pagethree');
	chgpage1.addEventListener('click',function(){
		if (num < 2){ //判断是否到底部
			num +=1;
			page1.style.height = wh + 'px';
			page1.style.top = '-' + wh*num + 'px';
			page2.style.height = wh + 'px';
			page2.style.top = '-' + wh*(num-1) + 'px';
			page3.style.height = wh + 'px';
		}else{
			alert('到底了')
		}	
	});
	chgpage2.addEventListener('click',function(){
		if (num > 0) { //判断是否到达顶部
			num -=1;
			page1.style.height = wh + 'px';
			page1.style.top = '-' + wh*num + 'px';
			page2.style.height = wh + 'px';
			page2.style.top = '-' + wh*(num-1) + 'px';
			page3.style.height = wh + 'px';
		}else{
			alert('到顶了')
		}
	});
	//第一页显示信息点击事件
	var myinfo_name = document.querySelector('.myinfo_name');
	var myinfo_sex = document.querySelector('.myinfo_sex');
	var myinfo_like = document.querySelector('.myinfo_like');
	var myinfo_instro = document.querySelector('.myinfo_instro');
	var myinfo_site = document.querySelector('.myinfo_site');
	var myinfo_call = document.querySelector('.myinfo_call');
	myinfo_name.onmouseover =  function(){
		showContent('myinfo_name_detail','myinfo_name_line');
	}
	myinfo_name.onmouseout = function(){
		hiddenContent('myinfo_name_detail','myinfo_name_line');	
	}
	myinfo_sex.onmouseover =  function(){
		showContent('myinfo_sex_detail','myinfo_sex_line');
	}
	myinfo_sex.onmouseout = function(){
		hiddenContent('myinfo_sex_detail','myinfo_sex_line');	
	}
	myinfo_like.onmouseover =  function(){
		showContent('myinfo_like_detail','myinfo_like_line');
	}
	myinfo_like.onmouseout = function(){
		hiddenContent('myinfo_like_detail','myinfo_like_line');	
	}
	myinfo_instro.onmouseover =  function(){
		showContent('myinfo_instro_detail','myinfo_instro_line');
	}
	myinfo_instro.onmouseout = function(){
		hiddenContent('myinfo_instro_detail','myinfo_instro_line');	
	}
	myinfo_site.onmouseover =  function(){
		showContent('myinfo_site_detail','myinfo_site_line');
	}
	myinfo_site.onmouseout = function(){
		hiddenContent('myinfo_site_detail','myinfo_site_line');	
	}
	myinfo_call.onmouseover =  function(){
		showContent('myinfo_call_detail','myinfo_call_line');
	}
	myinfo_call.onmouseout = function(){
		hiddenContent('myinfo_call_detail','myinfo_call_line');	
	}
	//显示函数
	function showContent(newClassName1,newClassName2){
		var attribute_detail = document.querySelector('.'+newClassName1);
		var attribute_line = document.querySelector('.'+newClassName2);
		attribute_line.className = newClassName2 + ' myinfo_line_style';
		attribute_detail.className = newClassName1 + ' myinfo_border_style';
		attribute_detail.childNodes[1].style.display = 'none';
		attribute_detail.childNodes[3].style.display = 'block';
	}
	//隐藏函数
	function hiddenContent(newClassName1,newClassName2){
		var attribute_detail = document.querySelector('.'+newClassName1);
		var attribute_line = document.querySelector('.'+newClassName2);
		attribute_line.className = newClassName2;
		attribute_detail.className = newClassName1;
		attribute_detail.childNodes[1].style.display = 'block';
		attribute_detail.childNodes[3].style.display = 'none';
	}
	//第二页查看项目图片
	var btnimg1 = document.getElementById('btn_img_1');
	var btnimg2 = document.getElementById('btn_img_2');
	var btnimg3 = document.getElementById('btn_img_3');
	var workspc = document.querySelector('.works_pc');
	var worksyd = document.querySelector('.works_yd');
	var workswx = document.querySelector('.works_wx');
	var closebtn1 = document.querySelector('.works_pc_btn1');
	var closebtn2 = document.querySelector('.works_pc_btn2');
	var closebtn3 = document.querySelector('.works_pc_btn3');
	closebtn1.onclick = function(){
		workspc.style.display = 'none';
	}
	closebtn2.onclick = function(){
		worksyd.style.display = 'none';
	}
	closebtn3.onclick = function(){
		workswx.style.display = 'none';
	}

	btnimg1.onclick = function(){
		workspc.style.display = 'block';
	}
	btnimg2.onclick = function(){
		worksyd.style.display = 'block';
	}
	btnimg3.onclick = function(){
		workswx.style.display = 'block';
	}
	//查看大图
	var checkimg = document.querySelectorAll('.works_pc_1');
	for (let i = 0; i < checkimg.length; i++) {
		for (let j = 1; j < checkimg[i].children.length; j++) {
			checkimg[i].children[j].onclick = function(){
				var imgsrc = checkimg[i].children[j].src;
				var bigimg = document.querySelector('.checkimg');
				bigimg.style.display = 'block';
				bigimg.children[0].src = imgsrc;
			};
		}
	}
	var bigimg = document.querySelector('.checkimg');
	bigimg.onclick = function(){
		bigimg.style.display = 'none';
	}
}