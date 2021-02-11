class box {
    constructor(x,y,width,height) {
      var options = {
          //isStatic: false,
          restitution:0.1,
            //friction:1.0,
            //density:0.0001,
         // dencity:0.1,
          //friction:2
      }
      
      this.body = Bodies.rectangle(x,y,30,40,options);
      this.width = 30;
      this.height = 40;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      //cansole.log(this.body.speed);
      if(this.body.speed<3){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
      fill("blue");
      strokeWeight(2);
      stroke("white")
      rect(0, 0, this.width, this.height);
       pop();
      }else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        pop();
      }
      
      
    }

    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score++;
      }
    }

  };