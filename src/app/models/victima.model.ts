export class VictimaModel{
  constructor(
    public registrodate: Date,
    public nombres: string,
    public rut: string,
    public docnumber: number,
    public mail: string,
    public phone: number,
    public phone2: number,
    public moviltype: string,
    public marca: string,
    public modelo: string,
    public movilcolor: string,
    public movilano: number,
    public patente: string,
    public chasisnumber: string,
    public motornumber: string,
    public fecharobo: string,
    public moredata: string,
    public recuperado: boolean,
    public fecharecuperado: Date,
    public donacion: string,
    public montodonacion: number
  ){}
}

// export interface VictimasModel{
//   id?: string
//   regitrodate: Date
//   nombre: string
//   rut: number
//   docnumber: number
//   mail: string
//   phone: number
//   phone2: number
//   moviltype: string // tipo de auto (moto, camion, auto, camioneta)
//   marca: string
//   modelo: string
//   movilcolor: string
//   movilano: number
//   patente: string
//   chasisnumber?: string
//   motornumber?: string
//   addresstheft: string // dirección del robo
//   recovered: boolean
//   adressrecovered?: "";
//   moredata: string
//   donacion: string
//   montodonacion: number
// }
