package pweb.avaliaprof.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pweb.avaliaprof.modelo.Aluno;
import pweb.avaliaprof.repository.AlunoRepository;

import java.util.List;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    public List<Aluno> getAlunos(){
        return this.alunoRepository.findAll();
    }

    public Aluno cadastrarAlunoOuAtualizar(Aluno aluno) {
        System.out.println(aluno);
        return this.alunoRepository.save(aluno);
    }

    public Aluno getAlunoById(Long idAluno) {
        return this.alunoRepository.findById(idAluno).orElse(null);
    }

    
}
