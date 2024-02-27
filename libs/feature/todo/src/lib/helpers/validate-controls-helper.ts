import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      validateAllFormFields(control);
    } else if (control instanceof FormArray) {
      (control as FormArray).controls.forEach((control) => {
        if (control instanceof FormGroup) {
          validateAllFormFields(control as FormGroup);
        }
      });
    }
  });
}
