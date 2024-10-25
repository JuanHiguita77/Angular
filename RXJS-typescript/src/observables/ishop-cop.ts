import { Observable } from "rxjs";

export const ishop = new Observable<string>((subscriber) =>{
    subscriber.next('We dont have iphone 17')
    setInterval(()=>{
        subscriber.next('Stay waiting for it!!!!')
        //Used for finish the continous sending proccess, but still subscribe
        subscriber.complete()
    }, 2000)

    setTimeout(() =>{
        subscriber.error('We have problems!!')
        subscriber.next('Servers are fire, literally x.x')
    })

    setTimeout(() =>
    {
        subscriber.next('Subcription canceled')
        //Finish data tranfers to observer
        subscriber.unsubscribe()
        subscriber.next('No more subcription')
    }, 2000)
})

export const ishopCop = (activeUnsubscribe: boolean) => {
    return new Observable<string> ((subscriber) => {
        
        subscriber.next('Product dont exist')

        setInterval(() => subscriber.next('Still waiting for it'), 400)

        if(activeUnsubscribe)
        {
            setTimeout(() => {
                subscriber.next('New product has released')

                subscriber.unsubscribe()
            }, 2000);
        }
    })} 