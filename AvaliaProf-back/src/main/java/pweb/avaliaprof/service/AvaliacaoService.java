package pweb.avaliaprof.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import pweb.avaliaprof.modelo.Avaliacao;
import pweb.avaliaprof.repository.AvaliacaoRepository;

@Service
public class AvaliacaoService {

    @Autowired
    private AvaliacaoRepository avaliacaoRepository;

    public List<Avaliacao> getAvaliacoes() {
        return this.avaliacaoRepository.findAll();
    }

    public Avaliacao inserirAvaliacao(Avaliacao avaliacao) {
        return this.avaliacaoRepository.save(avaliacao);
    }
    
}
