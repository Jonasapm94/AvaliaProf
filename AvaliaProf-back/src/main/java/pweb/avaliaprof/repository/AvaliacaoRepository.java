package pweb.avaliaprof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pweb.avaliaprof.modelo.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
}
