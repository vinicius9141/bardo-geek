import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private afs: AngularFirestore) {}

  public savePost(savePost: any): void {
    this.afs.collection('Posts').add(savePost);
  }

  public getPosts(): Observable<any> {
    return this.afs.collection('Posts').valueChanges();
  }
}
