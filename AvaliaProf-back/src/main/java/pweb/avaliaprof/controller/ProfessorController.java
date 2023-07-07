package pweb.avaliaprof.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pweb.avaliaprof.modelo.Professor;
import pweb.avaliaprof.service.ProfessorService;

import java.util.List;

@RestController
@RequestMapping("/professor")
public class ProfessorController {
    private ProfessorService professorService;

    @GetMapping("/listar")
    public List<Professor> getProfessores(){
        return this.professorService.getProfessores();
    }
}
