import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css',
  '../../css/admin.css',
  '../../css/style.css',
  '../../css/bootstrap.css',
  '../../css/clientesAdmin.scss',
  '../../css/clientesAdmin.css']
})
export class ClientesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  clientes(){
    this.router.navigate(['/clientesAdmin']);
  }
}
