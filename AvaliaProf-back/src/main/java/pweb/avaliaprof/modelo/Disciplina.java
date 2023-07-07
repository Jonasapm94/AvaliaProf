package pweb.avaliaprof.modelo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Disciplina {
    @Id
    private String nome;

    @ManyToMany
    private List<Professor> professores = new ArrayList<Professor>();

    public Disciplina(){
    }
    public Disciplina(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return this.nome;
    }

    public List<Professor> getProfessores(){
        return this.professores;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setProfessores(List<Professor> professores){
        this.professores = professores;
    }

    public void adicionarProfessor(Professor professor){
        this.professores.add(professor);
    }

    public void removerProfessor(Professor professor){
        this.professores.remove(professor);
    }

    public String toString(){
        return "Disciplina: " + this.nome + "\nProfessores: " + this.professores;
    }
}
