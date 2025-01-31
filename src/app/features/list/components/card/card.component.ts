import { Component, computed, EventEmitter, input, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';
import { computeMsgId } from '@angular/compiler';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  product = input.required<Product>()

  productTitle = computed(() => this.product().title);

  @Output() edit = new EventEmitter();

  onEdit() {
    this.edit.emit(this.product);
  }

}
