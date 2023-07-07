package pweb.avaliaprof.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pweb.avaliaprof.modelo.Disciplina;
import pweb.avaliaprof.repository.DisciplinaRepository;

import java.util.List;

@Service
public class DisciplinaService {
    @Autowired
    private DisciplinaRepository disciplinaRepository;
    public List<Disciplina> getDisciplinas(){
        return this.disciplinaRepository.findAll();
    }

    public Disciplina cadastrarDisciplina(Disciplina disciplina) {
    	return this.disciplinaRepository.save(disciplina);
    }

}
