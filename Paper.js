class Paper
{
    constructor(x,y,r)

{

this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,this.r/2)
}

display()
{
    var paperpos=this.body.position;
 var angle=this.body.angle
    push ()
    translate (paperpos.x,paperpos.y)
   rotate (angle)
    strokeWeight(3)
    fill (255,0,255)
    ellipse(0,0,this.r,this.r)
    pop ();

}
}