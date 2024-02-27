import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface ToastDetails {
  summary?: string;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showSuccess(param: ToastDetails) {
    this.messageService.add({
      severity: 'success',
      summary: param.summary ?? 'Success',
      detail: param.content,
      life: 6000,
    });
  }

  showInfo(param: ToastDetails) {
    this.messageService.add({
      severity: 'info',
      summary: param.summary ?? 'Info',
      detail: param.content,
      life: 6000,
    });
  }

  showWarning(param: ToastDetails) {
    this.messageService.add({
      severity: 'warn',
      summary: param.summary ?? 'Warn',
      detail: param.content,
      life: 6000,
    });
  }

  showError(param: ToastDetails) {
    this.messageService.add({
      severity: 'error',
      summary: param.summary ?? 'Error',
      detail: param.content,
      life: 6000,
    });
  }
}