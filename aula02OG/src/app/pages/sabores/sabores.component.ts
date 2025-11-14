import { Component } from '@angular/core';
import { Sabor } from '../../interfaces/sabor';
import { SorvetesService } from '../../services/sorvetes.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sabores',
  imports: [CommonModule],
  templateUrl: './sabores.component.html',
  styleUrl: './sabores.component.css'
})
export class SaboresComponent {
  
  public sabores:Sabor[]=[];

  constructor(private sorveteService:SorvetesService){}

  ngOnInit():void{
    this.buscarSabores();
  }

  buscarSabores():void{
    this.sorveteService.getSabores().subscribe(
      (dadosRecebidos)=>{
        this.sabores = dadosRecebidos;
      },
      (erro)=>{
        console.log("Deu erro aqui")
      }
    )
  }

}
