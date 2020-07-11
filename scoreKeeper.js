var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resetbtn = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;
p1.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		if(p1score === winningScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
	
});
p2.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		if(p2score === winningScore){
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2score;
	}
});
function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameOver = false;
}
resetbtn.addEventListener("click",function(){
	reset();
});


numInput.addEventListener("change", function(){
	winDisplay.textContent= this.value;
	winningScore = Number(this.value);
	reset();
})