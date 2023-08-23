//Your code goes here 
	// Your code here.

let lists = document.getElementsByClassName("list");

let right = document.getElementById("right");
let left = document.getElementById("left"); // Fix: Use a different variable name here

for(let listItem of lists){ // Fix: Use a different variable name here
	listItem.addEventListener("dragstart", function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
		let selected = e.target;

		right.addEventListener("dragover", function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
			e.preventDefault();
		});

		right.addEventListener("drop",function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
			right.appendChild(selected);
			selected=null;
		});
	});
}

let rlists = document.getElementsByClassName("list");

for(let listItem of rlists){ // Fix: Use a different variable name here
	listItem.addEventListener("dragstart", function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
		let selected = e.target;

		left.addEventListener("dragover", function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
			e.preventDefault();
		});

		left.addEventListener("drop",function(e){ // Fix: Use "addEventListener" instead of "addEventListner"
			left.appendChild(selected);
			selected=null;
		});
	});
}