import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item-component',
  templateUrl: './user-list-item-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponentComponent{

  @Input() user: any;


}
