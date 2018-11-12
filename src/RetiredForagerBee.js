class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor (age, job, canFly, color, forage, treasureChest){
  	super()
  		super.age = 40;
  		super.job = 'gamble';
  		super.canFly = false;
  		super.color = 'grey';
  		super.treasureChest = [];
  }
   forage (){
  	return "I am too old, let me play cards instead";
  }
  gamble (treasure){
  	this.treasureChest.push(treasure);
  }
};
