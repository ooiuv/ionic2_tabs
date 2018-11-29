import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { DemoService } from '../../pages/demo/DemoService';

@Directive({
  selector: '[validator-username-exist]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => ValidatorUsernameExistDirective),
    multi: true
  }]
})
export class ValidatorUsernameExistDirective {
  constructor(public demoService: DemoService) {
  }

  validate(c: AbstractControl): Observable<any> {
    return c.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .flatMap(() => {
        return this.demoService.getUserByName(c.value);
      })
      .first();
  }
}
