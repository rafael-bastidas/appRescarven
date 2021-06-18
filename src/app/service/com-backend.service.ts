import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComBackendService {

  URL_API: string;

  constructor() {
    this.URL_API = "https://rafaelbastidas.com/api-test-rescarven/app.php";
  }

  async requestBackend(data){
    try {
      const response = await fetch(this.URL_API, {
        headers:{'KEY_RESCARVEN': 'Z9AQBQXUWDHRN5GYE3DUG52BTSFT1NMA'},
        method: 'POST',
        body: data
      });
      const res_data = await response.json();
      return res_data;
    } catch (error) {
      console.log("Error de conexion", error);
      return {response: null};
    }
  }

}
