import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister= this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:[''],
    password2:[''],
    email:[''],
    poblacion:[''],
    provincia:[''],
    telefono:[''],
  })
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    
  }
submit(): void{
  if (this.formRegister.value.password == this.formRegister.value.password2){
    this.servicioUsuario.registrar(this.formRegister.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        this.irHacia.navigate(['/perfil'])
      },
      error => console.log(error)
    )
  }
  else alert('Las contraseñas no coinciden')
}
}
