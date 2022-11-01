import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
              '../css/style.css',
              '../css/bootstrap.css',
              '../css/login.css']
})
export class LoginComponent implements OnInit {

  @Input() userData = {id:'', password:''};
  user:any;

  constructor(public rest: LoginServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  getUser(){
    this.user  = '';
    this.rest.getUser(this.userData.id).subscribe((data:{}) => {
        console.log(data);
        this.user = data;
        this.isValidUser();
    });
  }

  isValidUser(){
    if (typeof(this.user) !== 'undefined') {
      if(this.user.password==this.userData.password){
        this.rest.setSession(this.user.name, this.user.idUser);
        switch (this.user.roleId) {
          case 1:
            this.adminPrincipal();
            break;
          case 2:
            this.assistantPrincipal();
            break;
          case 3:
              this.clientPrincipal();
              break;
          default:
            break;
        }
    }
    else {
      $('#result').text("Wrong data. Please, try again");
      $('#result').css('color', 'red');
      $('#password').val('');
    }
  }
  else {
    $('#result').text("Wrong data. Please, try again");
    $('#result').css('color', 'red');
    $('#password').val('');
  }
}

  principal(){
    this.router.navigate(['/principal']);
  }

  clientPrincipal(){
    this.router.navigate(['/client']);
  }

  adminPrincipal(){
    this.router.navigate(['/admin']);
  }

  assistantPrincipal(){
    this.router.navigate(['/assistant']);
  }
}
