import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/UI/components/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
