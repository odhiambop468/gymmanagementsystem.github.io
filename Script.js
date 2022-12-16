// for header

let menu = document-queryseletor('menu-btn');
let navbar =  document-queryseletor('navbar');

menu.onclick = () =>{
	menu.classlist.toggle('fa-times');
	navbar.classlist.toggle('active');
}
//for window scroll

window.onscroll = () =>{
	menu.classlist.remove('fa-times');
	navbar.classlist.remove('active');

	if(window.scrollY > 0){
		document .queryseletor('.header').classlist.add('active');
	}else{
		document .queryseletor('.header').classlist.remove('active');
	}
}