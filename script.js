class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.grades = [];
        this._presence = new Array(25);                                       
        this._count = 0;       
    }

    getAge() {
        return new Date().getFullYear() - this.year;
    }
            
    getGradeAverage() {        
        if (this.grades.length === 0) {
            return 0;
        } else {
            return Math.round(this.grades.reduce((sum, elem) => sum + elem) / this.grades.length);
        }           
    }

    present(grade) {
        if (this._count < this._presence.length) {
            this._presence[this._count++] = true;
            if (grade !== undefined) {
                this.grades.push(grade);
            }        
        }
    }

    absent() {
        if (this._count < this._presence.length) {
            this._presence[this._count++] = false;
        }                                                 
    }

    summary() {
        let gradeAverage = this.getGradeAverage();

        let presenceQuantity = 0;
        for (let elem of this._presence) {
            if (elem === true) {
                presenceQuantity++;
            }
        }

        let absenceQuantity = 0;
        for (let elem of this._presence) {
            if (elem === false) {
                absenceQuantity++;
            }
        }

        let presenceAverage = presenceQuantity / (presenceQuantity + absenceQuantity);

        if (gradeAverage >= 90 && presenceAverage >= 0.9) {
            return 'Молодець!';                                            
        } if (gradeAverage >= 90 && presenceAverage < 0.9) {
            return 'Добре, але можна краще';
        } if (gradeAverage < 90 && presenceAverage >= 0.9) {
            return 'Добре, але можна краще';
        } if (gradeAverage < 90 && presenceAverage < 0.9) {
            return 'Редиска!';
        }
    }
}

let student1 = new Student('Ann', 'Smith', 2003);
let student2 = new Student('John', 'White', 2001);
let student3 = new Student('Mary', 'Brown', 2005);

console.log(student1.getAge());
console.log(student2.getAge());
console.log(student3.getAge());

student1.present(95);
student1.present(100);
student1.present();
student1.present(97);
student1.present();

student2.present(70);
student2.absent();
student2.absent();
student2.absent();
student2.absent();

student3.present(50);
student3.present(70);
student3.present(50);
student3.present(30);
student3.present(90);

console.log(student1.getGradeAverage());                          
console.log(student2.getGradeAverage());
console.log(student3.getGradeAverage());

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());




