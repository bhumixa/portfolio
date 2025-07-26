import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../../types/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);

  constructor() {}

  getCategories() {
    return this.http.get<Category[]>('http://localhost:3000/api/category');
  }

  addCategory(requestData: any) {
    return this.http.post(
      'http://localhost:3000/api/category/create',
      requestData
    );
  }

  updateCategory(requestData: any, categoryId: string) {
    return this.http.put(
      `http://localhost:3000/api/category/${categoryId}`,
      requestData
    );
  }

  deleteCategory(categoryId: any) {
    return this.http.delete(`http://localhost:3000/api/category/${categoryId}`);
  }

  getCategoryById(categoryId: any) {
    return this.http.get<Category>(
      `http://localhost:3000/api/category/${categoryId}`
    );
  }
}
