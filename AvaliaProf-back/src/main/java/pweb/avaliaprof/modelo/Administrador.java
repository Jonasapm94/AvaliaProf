package pweb.avaliaprof.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;
@Entity
public class Administrador {
    @Id
    private String login;
    private String senha;

    @OneToMany
    private List<Usuario> usuarios = new ArrayList<Usuario>();
    @OneToMany
    private List<Disciplina> disciplinas = new ArrayList<Disciplina>();
    @OneToMany
    private List<Avaliacao> avaliacoes = new ArrayList<Avaliacao>();

    public Administrador(){}
    public Administrador(String login, String senha){
        this.login = login;
        this.senha = senha;
    }

    public String getLogin(){
        return this.login;
    }

    public String getSenha(){
        return this.senha;
    }

    public void setLogin(String login){
        this.login = login;
    }

    public void setSenha(String senha){
        this.senha = senha;
    }

    public void cadastrarUsuario(Usuario usuario){
        this.usuarios.add(usuario);
    }

    public void alterarUsuario(Usuario usuario){
        int index = this.usuarios.indexOf(usuario);
        this.usuarios.set(index, usuario);
    }

    public void removerUsuario(Usuario usuario){
        this.usuarios.remove(usuario);
    }

    public void cadastrarDisciplina(Disciplina disciplina){
        this.disciplinas.add(disciplina);
    }

    public void alterarDisciplina(Disciplina disciplina){
        int index = this.disciplinas.indexOf(disciplina);
        this.disciplinas.set(index, disciplina);
    }

    public void removerDisciplina(Disciplina disciplina){
        this.disciplinas.remove(disciplina);
    }

    public void cadastrarAvaliacao(Avaliacao avaliacao){
        this.avaliacoes.add(avaliacao);
    }

    public void removerAvaliacao(Avaliacao avaliacao){
        this.avaliacoes.remove(avaliacao);
    }

    public void alterarAvaliacao(Avaliacao avaliacao){
        int index = this.avaliacoes.indexOf(avaliacao);
        this.avaliacoes.set(index, avaliacao);
    }

}
