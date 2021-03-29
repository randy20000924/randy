function change() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#H1").text("CSIE@CGU");
        });
        $("button").click(function(){
            $("#P").text("怎麼那麼棒！！");
        });
    });
   
    }
function myFunction() { 
var btn = document.createElement("BUTTON"); 
btn.innerHTML = "CLICK ME"; 
document.body.appendChild(btn).addEventListener("click", change); 
}