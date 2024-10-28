import { Observable } from "rxjs";

//Solo empieza a enviar datos al suscriptor al momento de hacerlo
const coldObservable = new Observable<string>((observer) =>{
    const pages = ['pagina 1', 'pagina 2', 'pagina 3']

    //Recorre el arreglo
    pages.forEach((page) => {
        observer.next(page)
    })

    //completa el observable
    observer.complete()
})

//Por cada suscripcion se ejecuta o envia informacion dada dentro del observable
export const coldSubscriptions = () => {
    //suscription number one: show all pages list
    coldObservable.subscribe((page) => console.log(`Leyendo pagina 1': ${page}`))

    //suscription in two seconds number two: show all pages list too
    setTimeout(() => {
        coldObservable.subscribe((page) => console.log(`Leyendo pagina 2: ${page}`))
    }, 2000);
}