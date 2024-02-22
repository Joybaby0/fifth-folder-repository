let contentContainer = document.querySelector(".content-container")
let tabsBtn = document.querySelectorAll(".tabs-btn")
let contentEl = document.querySelectorAll(".content")

contentContainer.addEventListener("click", function(e){
    let id = e.target.dataset.id
    if(id){
        tabsBtn.forEach(function(btn){
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        contentEl.forEach(function(contentt){
            contentt.classList.remove("active")
        })

        let element = document.getElementById(id)
        element.classList.add("active")
    }

})