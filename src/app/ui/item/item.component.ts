import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  snapshotItems: Observable<DocumentChangeAction<Item>[]>;

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.itemsCollection = this.db.collection<Item>('items') ;
    this.items = this.itemsCollection.valueChanges({ idField: 'id' });
    this.snapshotItems = this.itemsCollection.snapshotChanges();
    this.snapshotItems.subscribe({
      next: (vals) => {
        console.log(vals);
      }
    });

    this.items.subscribe( {
      next: (vals) => {
        console.log(vals);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('item load complete ...');
      }
    });
  }

  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

}

export interface Item {
  item_name: string ;
  price: number ;
}
