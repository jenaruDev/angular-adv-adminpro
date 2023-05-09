import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent {

  constructor(private settingService:SettingsService){}

  ngOnInit(): void {
    this.settingService.checkCurrentTheme;
  }

  changeTheme(theme: String){
    this.settingService.changeTheme(theme)
  }
 }
