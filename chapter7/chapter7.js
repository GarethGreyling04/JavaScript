// Employee class
class Employee {
    constructor(firstName, lastName, yearsWorked) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearsWorked = yearsWorked;
    }
  
    // Prototype method to return employee details
    getDetails() {
      return `${this.firstName} ${this.lastName} has worked at the company for ${this.yearsWorked} years.`;
    }
  }
  
  // Creating employees
  const employee1 = new Employee("John", "Doe", 3);
  const employee2 = new Employee("Jane", "Smith", 5);
  
  // Adding employees to an array
  const employeesArray = [employee1, employee2];
  
  // Iterating and outputting results to the console
  employeesArray.forEach((employee) => {
    console.log(employee.getDetails());
  });