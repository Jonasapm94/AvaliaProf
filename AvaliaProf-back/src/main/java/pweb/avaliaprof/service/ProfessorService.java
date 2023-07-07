package pweb.avaliaprof.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pweb.avaliaprof.modelo.Professor;
import pweb.avaliaprof.repository.ProfessorRepository;

import java.util.List;

@Service
public class ProfessorService {
    @Autowired
    private ProfessorRepository professorRepository;

    public List<Professor> getProfessores(){
        return this.professorRepository.findAll();
    }

    public Professor cadastrarProfessor(Professor professor) {
    	return this.professorRepository.save(professor);
    }
}
