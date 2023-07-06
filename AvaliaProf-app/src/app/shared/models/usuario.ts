export class Usuario{

    private _id:number;
    private _nome:string;
    private _matricula:string;
    private _email:string;
    private _senha:string;
    
    constructor(
         id:number,
         nome:string='',
         matricula:string='',
         email:string='',
         senha:string=''
    ){
        this._id = id;
        this._nome = nome;
        this._matricula = matricula;
        this._email = email;
        this._senha = senha;
    }

    public getId():number{
        return this._id;
    }

    public setId(id:number):void{
        this._id = id;
    }

    public getNome():string{
        return this._nome;
    }

    public setNome(nome:string):void{
        this._nome = nome;
    }

    public getMatricula():string{
        return this._matricula;
    }

    public setMatricula(matricula:string):void{
        this._matricula = matricula;
    }

    public getEmail():string{
        return this._email;
    }

    public setEmail(email:string):void{
        this._email = email;
    }

    public getSenha():string{
        return this._senha;
    }
    
    public setSenha(senha:string):void{
        this._senha = senha;
    }
    
}