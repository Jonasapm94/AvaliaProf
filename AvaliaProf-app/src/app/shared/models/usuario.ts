export class Usuario{

    public id:number;
    public nome:string;
    public matricula:string;
    public email:string;
    public senha:string;

    constructor(
         id:number,
         nome:string='',
         matricula:string='',
         email:string='',
         senha:string=''
    ){
        this.id = id;
        this.nome = nome;
        this.matricula = matricula;
        this.email = email;
        this.senha = senha;
    }
}
