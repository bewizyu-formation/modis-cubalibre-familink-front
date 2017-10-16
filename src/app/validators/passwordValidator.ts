
import { FormGroup } from '@angular/forms';

export const PWD_VALIDATOR = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(\\S).{6,}$';


export const passwordMatchValidator = (g: FormGroup) => {
  return g.get('password').value === g.get('passwordConfirm').value ? null : { mismatch: true };
};
