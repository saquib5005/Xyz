import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';  // Keep if there, or remove if not

import { ReactiveFormsModule } from '@angular/forms';  // ← Added for reactive forms
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // For PrimeNG animations
import { importProvidersFrom } from '@angular/core';  // ← Added to import modules

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(ReactiveFormsModule),  // ← Added to enable reactive forms
    importProvidersFrom(BrowserAnimationsModule)  // ← Added for PrimeNG
  ]
})
  .catch((err) => console.error(err));
