package pweb.avaliaprof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pweb.avaliaprof.modelo.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
