package pweb.avaliaprof.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pweb.avaliaprof.modelo.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
