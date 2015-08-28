function Class(number) {
  this.number = number;
}

Class.prototype.assignLeader = function(student) {

  if(!student.class || (student.class.number !== this.number)) {
    return 'It is not one of us.';
  }
  this.leader = student;
};

Class.prototype.appendMember = function(student) {
  student.class = this;
};

module.exports = Class;
