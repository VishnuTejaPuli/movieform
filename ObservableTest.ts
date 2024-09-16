import { Observable } from "rxjs";

@exports class Test{
   

    createObservable(): Observable<Object>
    {

        return new Observable(obs=>{
            setTimeout(() => {
                console.log(obs.next('Hello'));
            }, 1000);

            setTimeout(() => {
                console.log(obs.next('Welcome'));
            }, 2000);

            setTimeout(() => {
                console.log(obs.next('Asynchronous'));
            }, 3000);

            setTimeout(() => {
                console.log(obs.next('Communication'));
            }, 4000);    
       
               // obs.next("123");
        // obs.next("456");
        // obs.next("Hello");
       
       
        });
    }
    
  subscribeToObservable(observable: Observable<object>)
  {
    observable.subscribe(data=>{
        // this.product=data;
        console.log(data);
    })
  }
  


}