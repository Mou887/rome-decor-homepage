let currentindex = 0;
document.addEventListener("DOMContentLoaded", () => {
	console.log("I am here");
	let slides = document.querySelectorAll(".one");
	console.log(slides);
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[currentindex].style.display = "flex";
	const rbtns = document.querySelectorAll(".right-arrow")
	rbtns.forEach(btn => {
		btn.addEventListener("click", () => {
			console.log(currentindex);
			currentindex++;
			console.log(currentindex);
			for (let i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			if (currentindex >= slides.length) {
				currentindex = 0
			}
			slides[currentindex].style.display = "flex";
			console.log(currentindex);
		});
	
	})
	const lbtns = document.querySelectorAll(".left-arrow")
	lbtns.forEach(btn => {
		btn.addEventListener("click", () => {
			console.log(currentindex)
			currentindex--;
			console.log(currentindex)
			if (currentindex < 0) {
				currentindex = slides.length - 1
			}
			for (let i = slides.length - 1; i >= 0; i--){
				slides[i].style.display = "none";
				
			}
			slides[currentindex].style.display = "flex";
			console.log(currentindex);

		})
	})
	const divs = document.querySelectorAll(".icon-div");
	const tdivs = document.querySelector(".blackout")
			const hamburger = document.querySelectorAll(".hbimg")
	        console.log("Ham clicked!")
	        console.log(hamburger)
	        hamburger.forEach(hb => {
				hb.addEventListener("click", () => {
					hb.style.display = "none"
					const img2s = document.querySelectorAll(".firstImage")
					img2s.forEach(img2 => {
						img2.style.marginTop = "10%"
					})
			const mobilemenu = document.querySelectorAll(".mobilemenu")
			console.log(mobilemenu)
				mobilemenu.forEach(menu => {	
					menu.style.display = "flex";
					divs.forEach(div => {
						div.style.pointerEvents = "none"
					})
					tdivs.style.display = "block"
			})
		})
	})
			
	const closeBtns = document.querySelectorAll(".closeButton")
	console.log(closeBtns)
	    closeBtns.forEach(closeBtn => {
			closeBtn.addEventListener("click", () => {
			const img2s = document.querySelectorAll(".firstImage");
			img2s.forEach((img2) => {
				img2.style.marginTop = "0%";
			})
				const mobilemenu = document.querySelectorAll(".mobilemenu");
				console.log(mobilemenu);
				mobilemenu.forEach((menu) => {
					menu.style.display = "none";
					divs.forEach((div) => {
						div.style.pointerEvents = "auto";
					});
					hamburger.forEach(hb => {
						hb.style.display = "block"
					})
					tdivs.style.display = "none"
				});
			
			
			
		})
	})
		
})