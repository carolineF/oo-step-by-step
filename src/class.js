function Class(number) {
  this.number = number;
}

Class.prototype.assignLeader = function(student) {
  this.leader = student;
};

module.exports = Class;
