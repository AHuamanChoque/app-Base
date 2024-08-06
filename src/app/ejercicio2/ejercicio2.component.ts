import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component {
  nombre: string = "";
  calificaciones: number[] = [0, 0, 0];
  estado: string = '';

  calcularEstado(): void {
    const suma = this.calcularSuma(this.calificaciones);
    console.log('Suma calculada:', suma); 
    this.estado = this.determinarEstado(suma);
    console.log('Estado determinado:', this.estado); 
  }

  private calcularSuma(calificaciones: number[]): number {
    return calificaciones.reduce((a, b) => a + b, 0);
  }

  private determinarEstado(suma: number): string {
    return suma >= 39 ? 'Aprobado' : 'Desaprobado';
  }

  actualizarCalificacion(index: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.calificaciones[index] = parseFloat(input.value) || 0;
  }
  actualizarNombre(event:Event): void{
    const input = event.target as HTMLInputElement;
    this.nombre = input.value;
  }

}
