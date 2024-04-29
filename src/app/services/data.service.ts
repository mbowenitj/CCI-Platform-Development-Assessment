import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private api = '/api/';

  // Temporarily stores data from dialogs
  dialogData: any;

  constructor(private http: HttpClient) {}

  getDialogData() {
    return this.dialogData;
  }

  // GET LIST ALL REPOS
  getAllRepos() {
    return this.http.get('https://api.github.com/search/repositories?q=bootstrap');
  }

  getRepoIssues() {
    return this.http.get(
      'https://api.github.com/search/issues?q=repo:username/reponame'
    );
  }

  getBoostrapIssues() {
    return this.http.get(
      'https://api.github.com/repos/twbs/bootstrap/issues?state=all'
    );
  }

  searchIssues() {
    return this.http.get(
      'https://developer.github.com/v3/search/#search-issues'
    );
  }

  gitHubIssues() {
    return this.http.get('https://developer.github.com/v3/search/');
  }

   //  Called by the Mat Datatable search by last name.
  // nameSearch(terms) {
  //   return terms.pipe(
  //       debounceTime(300),
  //       distinctUntilChanged(),
  //       switchMap(term => {
  //         const url = `api/members/?last_name=${term}`;
  //         return this.http.get(url);
  //     }),
  //     catchError((error: any) => {
  //          console.error(error);
  //          return of();
  //     }),
  //   );
  // }


    // --------------GET ALL RECORDS ------------
    // public getAllRecords(url): Observable<any> {
    //   return this.http.get<MemberModel>(url).pipe(
    //     catchError((error: any) => {
    //          console.error(error);
    //          return of();
    //        }),
    //   );
    // }

}
