class Calc {
  private name: string;
  private age = 0;
  private weigth = 0;
  private height = 0;

  constructor(name: string, age: number, weigth: number, height: number) {
    this.name = name;
    this.age = age;
    this.weigth = weigth;
    this.height = height;
  }

  getName = () => {
    console.log(`Nome: ${this.name}`);
  };
  getAge = () => {
    console.log(`Nome: ${this.age}`);
  };
  getWeigth = () => {
    console.log(`Nome: ${this.weigth}`);
  };

  setName = (name: string) => {
    this.name = name;
    console.log(`Nome: ${this.name}`);
  };
  setAge = (age: number) => {
    if (age < 0) {
      console.log('Idade Inválida');
    }
    this.age = age;
    console.log(`Idade: ${this.age}`);
  };
  setWeigth = (weigth: number) => {
    if (weigth < 0) {
      console.log('Peso Inválida');
    }
    this.weigth = weigth;
    console.log(`Peso: ${this.weigth}`);
  };

  imc(weigth: number, height: number): number {
    if (weigth < 0 || height < 0) {
      console.log('Dados inválidos');
    }
    const imc = weigth / (height * height);
    return +imc.toFixed(2);
  }
  getImc(): void {
    const imc = this.imc(this.weigth, this.height);
    if (imc < 18.5) {
      console.log(`Abaixo do peso - IMC: ${imc}`);
    }
    if (imc >= 18.5 && imc <= 25) {
      console.log(`Peso normal - IMC ${imc}`);
    }
    if (imc > 25 && imc <= 30) {
      console.log(`Sobrepeso - IMC ${imc}`);
    }
    if (imc > 30) {
      console.log(`Obeso - IMC ${imc}`);
    }
  }
}

const ImcMariaM = new Calc('José', 50, 40, 1.8);
const ImcJoseR = new Calc('José', 50, 75, 1.8);
const ImcJoseS = new Calc('José', 50, 85, 1.8);
const ImcJoseXl = new Calc('José', 50, 200, 1.8);
const ImcJota = new Calc('JOTA', 29, 60, 1.63);

ImcMariaM.getImc();
ImcJoseR.getImc();
ImcJoseS.getImc();
ImcJoseXl.getImc();
ImcJota.getImc();
