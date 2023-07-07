package pweb.avaliaprof.modelo;


import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String nome;
    private String senha;
    private String email;
    private String matricula;

    public Usuario() {
    }
    public Usuario(String nome, String senha, String email, String matricula) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
        this.matricula = matricula;
    }

    public String getNome() {
        return this.nome;
    }

    public String getSenha() {
        return this.senha;
    }

    public String getEmail() {
        return this.email;
    }

    public String getMatricula() {
        return this.matricula;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public long getId() {
        return this.id;
    }
}
