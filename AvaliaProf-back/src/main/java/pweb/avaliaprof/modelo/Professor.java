package pweb.avaliaprof.modelo;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@DiscriminatorValue("Professor")
public class Professor extends Usuario{
    @ManyToMany(mappedBy = "professores", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Disciplina> disciplinas = new ArrayList<Disciplina>();

    @OneToMany(mappedBy = "professor", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Avaliacao> avaliacoes = new ArrayList<Avaliacao>();

    @ElementCollection
    private List<String> formacoes = new ArrayList<String>();

    public Professor() {
        super();
    }
    public Professor( String nome,
                      String senha,
                      String email,
                      String matricula,
                      List<String> formacoes,
                      List<Disciplina> disciplinas) {
        super( nome, senha, email, matricula);
        this.formacoes = formacoes;
        this.disciplinas = disciplinas;
    }

    public List<String> listarFormacoes() {
        return this.formacoes;
    }

    public List<Disciplina> listarDisciplinas() {
        return this.disciplinas;
    }

    public List<Avaliacao> listarAvaliacoes() {
        return this.avaliacoes;
    }


    public void adicionarFormacao(String formacao) {
        this.formacoes.add(formacao);
    }

    public void alterarFormacao(String formacao) {
        int index = this.formacoes.indexOf(formacao);
        this.formacoes.set(index,formacao);
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




}
