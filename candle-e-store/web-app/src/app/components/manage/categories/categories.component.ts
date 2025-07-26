import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CategoryService } from '../../services/category.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

export interface CategoriesData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource: MatTableDataSource<CategoriesData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  categoryService = inject(CategoryService);
  constructor() {
    this.dataSource = new MatTableDataSource([] as any);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((res: any) => {
      this.dataSource = res.data;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: any) {
    this.categoryService.deleteCategory(id).subscribe((res: any) => {
      if (!!res) {
        this.getCategories();
      }
    });
  }
}
