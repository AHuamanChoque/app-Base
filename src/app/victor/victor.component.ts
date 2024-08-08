import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-victor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './victor.component.html',
  styleUrl: './victor.component.css'
})
export class VictorComponent {
  titulo='Ejercicio 1'
  texto=""
  mostrarmsj=false
  victor ={
    precio:null,
    cantidad:null,
    resultado:null
  }

  cantidadesList: ListaCantidad= []

  cacularCantidad(){
    let preciototal= Number(this.victor.precio)* Number(this.victor.cantidad)
    let descuento10= (preciototal)*0.10
    let descuento5= (preciototal)*0.05
    let cantidadinicial=Number(this.victor.cantidad)
    let d=""
    let resultado= 0
    let descuento=0

    if(cantidadinicial > 20){
      resultado = preciototal-descuento10
      descuento=descuento10
      d="10%"
    }else if(cantidadinicial > 10 && cantidadinicial<=20){
      resultado = preciototal-descuento5
      descuento=descuento5
      d="5%"
    }else{
      resultado=preciototal
      descuento=0
      d="0%"
    }

    this.texto = "Costo de compra: " + preciototal.toFixed(2).toString() +", " + " - descuento: "+d +
      " - Descuento: "+ descuento.toFixed(2).toString() + "- Costo de compra Neto: " + resultado.toFixed(2).toString();
    this.cantidadesList.push({
      id: this.cantidadesList.length +1,
      cantidad:cantidadinicial,
      precio: Number(this.victor.precio),
      costocompra: preciototal,
      descuento: descuento,
      total: resultado,
      porcentaje: d
    })
    this.mostrarmsj= true;

  }
}
type ListaCantidad= Array<{id: number , cantidad: number , precio: number,costocompra:number
  ,descuento:number, porcentaje:string, total:number
}>