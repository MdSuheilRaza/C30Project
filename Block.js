class Block extends ParentClass {
  constructor(x, y){
    super(x,y,50,50);
  }

  display(){
     if(this.body.speed<3){
      super.display();
     }

     else{
       World.remove(world,this.body);

       push()
       this.visiblity=this.visiblity-5;
       tint(255,this.visiblity);
       pop()
     }
  }

};