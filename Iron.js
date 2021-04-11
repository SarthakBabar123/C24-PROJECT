class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the stone ball
		var ironOptions={
	  'density':30,
      'friction': 3,
      'restitution':0.8
		}
       
	    this.height = height;
		this.width = width;

		this.body=Bodies.rectangle(x,y, width, height, ironOptions)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			fill("grey");
			rect(0,0, this.width, this.height);
			pop();
	}

}