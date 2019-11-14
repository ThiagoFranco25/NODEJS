class Pessoa{
    private nome: string;
    private idade: number;

    HelloWorld(): string{
        return "Hello World! 2DS2";
    }
}

let p = new Pessoa ();

document.getElementById("texto").textContent = p.HelloWorld();
