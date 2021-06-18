import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name = new FormControl('');
  phone = new FormControl('');
  DNI = new FormControl('');

  constructor(public loadingController: LoadingController, private router: Router, public toastController: ToastController) {}

  async presentLoading() {

    if (this.name.value.length > 0 && this.phone.value > 0 && this.DNI.value > 0){

      setTimeout(async () => {
        this.router.navigate(['/page-botones', {name: this.name.value, phone: this.phone.value, dni: this.DNI.value}]);
      }, 1500);

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Cargando...',
        duration: 2000
      });
      await loading.present();const { role, data } = await loading.onDidDismiss();
    } else {
      this.presentToastWithOptions()
    }
  }
  async presentToastWithOptions() {
    
    const toast = await this.toastController.create({
      message: 'Rellene todos los campos.',
      position: 'bottom',
      buttons: [
        {
          text: 'ok',
          role: 'cancel'
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
  }
  
}
