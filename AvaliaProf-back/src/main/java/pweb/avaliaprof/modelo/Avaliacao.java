package pweb.avaliaprof.modelo;

import jakarta.persistence.*;

@Entity
public class Avaliacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Professor professor;
    @ManyToOne
    private Aluno aluno;
    private String comentario;
    private float nota;

    public Avaliacao(){
        super();
    }
    public Avaliacao(long id, Professor professor, Aluno aluno, String comentario, float nota){
        this.id = id;
        this.professor = professor;
        this.aluno = aluno;
        this.comentario = comentario;
        this.nota = nota;
    }

    public long getId(){
        return this.id;
    }

    public Professor getProfessor(){
        return this.professor;
    }

    public Aluno getAluno(){
        return this.aluno;
    }

    public String getComentario(){
        return this.comentario;
    }

    public float getNota(){
        return this.nota;
    }

    public void setProfessor(Professor professor){
        this.professor = professor;
    }

    public void setAluno(Aluno aluno){
        this.aluno = aluno;
    }

    public void setComentario(String comentario){
        this.comentario = comentario;
    }

    public void setNota(float nota){
        this.nota = nota;
    }

    public String toString(){
        return "Avaliação: " + this.id + "\nProfessor: " + this.professor.getNome() + "\nAluno: " + this.aluno.getNome() + "\nComentário: " + this.comentario + "\nNota: " + this.nota;
    }
}
