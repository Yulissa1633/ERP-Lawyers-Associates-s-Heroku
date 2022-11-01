import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollaboratorService } from 'src/app/services/collaborator.service';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.css']
})
export class ListCollaboratorComponent implements OnInit {

  collaborators:any=[];

  @Input() collaboratorData = {idCollaborator:0,name:'',lastname:'',dni:0,email:''};

  constructor(public rest: CollaboratorService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.getCollaborators();
  }

  getCollaborators(){
    this.collaborators = [];
    this.rest.getUsers().subscribe((data:{}) => {
        console.log(data);
        this.collaborators = data;
    });
  }

  deleteCollaborator(id:any){
    this.rest.delete(id).subscribe( 
      (data) =>{
        console.log("click");
        this.ngOnInit();
      })
    }

}
