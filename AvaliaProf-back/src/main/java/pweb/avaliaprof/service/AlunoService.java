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
}
