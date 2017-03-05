window.onload = prepareLinks

// after window loaded dom
function prepareLinks(){
    var links = document.getElementsByTagName('a')
    for(var i = 0; i<links.length; i++){
        if(links[i].getAttribute("class") === 'popup'){
            links[i].onclick = function() {
                popUp(this.getAttribute('href'))
                return false
            }
        }
    }
}
// pop up window
function popUp(href){
    window.open(href, 'PopUp', 'width=320, height=480')
}