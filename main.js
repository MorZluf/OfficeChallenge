
class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }
    work(office) {
        for (let i = 0; i < 10; i++) {
            document[i] = new Document(this.name)
            office.documents.push(document[i])
        }
    }
}

class Manager {
    constructor(name, employees) {
        this.name = name
        this.employees = []
    }

    hireEmployee(name) {
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }

    askEmployeesToWork(office) {
        this.employees.forEach(e => e.work(office))
    }
}


class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name) {
        const newCleaner = new Cleaner(name)
        this.cleaners.push(newCleaner)
    }
    hireManager(name) {
        const newManager = new Manager(name)
        this.managers.push(newManager)
    }
    startWorkDay() {
        this.managers.forEach(m => m.askEmployeesToWork(this))
        this.cleaners.forEach(c => c.clean())
    }
}

