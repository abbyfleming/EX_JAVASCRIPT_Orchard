
/* ----- TREE ----- */

//Base Tree
function Tree(){
	this.branches = 0;
}

Tree.prototype.grow = function(growNumber){
	this.height += growNumber;
}

Tree.prototype.trim = function(decreaseNumber){
	this.height -= decreaseNumber;
	this.branches -= 1;
}



/* ----- PLANT ----- */

//Base Plant, a prototype of Tree
function Plant(){
	this.height = 0;
}

Tree.prototype = new Plant();

Plant.prototype.increaseHeight = function(growNumber){
	this.height += growNumber;
}

Plant.prototype.decreaseHeight = function(decreaseNumber){
	this.height -= decreaseNumber;
}



/* ----- NEW INSTANCES ----- */

let PearTree = new Tree;
//console.log("Pear Tree --> ", PearTree);


let OakTree = new Tree;
//console.log("Oak Tree --> ", OakTree);


OakTree.increaseHeight(2);

console.log(OakTree);








