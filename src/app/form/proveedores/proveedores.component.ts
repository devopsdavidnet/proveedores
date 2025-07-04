import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormControl } from '@angular/forms';






@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})


export class ProveedoresComponent implements OnInit {
  form: FormGroup;
   
  numeroInputs: number = 0;
  inputs: string[] = [];

   
  constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    cantidad: [0],
      campos: this.fb.array([]),
      objetivos: this.fb.array([]),

  
       
      
      
  nombre_organizacion: ['', Validators.required],
  organizacion: ['', Validators.required],
  tipo_explotador: ['', Validators.required],
  tipo_operacion: ['', Validators.required],
  tipo_transporte_aereo: ['', Validators.required],
  otro_tipo_transporte_aereo: [''],
  certificacion_organizacion: ['', Validators.required],
  direccion_organizacion: ['', Validators.required],
  otro_proveedor: [''],
otro_certificado_organizacion: [''],
otro_tipo_operacion: [''],

numero_resolucion_administrativaotro_tipo_operacion: [''],

  aeronaves_registradas: [''],

  especificacion1: [false],
  especificacion2: [false],
  especificacion3: [false],
  especificacion4: [false],
  especificacion5: [false],
  especificacion6: [false],
  especificacion7: [false],
  especificacion8: [false],
  especificacion9: [false],
  especificacion10: [false],
  especificacion11: [false],
  especificacion12: [false],


  especificacion13: [false],   // checkbox
      otroTexto13: [''],            // campo de texto opcional

  capacidad1: [false],
  capacidad2: [false],
  capacidad3: [false],
  capacidad4: [false],
  capacidad5: [false],
  capacidad6: [false],
  capacidad7: [false],
  capacidad8: [false],

  tipo1: [false],
  tipo2: [false],
  tipo3: [false],
  tipo4: [false],

  certificado1:[false],
  certificado2:[false],
  certificado3:[false],
  certificado4:[false],
  certificado5:[false],
  certificado6:[false],
  certificado7:[false],
  certificado8:[false],
  certificado9:[false],
  certificado10:[false],
  certificado11:[false],
  certificado12:[false],
  certificado13:[false],
  certificado14:[false],
  certificado15:[false],
  certificado16:[false],
  certificado17:[false],


    nombreIndicador: ['', Validators.required],
    periodicidadCalculo: ['', Validators.required],


    

  departamento: ['', Validators.required],

  tamanoOrganizacion: ['', Validators.required],
  fechaInicioCertificacionx:['',Validators.required],
  complejidad_organizacion: ['', Validators.required],
  nacionalidad_organizacion: ['', Validators.required],
  fechaInicioCertificacion: ['', Validators.required],
  fechaExpiracionCertificacion: ['', Validators.required],
  nivelAlerta1: ['', Validators.required],
  nivelAlerta2: ['', Validators.required],
  nivelAlerta3: ['', Validators.required],
    tieneFechaSMS: [false],
    fechaAceptacion: [''],



    
  
 tipoIndicador: ['', Validators.required],  // o el nombre que desees
  telefono_organizacion: ['', Validators.required],
  Correo_organizacion: ['', Validators.required],
  numero_certificado: ['', Validators.required],
  numero_resolucion_administrativa: ['', Validators.required],

 
  

  
});
  }


  

  ngOnInit() {
    /*this.form.get('tipo_explotador')?.valueChanges.subscribe(value => {
      const edadControl = this.form.get('edad');
      if (value === '10') {
        edadControl?.setValidators([Validators.required, Validators.min(0)]);
      } else {
        edadControl?.clearValidators();
        edadControl?.setValue('');
      }
      edadControl?.updateValueAndValidity();
    });*/

    this.form.get('tieneFechaSMS')?.valueChanges.subscribe(
      value =>{
        if(!value){
this.form.get('fechaAceptacion')?.reset();

        }

      }
    )
    
  }




  

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }

  get campos(): FormArray {
    return this.form.get('campos') as FormArray;
    
  }

generarInputs() {
    const cantidad = Number(this.form.get('cantidad')?.value) || 0;
  
    // Limpiar el array actual
    this.campos.clear();

    // Agregar nuevos controles
    for (let i = 0; i < cantidad; i++) {
      this.campos.push(this.fb.group({ valor: [''] }));
          
    }
  }


  generarCampos() {
    const cantidad = Number(this.form.get('cantidad')?.value) || 0;

    this.campos.clear();

    for (let i = 0; i < cantidad; i++) {
      this.campos.push(this.fb.group({
        
        fecha: [null, Validators.required]
      }));
    }
  }
  
  


get objetivos(): FormArray {
    return this.form.get('objetivos') as FormArray;
  }

  metas(i: number): FormArray {
    return this.objetivos.at(i).get('metas') as FormArray;
  }

  indicadores(i: number, j: number): FormArray {
    return this.metas(i).at(j).get('indicadores') as FormArray;
  }

  nuevoIndicador(): FormGroup {
    return this.fb.group({
      nombreIndicador: ['', Validators.required]
    });
  }

  nuevaMeta(): FormGroup {
    return this.fb.group({
      nombreMeta: ['', Validators.required],
      indicadores: this.fb.array([this.nuevoIndicador()])
    });
  }

  nuevoObjetivo(): FormGroup {
    return this.fb.group({
      nombreObjetivo: ['', Validators.required],
      metas: this.fb.array([this.nuevaMeta()])
    });
  }

  agregarObjetivo() {
    this.objetivos.push(this.nuevoObjetivo());
  }

  eliminarObjetivo(i: number) {
    this.objetivos.removeAt(i);
  }

  agregarMeta(i: number) {
    this.metas(i).push(this.nuevaMeta());
  }

  eliminarMeta(i: number, j: number) {
    this.metas(i).removeAt(j);
  }

  agregarIndicador(i: number, j: number) {
    this.indicadores(i, j).push(this.nuevoIndicador());
  }

  eliminarIndicador(i: number, j: number, k: number) {
    this.indicadores(i, j).removeAt(k);
  }

  enviar() {
    if (this.form.valid) {
      console.log('✅ Datos enviados:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }





}





