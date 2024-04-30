import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import {MatSort} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  private paginator: MatPaginator;
  private sort: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  // @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
  //   this.paginator = mp;
  //   this.setDataSourceAttributes();
  // }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.paginator && this.sort) {
      this.applyFilter('');
    }
  }

  public dataLength: number;


  public displayedColumns: string[] = ['id','node_id','name','full_name', 'url'];

  public searchTerm$ = new Subject<string>();
  public dataSource: any;

  // dataSource: MatTableDataSource<any>;

  constructor(private data: DataService) {
  }

  setNewUserName(event: Event): void {
    console.log('setNewUserName', (event.target as HTMLTextAreaElement).value);
  }

  ngOnInit() {
    this.getAllRepos();
  }

  ngAfterViewInit() {
    this.setDataSourceAttributes();
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getAllRepos() {
    this.data.getAllRepos().subscribe((data:any) => {
      this.dataSource = data;
      // this.dataSource = new MatTableDataSource(data);
      console.log("repo list", this.dataSource)

    });
  }

  //  getData() {
  //   this.data.getAllRepos().subscribe((data) => {
  //     // this.dataSource = data;
  //     this.dataSource = data;
  //     // console.log('pls data', this.dataSource.items[2].id);
  //     for (const key in this.dataSource.items) {
  //       if (this.dataSource.items.hasOwnProperty(key)) {
  //         const element = this.dataSource.items[key].owner.url;
  //         this.dataSource = element;
  //         // console.log('ai man wena', key + ': ', element);
  //       }
  //     }
  //   });
  // }

  // public getAllRecords(): any {
  //   this.data.getAllRecords(this.membersUrl).subscribe((data) => {
  //     this.dataLength = data.length;
  //     this.dataSource.data = data;
  //   });
  // }

}

