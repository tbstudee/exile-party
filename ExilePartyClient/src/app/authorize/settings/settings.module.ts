import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { SharedModule } from '../../shared/shared.module';
import {
  MatDividerModule, MatInputModule, MatTabsModule, MatIconModule, MatCheckboxModule,
  MatSelectModule, MatFormFieldModule, MatOptionModule, MatGridListModule, MatButtonModule
} from '@angular/material';
import { StashtabListModule } from '../components/stashtab-list/stashtab-list.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    MatDividerModule,
    StashtabListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
