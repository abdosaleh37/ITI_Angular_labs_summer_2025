let intervalId;
let childWindow;

let message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ipsam ad nostrum, 
    quod inventore autem ducimus accusantium cupiditate assumenda molestiae 
    veniam corrupti, laborum repellendus suscipit quae recusandae dolorem. 
    Harum, eos adipisci.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Ipsam ad nostrum, quod inventore autem ducimus accusantium cupiditate 
    assumenda molestiae veniam corrupti,laborum repellendus suscipit quae recusandae dolorem.`

function popUp(){
    childWindow = window.open(
        "message.html", "_blank",
        "width=500"
    );
}

let i = 0;
function start(){
    popUp();
    clearInterval(intervalId);
    i = 0;
    intervalId = setInterval(() => {

        childWindow.document.write(message[i]);
        i++;

        if(i == message.length){
            childWindow.close();
            clearInterval(intervalId);
            i = 0;
        }
    }, 50);
}

