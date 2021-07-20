class Person {
    constructor(name, parents){
      this.name = name;
      this.parents = parents;
    }
    
    childOf(){
      return this.parents.map(parent => parent.name).join(" & ") || "unknown";
    }
  
  }

  const georgeVI = new Person("George", []);
  const elizabeth = new Person("Elizabeth", []);
  const elizabethII = new Person("Elizabeth II", [georgeVI, elizabeth]);
  const phillip = new Person("Phillip", []);
  const charles = new Person("Charles", [phillip, elizabethII]);
  console.log(elizabethII.childOf());
  console.log(georgeVI.childOf());

  module.exports = Person;