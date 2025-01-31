import { Component, Input, Output, EventEmitter, computed } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'], // Corrected key
})
export class CardComponent {
  @Input() product!: Product; // Use @Input() to accept a Product

  productTitle = computed(() => this.product.title);

  @Output() edit = new EventEmitter<Product>(); // Emit Product on edit
  @Output() delete = new EventEmitter<Product>(); // Emit Product on delete

  onEdit() {
    this.edit.emit(this.product); // Emit product when edit is triggered
  }

  onDelete() {
    this.delete.emit(this.product); // Emit product when delete is triggered
  }
}
