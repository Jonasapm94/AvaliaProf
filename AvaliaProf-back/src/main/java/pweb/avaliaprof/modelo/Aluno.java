package pweb.avaliaprof.modelo;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Aluno extends Usuario{
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String curso;
    @OneToMany(mappedBy = "aluno", cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Avaliacao> avaliacoes = new ArrayList<Avaliacao>();

    public Aluno(){
        super();
    }
    public Aluno(String nome, String email, String senha, String matricula, String curso){
        super(nome, email, senha, matricula);
        this.curso = curso;
    }
    public String getCurso(){
        return this.curso;
    }

    public void setCurso(String curso){
        this.curso = curso;
    }

    public List<Avaliacao> listarAvaliacoes(){
        return this.avaliacoes;
    }

    public void avaliarProfessor (Avaliacao avaliacao){
        this.avaliacoes.add(avaliacao);
    }

    public void removerAvaliacao (Avaliacao avaliacao){
        this.avaliacoes.remove(avaliacao);
    }

    public void alterarAvaliacao (Avaliacao avaliacao){
        int index = this.avaliacoes.indexOf(avaliacao);
        this.avaliacoes.set(index, avaliacao);
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + id +
                ", curso='" + curso + '\'' +
                ", avaliacoes=" + avaliacoes +
                '}';
    }
}
