let imgdiv = document.querySelectorAll(".img")
let h1 = document.querySelectorAll("h1")
let img = document.querySelectorAll("img")
let count = 0
var v = []
imgdiv.forEach((e)=>{
    
    v.push(e)
    
    e.addEventListener("click",(f)=>{
        for(e of v){
            if(e.children[1]==f.target){
                e.classList.add("active")
                e.children[0].classList.add("active")
                e.children[1].classList.add("active")
            }
            else{
                e.classList.remove("active")
                e.children[0].classList.remove("active")
                e.children[1].classList.remove("active")
            }
        }
        
        
    })
    
    
    
})

