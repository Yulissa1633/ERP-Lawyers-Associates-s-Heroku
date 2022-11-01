import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css',
              '../css/style.css',
              '../css/login.css',
              '../css/bootstrap.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    
  }

  login(){
    this.router.navigate(['/login']);
  }
}
