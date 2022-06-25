// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const LeftNumbers = dodger.stytle.left.replace("px", "");
    const left = parseint(LeftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left -1}px`;
    }
};
document.addEventListener("keydown", function (e) {
    if (e.key === "arrowleft") {
        moveDodgerLeft();
    }
});
function moveDodgerRight(){
    const leftNumbers =dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);
if (left > 179){
dodger.style.left = `${left+1}px`;
}
};
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});