package br.dev.ecolicenca.licenca.status.api;

import java.time.Instant;

public record StatusResponse(
        String servico,
        String versao,
        Instant timestamp
) {}
