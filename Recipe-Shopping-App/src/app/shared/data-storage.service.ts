import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeRecipes() {
    // https://ng-course-recipe-book-fd6e6.firebaseio.com/
  }
}
