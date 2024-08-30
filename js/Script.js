/* Menu icon */
let MenuIcon = document.querySelector("#MenuIcon");
let navBar = document.querySelector(".Navbar");
let HiddenElements = document.querySelectorAll('.Hidden');

MenuIcon.onclick = () => {
	navBar.classList.toggle('active');
};


/* scroll sections active link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
	sections.forEach(sec => {
		let TopUp = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");
		
		if(TopUp >= offset && TopUp < offset + height){
			navLinks.forEach(links =>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		};
		
	
	});
	
	
	

	
	/* Header Effect */
	
	let header = document.querySelector('Header');
	
	header.classList.toggle('ShadowFlow', window.scrollY > 100);
	/* remove menu when clicking */
	navBar.classList.remove('active');
	showAnimation();
};
/* 
 Scroll animation */

function showAnimation() {
	HiddenElements.forEach((entry) =>{
		
		const Bounds = entry.getBoundingClientRect();
			
		if ((Bounds.top < 150 && Bounds.bottom < 150) || (Bounds.top > vh(100) && Bounds.bottom > vh(100))){
			entry.classList.remove('Show');
		} else {
			entry.classList.add('Show');
		}
	});
}
	
function vh(percent){
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (percent * h) / 100;
}

function vw(percent){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	return (percent * w) / 100;
}

function vmax(percent){
	return Math.max(vh(percent), vw(percent));
}
function vmin(percent){
	return Math.min(vh(percent), vw(percent));
}
