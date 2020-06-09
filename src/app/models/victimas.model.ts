export interface VictimasModel{
  id?: string
  regitrodate: Date
  nombre: string
  rut: number
  docnumber: number
  mail: string
  phone: number
  phone2: number
  moviltype: string // tipo de auto (moto, camion, auto, camioneta)
  marca: string
  modelo: string
  movilcolor: string
  movilano: number
  patente: string
  chasisnumber?: string
  motornumber?: string
  addresstheft: string // dirección del robo
  recovered: boolean
  adressrecovered?: "";
  moredata: string
  donacion: string
  montodonacion: number
}
