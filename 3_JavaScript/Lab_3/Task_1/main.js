let intervalId;
let childWindow;

function popUp(){
    childWindow = window.open(
        "scroll.html", "_blank",
        "width= 600, height=2000, top=150, left=100"
    );
}
let i = 0;
function start(){
    popUp();
    clearInterval(intervalId);
    intervalId = setInterval(() => {
            childWindow.scrollBy(0, 20);
            i += 20;
            if(childWindow.document.body.scrollHeight - childWindow.innerHeight < i){
                childWindow.close();
                clearInterval(intervalId);
                i = 0;
            }
        }
    , 100);
}