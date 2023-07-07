package pweb.avaliaprof.modelo;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Professor extends Usuario{
    @ManyToMany(mappedBy = "professores", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Disciplina> disciplinas = new ArrayList<Disciplina>();

    @OneToMany(mappedBy = "professor", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Avaliacao> avaliacoes = new ArrayList<Avaliacao>();

    private String formacao;

    public Professor() {
        super();
    }
    public Professor( String nome,
                      String senha,
                      String email,
                      String matricula,
                      String formacao,
                      List<Disciplina> disciplinas) {
        super( nome, senha, email, matricula);
        this.formacao = formacao;
        this.disciplinas = disciplinas;
    }

    public List<Disciplina> listarDisciplinas() {
        return this.disciplinas;
    }

    public List<Avaliacao> listarAvaliacoes() {
        return this.avaliacoes;
    }

    public void removerAvaliacao(Avaliacao avaliacao) {
        this.avaliacoes.remove(avaliacao);
    }

    public void adicionarAvaliacao(Avaliacao avaliacao) {
        this.avaliacoes.add(avaliacao);
    }

    public void adicionarDisciplina(Disciplina disciplina) {
        this.disciplinas.add(disciplina);
    }

    public void removerDisciplina(Disciplina disciplina) {
        this.disciplinas.remove(disciplina);
    }

    public String getFormacao() {
        return this.formacao;
    }
}
