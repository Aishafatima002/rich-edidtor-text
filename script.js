let buttons=document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach(function(button){
    button.addEventListener("click",()=>{
         var command=button.dataset["element"]
        console.log(command);
        if (command=="insertImage"|| command=="createLink") {
             var url=prompt("enter the link" ,"https://")
            document.execCommand(command,true,url)
        }
        else if(command=="hiliteColor"){
            var color=prompt("enter color of your choice","#FFFF00")
            document.execCommand(command,true,color)
        }
        else if(command=="foreColor"){
            var txtColor=prompt("enter text color","rgb(234,56,78)")
            document.execCommand(command,true,txtColor)
        }
        else if(command=="formatBlock"){
            var text=prompt("enter the  block format","eg(h1,h2 h3)")
            document.execCommand(command,true,text)
        }
        else if(command=="fontName"){
                var font=prompt("enter  font name","arial")
                document.execCommand(command,true,font)
        }
        else if(command=="fontSize"){
            var fontsize=prompt("enter a font size","1-7")
            document.execCommand(command,true,fontsize)
        }
        else{
        document.execCommand(command,false,null)
        }
    })
})