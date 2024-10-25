import { Observable } from 'rxjs'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { ishop, ishopCop } from './observables/ishop-cop'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

//Creating observable
const myObservable = new Observable((suscriber)=>{
  //next: send data
  suscriber.next('sending data')
})

//suscribe at the observable
myObservable.subscribe({
  next:(data)=>
  {
    console.log(data);
  }
})

ishop.subscribe({
  next:(data:string) =>{
    console.log(data)
  },
  //Using the complete from subscriber
  complete: () =>{
    console.log('Completed');
  },
  //catch the errors
  error: (e) =>{
    console.log(e)
  }
})

const subcription = ishopCop(false).subscribe({
  next: (data) => {
    console.log(data);
  },
  complete: () => {
    console.log('completed');
  },
  error: (error) => {
    console.log('Error' , error);
  }
})

setTimeout(() => {
  console.log('Canceling subcription from subscriber');
  subcription.unsubscribe()
}, 4000)