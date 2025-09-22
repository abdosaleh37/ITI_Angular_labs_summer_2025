function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    if(e.target.className  === 'label') {
        alert("You cannot add over another label")
    }
    else{
        e.target.prepend(document.getElementById(data));
    }
}