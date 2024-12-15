let lists=document.getElementsByClassName("list");
let leftbox=document.getElementById("left");
let rightbox=document.getElementById("right");



for(item of lists){
    item.addEventListener("dragstart",function(e){
        let selected=e.target;

        rightbox.addEventListener("dragover",function(e){
             e.preventDefault();
        });
        rightbox.addEventListener("drop",function(e){
             e.preventDefault();
            rightbox.appendChild(selected);
            selected=null;
        });
        leftbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });
        leftbox.addEventListener("drop",function(e){
            e.preventDefault();
            leftbox.appendChild(selected);
            selected=null;
        });
    })
}
