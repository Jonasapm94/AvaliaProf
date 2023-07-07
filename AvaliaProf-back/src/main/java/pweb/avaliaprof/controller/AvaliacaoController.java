package pweb.avaliaprof.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pweb.avaliaprof.modelo.Avaliacao;
import pweb.avaliaprof.service.AvaliacaoService;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {
    @Autowired
    private AvaliacaoService avaliacaoService;

    @GetMapping("/listar")
    public List<Avaliacao> listarAvaliacoes(){
        return this.avaliacaoService.getAvaliacoes();
    }

    @PostMapping("/inserir")
    public Avaliacao inserirAvaliacao(Avaliacao avaliacao){
        return this.avaliacaoService.inserirAvaliacao(avaliacao);
    }
}
