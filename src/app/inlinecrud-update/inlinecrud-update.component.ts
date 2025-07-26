import { Component } from '@angular/core';
import { UsertableService } from '../Services/usertable.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inlinecrud-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './inlinecrud-update.component.html',
  styleUrl: './inlinecrud-update.component.css'
})


export class InlinecrudUpdateComponent {

}
