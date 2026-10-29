import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { StatusApiService } from '../../core/api/status-api.service';
import { StatusResponse } from '../../core/api/status.model';

@Component({
  selector: 'eco-status-card',
  imports: [DatePipe],
  template: `
    <section class="card">
      <h2>Status do backend</h2>
      
      @if (status(); as s) {
        <p class="ok">{{ s.servico }} · v{{ s.versao }}</p>
        <small>{{ s.timestamp | date: 'dd/MM/yyyy HH:mm:ss' }}</small>
      } @else if (erro()) {
        <p class="falha">{{ erro() }}</p>
      } @else {
        <p>Consultando...</p>
      }
    </section>
  `,
  styles: [`
    .card {
      max-width: 360px;
      margin: 2rem auto;
      padding: 1.5rem;
      border-radius: 12px;
      border-left: 6px solid #6db33f;
      box-shadow: 0 2px 8px rgb(0 0 0 / .1);
      font-family: sans-serif;
    }
    .ok {
      color: #2e7d32;
      font-weight: 600;
    }
    .falha {
      color: #c62828;
      font-weight: 600;
    }
  `],
})
export class StatusCardComponent implements OnInit {
  private readonly api = inject(StatusApiService);
  
  protected readonly status = signal<StatusResponse | null>(null);
  protected readonly erro = signal<string | null>(null);

  ngOnInit(): void {
    this.api.obterStatus().subscribe({
      next: (s) => this.status.set(s),
      error: () => this.erro.set('Backend indisponível'),
    });
  }
}
