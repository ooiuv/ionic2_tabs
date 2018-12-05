import { NgModule } from '@angular/core';
import { ContenteditableDirective } from './contenteditable/contenteditable';
import { ValidatorUsernameExistDirective } from './validator-username-exist/validator-username-exist';
import { ValidatorRegularDirective } from './validator-regular/validator-regular';
import { ValidatorPasswordIdenticalDirective } from './validator-password-identical/validator-password-identical';
@NgModule({
  declarations: [
    ContenteditableDirective,
    ValidatorUsernameExistDirective,
    ValidatorRegularDirective,
    ValidatorPasswordIdenticalDirective],
  imports: [],
  exports: [
    ContenteditableDirective,
    ValidatorUsernameExistDirective,
    ValidatorRegularDirective,
    ValidatorPasswordIdenticalDirective]
})
export class DirectivesModule {}
