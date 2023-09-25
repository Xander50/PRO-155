AFRAME .registerComponent("game-play",{
    schema:{
        elementId :{type:"string",default:"#treasure1"}
    },
    update:function(){
        this.isCollided(this.data.elementId)
    },
    isCollided:function(elementId){
        const element=document.querySelector(elementId);
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#treasure")){
                console.log(elementId+" collision")
            }
            else if(elementId.includes("#fishes")){
                console.log("fish collision")
            }
        })
    }
})