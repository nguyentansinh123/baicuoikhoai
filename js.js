class ProductCard extends HTMLElement {
    constructor(){
        super()
        this.innerHTML=`  <div  class="product">
        <img src="${this.getAttribute('avatar')}" alt="">
        <p class="product-name">${this.getAttribute('name')}</p>
        <p class="product-price">Price : ${this.getAttribute('price')}</p>
        <button class="mybtn">BUY ME</button>  
        
    </div>
`
    }
}
    window.customElements.define('product-card',ProductCard)

    const navslide = ()=>{
        const space = document.querySelector('.space')
        const navlinks = document.querySelector('.nav-links')
        const nav = document.querySelectorAll('.nav-links li')
    
        space.addEventListener('click' , ()=>{
            navlinks.classList.toggle('nav-active')
        })
    
        nav.forEach((link,index) => {
        link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
        })
    }
    
    navslide()
    
    let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
        let searchBtn = document.querySelector(".bx-search");
    
        btn.onclick = function() {
        sidebar.classList.toggle("active");
        if(btn.classList.contains("bx-menu")){
        btn.classList.replace("bx-menu" , "bx-menu-alt-right");
        }else{
        btn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
        }
        searchBtn.onclick = function() {
        sidebar.classList.toggle("active");
        }
    
        var noti = document.querySelector('p');
        // noti.addEventListener('click' , ()=>{
        //     alert("clicked")
        // })
        var select = document.querySelector('#select');
        var button = document.getElementsByTagName('button');
        for(var but of button){
            but.addEventListener('click', (e)=>{
                var parent = e.target.parentNode;
                var clone = parent.cloneNode(true);
                select.appendChild(clone);
                clone.lastElementChild.innerText = "Buy-now";
                
                if (clone) {
                    noti.onclick = ()=>{
                        select.classList.toggle('display');
                    }	
                }
            })
        }
        
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page){
let liTag = '';
let active;
let beforePage = page - 1;
let afterPage = page + 1;
    if(page > 1){ 
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
}
    if(page > 2){ 
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if(page > 3){ 
    liTag += `<li class="dots"><span>...</span></li>`;
    }
}

if (page == totalPages) {
    beforePage = beforePage - 2;
} else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
}

if (page == 1) {
    afterPage = afterPage + 2;
} else if (page == 2) {
    afterPage  = afterPage + 1;
}
for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) { 
    continue;
    }
    if (plength == 0) { 
    plength = plength + 1;
    }
    if(page == plength){ 
    active = "active";
    }else{ 
    active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
}
    if(page < totalPages - 1){
    if(page < totalPages - 2){ 
    liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
}
    if (page < totalPages) { 
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
}
    element.innerHTML = liTag; 
    return liTag; 
}    