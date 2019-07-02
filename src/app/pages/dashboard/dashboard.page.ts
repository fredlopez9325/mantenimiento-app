import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Solicitud } from 'src/app/models/solicitud';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  solicitud: any;
  items_count: any;

  constructor(private menu: MenuController, private authService: AuthService) {
    this.menu.enable(true);
  }


  ngOnInit() {

  }
  ionViewWillEnter() {
    this.authService.solicitudes().subscribe(
      solicitud => {
        this.items_count = solicitud.length
        this.solicitud = solicitud;
      }
    );
  }


}
