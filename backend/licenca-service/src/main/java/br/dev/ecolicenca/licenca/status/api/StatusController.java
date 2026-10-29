package br.dev.ecolicenca.licenca.status.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
@RequestMapping("/api/status")
public class StatusController {

    private final String nomeAplicacao;
    private final String versaoAplicacao;

    // Construtor explícito exigido pelo teste (Injeção por Construtor)
    public StatusController(
            @Value("${spring.application.name}") String nomeAplicacao,
            @Value("${app.versao}") String versaoAplicacao) {
        this.nomeAplicacao = nomeAplicacao;
        this.versaoAplicacao = versaoAplicacao;
    }

    @GetMapping
    public StatusResponse status() {
        return new StatusResponse(nomeAplicacao, versaoAplicacao, Instant.now());
    }
}
