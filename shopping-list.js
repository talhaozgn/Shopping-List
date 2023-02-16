var ul = document.getElementsByTagName("ul")[0];
var input = document.getElementById("userinput");
var button = document.getElementsByTagName("button")[0];

// ul.addEventListener("click",function(){   ////// burda function(x) yazip event yerine x de yazabilirsin
// 	console.log("CLICK!!!");
// 	console.log(event.target.nodeName)

// 	if(event.target.className == "delbutton") { ////////  DELETE ITEM
// 		event.target.parentElement.remove()
// 	}

// 	if(event.target.nodeName == "LI") {
// 		event.target.classList.toggle("done")   ////////  DONE ITEM 
// 	}
// })


ul.onclick = function(){   ////// burda function(x) yazip event yerine x de yazabilirsin
	console.log("CLICK!!!");
	console.log(event.target.nodeName)

	if(event.target.className == "delbutton") { ////////  DELETE ITEM
		event.target.parentElement.remove()
	}

	if(event.target.nodeName == "LI") {
		event.target.classList.toggle("done")   ////////  DONE ITEM 
	}
}

/////////////////////////////////////////////////////////  ADD ITEM
button.addEventListener("click",additemclick)
input.addEventListener("keypress", additementer)

function additem(){
	if(input.value.length > 0){

	var button = document.createElement("button")
	button.classList.add("delbutton")
	button.appendChild(document.createTextNode("Del"))

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value))
	
	li.appendChild(button)
	ul.appendChild(li)
	input.value = ""}

}

function additemclick(){
	additem()
}

function additementer(event){
	if (event.keyCode == 13){
		additem()
	}
}