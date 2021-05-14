 canvas=document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
 background_img="racing\ \(1\).jpg";
car1_img="car1.png";
 car1_X=10;
 car1_Y=10;
 car1_width=120;
 car1_height=70;
 car2_img="car2.png";
 car2_X=10;
 car2_Y=100;
 car2_width=120;
 car2_height=120;
 function add(){
     background_imgTag=new Image();
     background_imgTag.onload=uploadBackground;
     background_imgTag.src=background_img;

     car1_imgTag=new Image();
     car1_imgTag.onload=uploadcar1;
     car1_imgTag.src=car1_img;
    

     car2_imgTag=new Image();
     car2_imgTag.onload=uploadcar2;
     car2_imgTag.src=car2_img;
   
     } 
     function uploadBackground(){
         ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
     }

     function uploadcar1(){
        ctx.drawImage(car1_imgTag,car1_X,car1_Y,car1_width,car1_height);
    }
    function uploadcar2(){
      ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
  }
   window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
      Left_car1(); 
      console.log("left arrow key");
   }
   if(keypressed=="38"){
       Up_car1(); 
       console.log("up arrow key");
    }
    if(keypressed=="39"){
       Right_car1(); 
       console.log("right arrow key");
    }
    if(keypressed=="40"){
       Down_car1(); 
       console.log("down arrow key");
    } 
       if(keypressed=="65"){
         Left_car2(); 
         console.log("A key");
      }
      if(keypressed=="87"){
          Up_car2(); 
          console.log("W key");
       }
       if(keypressed=="68"){
          Right_car2(); 
          console.log("d key");
       }
       if(keypressed=="83"){
          Down_car2(); 
          console.log("s key");
       }
      }