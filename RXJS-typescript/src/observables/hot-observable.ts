import { Subject } from "rxjs";

//Va transmitiendo valores siempre sin tener suscriptores
//subject: crear un observable y enviar informacion
const hotObservable = new Subject<string>()

setInterval(() => hotObservable.next(`Cancion: ${Math.floor(Math.random() * 50)}`), 2000)

export const hotSuscription = () => {
    hotObservable.subscribe((song) => console.log(`Playing ${song}`))

    setTimeout(() => {
        hotObservable.subscribe((song) => console.log(`Tuning ${song}`))
    })
}
