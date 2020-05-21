let button = document.querySelectorAll("button");
let output = document.querySelector(".output");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(){
        if (this.innerHTML === "AC" ) {
            output.innerHTML = "";
        } else if(this.innerHTML === "=" ) {
            output.innerHTML = eval(output.innerHTML);
        }else{
            output.innerHTML += this.innerHTML;
        }
    })
    
}