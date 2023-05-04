//Programacão Orientada a Objetos é um paradigma de programação baseado no conceito de objestos, que podem conter dados na forma como atributos e códigos, na forma de procedimentos, como métodos.

class User{
    name: string;
    age: number; 
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(this.name)
    }
}
const user: User = new User('Jota', 29)
user.showInfo()