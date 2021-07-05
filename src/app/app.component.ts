import { Component } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private userService: UserServiceService){}
  users = this.userService.users$;
  
   ngOnInit(): void {
     this.userService.fetchUsers();
   }
}
