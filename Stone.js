class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the stone ball
		var stoneOptions={
	  'density':12,
      'friction': 0.9,
      'restitution':0.8
		}
       
	    this.height = height;
		this.width = width;

		this.body=Bodies.rectangle(x,y, width, height, stoneOptions)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			fill("black");
			rect(0,0, this.width, this.height);
			pop();
	}

}