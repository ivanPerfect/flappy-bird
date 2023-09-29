const block = document.querySelector("#block");
const hole = document.querySelector("#hole");
const bird = document.querySelector("#bird");

let jumpi = 0;
let count = 0;
let interval = 10;

hole.addEventListener("animationiteration", () => {
  let random = -(Math.random() * 300 + 150);
  hole.style.top = random + "px";
  count++;
});

setInterval(() => {
  let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
  if (jumpi === 0) {
    bird.style.top = birdTop + 3 + "px";
  }

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  let holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue("top")
  );
  let bTop = -(500 - birdTop);
  if (
    birdTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (bTop < holeTop || bTop > holeTop + 130))
  ){
    alert(`gameover over, score: ${count-1}`)
    bird.style.top= 100+"px";
    count=0;
  }
}, interval);


function jump() {
    jumpi= 1;
    let jumpCount = 0;
    const jumpInt = setInterval(()=>{
        let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));

        if (birdTop> 6 && jumpCount < 15){
            bird.style.top=birdTop-5+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInt);
            jumpi = 0;
            jumpCount=0;
        }
        jumpCount++;
    }, interval)
}