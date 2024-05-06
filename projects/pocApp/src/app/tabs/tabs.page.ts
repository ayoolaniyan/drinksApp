import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private actionSheetController: ActionSheetController
  ) { }

  async selectAction() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Click an icon',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Contact',
          icon: 'wallet',
          handler: () => {
            // TODO logic
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
    });
    await actionSheet.present();
  }

}
