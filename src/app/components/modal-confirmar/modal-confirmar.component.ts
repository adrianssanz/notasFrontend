import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal-confirmar',
  imports: [CommonModule],
  templateUrl: './modal-confirmar.component.html',
  styleUrl: './modal-confirmar.component.css'
})
export class ModalConfirmarComponent {
  constructor(
    public matDialogRef: MatDialogRef<ModalConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirm(): void{
    this.matDialogRef.close(true);
  }

  onCancel(): void {
    this.matDialogRef.close(false);
  }
}