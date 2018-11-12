class ForagerBee extends Bee {
  // TODO..
  constructor (age, job){
  	super ()
  		super.age = 10;
  		super.job = 'find pollen';
  		this.canFly = true;
  		this.treasureChest = [];
  }
  forage (treasure){
  	this.treasureChest.push(treasure);
  }
};
