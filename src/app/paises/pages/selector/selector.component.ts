import { IPaisMini } from './../../interfaces/paises';
import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  // Formulario
  miForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  })

  // llenar selectores
  regiones: string[] = [];
  paises: IPaisMini[] = [];
  fronteras: string[] = [];

  loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    private srvPais: PaisesService
  ) { }

  ngOnInit(): void {
    this.regiones = this.srvPais.regiones;

    // Cuando cambia region


    // Opción 1, subscribe's anidados 
    /*
    this.miForm.get('region')?.valueChanges.subscribe(region => {
      this.miForm.get('pais')?.reset(''); // Reset del valor pais del form
      this.srvPais.getPaisesPorRegion(region).subscribe(resp => {
        this.paises = resp;
      })
    });
*/


    // Opción 2, switchMap  

    // Cuando cambia la region en el form 
    this.miForm.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.miForm.get('pais')?.reset(''); // Reset del valor pais del form
          this.loading = true;
        }),
        switchMap(resp => this.srvPais.getPaisesPorRegion(resp))  // Cargar PaisesPorRegion
      )
      .subscribe(resp => {
        this.paises = resp;
        this.loading = false;
      })


    // Cuando cambia el pais en el form
    this.miForm.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.miForm.get('frontera')?.reset(''); // Reset del valor frontera del form
          this.loading = true;
        }),
        switchMap(codPais => this.srvPais.getPaisPorCodigo(codPais)) // Cargar Fronteras por pais
      )
      .subscribe(paisFronteras => {
        this.fronteras = paisFronteras?.borders || [];
        this.loading = false;
      })


  }



  submit() {
    console.log(this.miForm.value)
  }

}
