package pweb.avaliaprof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pweb.avaliaprof.modelo.Disciplina;

public interface DisciplinaRepository extends JpaRepository<Disciplina, Long> {
}
