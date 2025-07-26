import { Component, inject, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss',
})
export class CategoryFormComponent {
  private fb = inject(FormBuilder);
  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  fbgroup: FormGroup;
  isEdit: boolean = false;
  categoryId: any;
  constructor() {
    this.fbgroup = this.fb.group({
      name: ['', Validators.required],
    });
    let id = this.route.snapshot.params['id'];
    this.categoryId = id;
    if (id) {
      this.isEdit = true;
      this.categoryService.getCategoryById(id).subscribe((res: any) => {
        if (res.data) {
          this.fbgroup.setValue({
            name: res.data?.name,
          });
        }
      });
    }
  }
  onSubmit() {
    if (this.fbgroup.valid) {
      if (this.isEdit) {
        this.categoryService
          .updateCategory(this.fbgroup.value, this.categoryId)
          .subscribe((res: any) => {
            if (res) {
              this.router.navigateByUrl('admin/categories');
            }
          });
      } else {
        this.categoryService
          .addCategory(this.fbgroup.value)
          .subscribe((res: any) => {
            if (res.data) {
              this.router.navigateByUrl('admin/categories');
            }
          });
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
