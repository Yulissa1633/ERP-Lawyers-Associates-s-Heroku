import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css',
  '../../css/admin.css',
  '../../css/style.css',
  '../../css/bootstrap.css',
'../../css/colaboradoresAdmin.scss',
'../../css/colaboradoresAdmin.css']
})
export class ColaboradoresComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(){
    this.router.navigate(['/form']);
  }

  listCollaborator(){
    this.router.navigate(['/list-collaborator']);
  }
}
