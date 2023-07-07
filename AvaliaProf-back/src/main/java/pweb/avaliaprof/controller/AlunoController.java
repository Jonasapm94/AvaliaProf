package pweb.avaliaprof.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pweb.avaliaprof.modelo.Aluno;
import pweb.avaliaprof.service.AlunoService;

import java.util.List;

@RestController
@RequestMapping("/aluno")
public class AlunoController {
    @Autowired
    private AlunoService alunoService;

    @GetMapping("/listar")
    public List<Aluno> getAlunos(){
        return this.alunoService.getAlunos();
    }
}
