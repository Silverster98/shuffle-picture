var count = 0;
var timer;

window.onload = () => {
	var ulImg = document.getElementsByClassName("ul_img")[0];
	var liImg = document.getElementsByClassName("li_img");
	var arrows = document.getElementsByClassName("arrow");
	var divBtn = document.getElementsByClassName("div_btn");
	divBtn[0].style.backgroundColor = "aqua";
	
	showtime();

	function showtime() {
		timer = setInterval(() => {
			divBtn[count].style.backgroundColor = "aquamarine";
			count ++;
			if(count >= liImg.length){
				count = 0;
			}

			ulImg.style.transform = "translate("+ -400 * count +"px)";
			divBtn[count].style.backgroundColor = "aqua";

		}, 4000)
	}

	for(var i = 0; i < arrows.length; i++){
		arrows[i].onmouseover = () => {
			clearInterval(timer);
		}

		arrows[i].onmouseout = () => {
			showtime();
		}

		arrows[i].onclick = function() {
			divBtn[count].style.backgroundColor = "aquamarine";
			if(this.title == 0){
				count ++;
				if(count >= liImg.length){
					count = 0;
				}
			}
			else{
				count --;
				if(count < 0){
					count = liImg.length-1;
				}
			}

			ulImg.style.transform = "translate("+ -400 * count +"px)";
			divBtn[count].style.backgroundColor = "aqua";
		}
	}

	for(var b = 0; b < divBtn.length; b++){
		divBtn[b].index = b;

		divBtn[b].onmouseover = function() {
			clearInterval(timer);

			divBtn[count].style.backgroundColor = "aquamarine";
			divBtn[this.index].style.backgroundColor = "aqua";

			count = this.index;
			ulImg.style.transform = "translate("+ -400 * count + "px)";
		}

		divBtn[b].onmouseout = () => {
			showtime();
		}
	}
}