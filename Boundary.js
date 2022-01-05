class Boundary{
    constructor(x,y,w,l){
        var options ={
            isStatic: true
           };

        this.body=Bodies.rectangle(x,y,w,l,options);
        World.add(world,this.body);
        this.width =w;
        this.length = l;
    }

    display(){
        push();
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.length);
        pop();
    }
}