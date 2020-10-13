function createPopUp(info){
    let popup = document.createElement('div');
    popup.id = 'popup';
    /*popup.addEventListener('keydown', (event)=>{
        if(event.key === 13){
            document.removeChild(document.getElementById('popup'));
        }
    })*/
    document.getElementById("popups").appendChild(popup);
}
createPopUp('info');
