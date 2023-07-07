package pweb.avaliaprof.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pweb.avaliaprof.modelo.Disciplina;
import pweb.avaliaprof.service.DisciplinaService;

import java.util.List;

@RestController
@RequestMapping("/disciplina")
public class DisciplinaController {
    @Autowired
    private DisciplinaService disciplinaService;

    @GetMapping("/listar")
    public List<Disciplina> getDisciplinas(){
        return this.disciplinaService.getDisciplinas();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/cadastrar")
    public Disciplina cadastrarDisciplina(@RequestBody Disciplina disciplina) {
    	return this.disciplinaService.cadastrarDisciplina(disciplina);
    }
}
