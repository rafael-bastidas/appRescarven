import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ComBackendService } from '../service/com-backend.service';

@Component({
  selector: 'app-page-botones',
  templateUrl: './page-botones.page.html',
  styleUrls: ['./page-botones.page.scss'],
})
export class PageBotonesPage implements OnInit {

  loading;

  constructor(private comBackend:ComBackendService, private route:ActivatedRoute, public loadingController: LoadingController, public toastController: ToastController) { }

  ngOnInit() { }

  async peticion(criterio:string){

    this.presentLoading()
    let formData:FormData = new FormData();
    formData.append("url", "informacion");
    formData.append("params", "POST");
    formData.append("data", JSON.stringify({
      name: this.route.snapshot.paramMap.get("name"),
      dni: this.route.snapshot.paramMap.get("dni"),
      phone: this.route.snapshot.paramMap.get("phone"),
      action: criterio,
      date: new Date().toLocaleDateString('es-Es', { weekday: 'long', year: 'numeric', month: '2-digit', day: 'numeric', hour: 'numeric', minute: 'numeric'}),
      status: 'pendiente'
    }));
    let response = await this.comBackend.requestBackend(formData);
    this.loading.dismiss();
    response.response !== true ? this.presentToastWithOptions('rechazado') : this.presentToastWithOptions('aceptado');
  }
  callToRescarven(){
    document.location.href = 'tel:' + '02126100000';
  }

  async presentToastWithOptions(optionMsg:string) {
    
    const message = {
      aceptado: 'En breve nuestro personal se estará comunicando con usted.',
      rechazado: 'Error de comunicación, favor intentelo mas tarde'}
    const toast = await this.toastController.create({
      message: message[optionMsg],
      position: 'bottom',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentLoading() {

    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Procesando...'
    });
    this.loading.present();
    //const { role, data } = await this.loading.onDidDismiss();
  }

}
