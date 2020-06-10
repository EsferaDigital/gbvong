
// Al definir propiedades en el constructor evito tener que definirlas, luego pasarles un dato y luego inicializarlas o asignarles un valor. Por eso se recomienda hacerlo de esta manera
export class MiembroModel{
  constructor(
    public id: string,
    public registroDate: Date,
    public tipo: string,
    public nombre: string,
    public rut: number,
    public docnumber: number,
    public phone: number,
    public mail: string,
    public rol: string,
    public region: string,
    public comuna: string,
    public calle: string,
    public imagen: string
  ){}
}
