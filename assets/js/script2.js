const contentMenus = document.querySelectorAll(".content-menu")
const contents = document.querySelectorAll(".content")

Array.from(contentMenus).map((contentMenu)=>{
    Array.from(contents).map((content)=>{
        contentMenu.addEventListener("click", ()=>{            
            content.classList.remove("active")
            if(contentMenu.innerText==content.id){
                content.classList.add("content-block")
            }
            else{
                content.classList.remove("content-block")
            }
        })
       
    })
})