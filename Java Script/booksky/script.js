var popupoverlay = document.querySelector(".popupoverlay")
var popupbox = document.querySelector(".popupbox")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(event){
           event.preventDefault()
           popupoverlay.style.display="none"
           popupbox.style.display="none"
})


var container = document.querySelector(".container")
var addbook = document.getElementById("addbook")
var booktitle = document.getElementById("inputtitle")
var bookauthor = document.getElementById("inputauthor")
var bookdescription = document.getElementById("textarea")

addbook.addEventListener("click",function(event){
    event.preventDefault()
   var div = document.createElement("div")
   div.setAttribute("class","book-container") 
   div.innerHTML=`<h2>${booktitle.value}</h2><br>
                  <h4>${bookauthor.value}</h4><br>
                  <p>${bookdescription.value}</p><br>
                  <button onclick="deletebook(event)">Delete</button>`
   container.append(div)
   popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}