window.onload = prepareLinks
window.onload = prepareImages

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
    window.open(href, 'popup', 'width=200, height=100')
}
// image gallery
function prepareImages(){
    // method check
    if(!document.getElementsByTagName || !document.getElementById){
        return false
    }
    // element check
    if(!document.getElementById('imagegallery')){
        return false
    }

    var gallery = document.getElementById('imagegallery')
    var links = gallery.getElementsByTagName('a')
    // links.forEach((link) => {
    //     link.onclick = function() {
    //         showPic(this)
    //         return false
    //     }
    // })
    for(let i = 0; i<links.length; i++){
        links[i].onclick = function() {
            showPic(this)
            return false
        }
    }
}

function showPic(whichPic){
    var source = whichPic.getAttribute('href')
    var placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src',source)
    var text = whichPic.getAttribute('title')
    var description = document.getElementById('description')
    description.firstChild.nodeValue = text
}

