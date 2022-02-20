(function registerListenerToPanel(){
    const list= document.getElementsByClassName("acc-list");
    if(list){
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.addEventListener("click",function(){              
               const panel= this.querySelector(".panel-content");
               const panelHeight=panel.style.height=="0px" || panel.style.height=='';
               panel.style.height=panelHeight?"80px":"0px";              
            })            
        }
    }
})();

