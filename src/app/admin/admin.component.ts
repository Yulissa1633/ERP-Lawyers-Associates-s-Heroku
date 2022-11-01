import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
  '../css/admin.css',
  '../css/style.css',
  '../css/bootstrap.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  clientes(){
    this.router.navigate(['/clientesAdmin']);
  }
}
