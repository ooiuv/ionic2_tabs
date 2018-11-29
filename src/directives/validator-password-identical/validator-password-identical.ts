import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[validator-password-identical]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatorPasswordIdenticalDirective,
    multi: true
  }]
})
export class ValidatorPasswordIdenticalDirective implements Validator {

  validate(control: FormGroup): { [key: string]: any } | null {
    const password = control.get('password');
    const password2 = control.get('password2');
    return password && password2 && password.value === password2.value ? null : {'passwordInvalid': true};
  }

}
