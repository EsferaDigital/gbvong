export interface MiembrosModel{
  id?: string
  registrodate: Date
  nombre: string
  rut: number
  docnumber: number
  phone: number
  mail: string
  rol: string
  tipo: string // civil, FFAA, Otras
  direccion: {
    region: string
    comuna: string
    calle: string
  }
}
