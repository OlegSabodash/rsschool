window.onload = function () {
	let buttoms = this.document.querySelectorAll("#slider-nav button");
	buttoms[0].click();
}

function Slider(element) {
	this.el = document.querySelector(element);
	this.init();
}

Slider.prototype = {
	init: function () {
		this.links = this.el.querySelectorAll("#slider-nav button");
		this.wrapper = this.el.querySelector("#slider-wrapper");
		this.navigate();
	},
	navigate: function () {

		for (let i = 0; i < this.links.length; ++i) {
			let link = this.links[i];
			this.slide(link);
		}
	},

	animate: function (slide) {
		let parent = slide.parentNode;
		let caption = slide.querySelector(".caption");
		let captions = parent.querySelectorAll(".caption");
		for (let k = 0; k < captions.length; ++k) {
			let cap = captions[k];
			if (cap !== caption) {
				cap.classList.remove("visible");
			}
		}
		caption.classList.add("visible");
	},

	slide: function (element) {
		let self = this;
		element.addEventListener("click", function (e) {
			e.preventDefault();
			let a = this;
			self.addClass(a);
			let index = parseInt(a.getAttribute("data-slide"), 10) + 1;
			let currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");

			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
			self.animate(currentSlide);

		}, false);
	},

	addClass: function (elem) {
		for (let i = 0; i < this.links.length; i++) {
			if (this.links[i] == elem) {
				this.links[i].classList.add("whiteBack");
				continue;
			}
			this.links[i].className = "";

		}
	}

};

let slider = new Slider("#slider");


let block = document.getElementById("tabs");
let spans = block.querySelectorAll("span");
let is = block.querySelectorAll('i');
let colomTwo = document.getElementById("colomTwo");


for (let i = 0; i < spans.length; i++)(function(i) {
	spans[i].onmouseover = function(){
		spans[i].classList.add("onMousOver");
		spans[i].style.marginLeft = "14px";
		colomTwo.style.position = "absolute";
		colomTwo.style.left = "665px";
		is[i].classList.add("onMousOver");

	};
	spans[i].onmouseout = function(){
		spans[i].classList.remove("onMousOver");
		spans[i].style.marginLeft = "0px";
		colomTwo.style.position = "static";
		colomTwo.style.left = "0px";
		is[i].classList.remove("onMousOver");
	};
	is[i].onmouseover = function(){
		is[i].classList.add("onMousOver");
		spans[i].classList.add("onMousOver");
		spans[i].style.marginLeft = "14px";
		colomTwo.style.position = "absolute";
		colomTwo.style.left = "665px";
		is[i].classList.add("onMousOver");

	};

	is[i].onmouseout = function(){
		is[i].classList.remove("onMousOver");
		spans[i].classList.remove("onMousOver");
		spans[i].style.marginLeft = "0px";
		colomTwo.style.position = "static";
		colomTwo.style.left = "0px";
		is[i].classList.remove("onMousOver");
	};
	
	
})(i);



let angle = document.getElementById("angleDown");
let select = document.getElementById("select");

angle.addEventListener("click",function(){
	select.onclick();
})




