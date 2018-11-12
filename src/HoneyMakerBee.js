class HoneyMakerBee extends Bee {
  // TODO..
  constructor (age, job){
  	super ()
  		super.age = 10;
  		super.job = 'make honey';
  		this.honeyPot = 0;
  }
  makeHoney (){
  	this.honeyPot++;
  }
  giveHoney (){
  	this.honeyPot--;
  }
};
