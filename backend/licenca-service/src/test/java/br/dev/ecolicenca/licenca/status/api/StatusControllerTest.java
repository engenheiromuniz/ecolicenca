package br.dev.ecolicenca.licenca.status.api;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class StatusControllerTest {

    @Test
    void deveRetornarNomeEVersaoDoServico() {
        var controller = new StatusController("licenca-service", "0.0.1");

        var resposta = controller.status();

        assertEquals("licenca-service", resposta.servico());
        assertEquals("0.0.1", resposta.versao());
        assertNotNull(resposta.timestamp());
    }
}
