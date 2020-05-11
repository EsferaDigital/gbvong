export class RegistroModel{
  id: string
  nombres: string
  apellidos: string
  rut: string
  docnumber: number
  telefono: number
  correo: string
  motivo: string
  patente: string
  moredata: string
  donacion: string
  montodonacion: number
  direccion: {
    region: string
    comuna: string
    calle: string
  }

  constructor(){
    this.id = 'ABC123'
  }
}
