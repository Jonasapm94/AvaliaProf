package pweb.avaliaprof.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pweb.avaliaprof.modelo.Professor;
import pweb.avaliaprof.service.ProfessorService;

import java.util.List;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping("/listar")
    public List<Professor> getProfessores(){
        List<Professor> professores = this.professorService.getProfessores(); 
        System.out.println(professores);
        return professores;
    }

    @PostMapping("/cadastrar")
    public Professor cadastrarProfessor(@RequestBody Professor professor) {
    	
        return this.professorService.cadastrarProfessor(professor);
    }
}
