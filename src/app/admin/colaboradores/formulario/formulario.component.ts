import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css',
  ]
})

export class FormularioComponent implements OnInit {

  @Input() collaboratorData = {id:0, name:'', lastname:'', dni:'', email:''};

  constructor(private route: ActivatedRoute, private router: Router, public rest: CollaboratorService) { }

  ngOnInit(): void {

  }

  addCollaborator(){
    this.rest.add(this.collaboratorData).subscribe((result) => {

    }, (err) => {
      console.log(err);
    });

  }

  back(){
    this.router.navigate(['/colaboradoresAdmin']);
  }
}


