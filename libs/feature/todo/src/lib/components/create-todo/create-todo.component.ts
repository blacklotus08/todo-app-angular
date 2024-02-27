import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ToastService } from '../../service/toast.service';
import { validateAllFormFields } from '../../helpers/validate-controls-helper';

@Component({
  selector: 'webapp-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoComponent {
  form!: FormGroup;
  statusOptions = [
    { value: 'Pending', name: 'Pending' },
    { value: 'Closed', name: 'Closed' },
  ];

  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    private toastService: ToastService
    ) {
    this.form = this.fb.group({
      taskName: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      dueDate: new FormControl(null, Validators.required),
      status: new FormControl('Pending', Validators.required),
      priority: new FormControl(1, Validators.required),
    });
    if (this.dialogConfig.data) {
      this.form.patchValue(this.dialogConfig.data);
    }
  }
  
  //#region Public Methods
  save() {
    if (this.form.valid) {
      this.ref.close(this.form.value);
    } else {
      validateAllFormFields(this.form);
      this.toastService.showError({
        summary: 'Error',
        content:
          'The form may contain one or more errors. Please check all fields and fix to continue with submission',
      });
    }  
  }

  cancel() {
    this.ref.close();
  }
  //#endregion
}
