import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appRankingValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: RankingValidatorDirective, multi: true }],
})
export class RankingValidatorDirective {

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }

}
