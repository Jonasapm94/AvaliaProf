package pweb.avaliaprof.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pweb.avaliaprof.modelo.Disciplina;
import pweb.avaliaprof.modelo.Professor;
import pweb.avaliaprof.service.DisciplinaService;
import pweb.avaliaprof.service.ProfessorService;

import java.util.List;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;
    @Autowired
    private DisciplinaService disciplinaService;

    @GetMapping("/listar")
    public List<Professor> getProfessores(){
        return this.professorService.getProfessores();
    }

    @PostMapping("/cadastrar")
    public Professor cadastrarProfessor(@RequestBody Professor professor) {
    	return this.professorService.cadastrarProfessor(professor);
    }
}
