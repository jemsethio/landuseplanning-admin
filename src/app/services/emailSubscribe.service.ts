import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { flatMap, mergeMap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

import { ApiService } from './api';
import { EmailSubscribe } from 'app/models/emailSubscribe';

@Injectable()
export class EmailSubscribeService {

  private emailSubscribers: EmailSubscribe;

  constructor(
    private api: ApiService,
  ) { }

  // get a specific email by address & project
  /*
  getById(commentId: string, forceReload: boolean = false): Observable<Comment> {
    if (this.comment && this.comment._id === commentId && !forceReload) {
      return Observable.of(this.comment);
    }

    // first get the comment data
    return this.api.getComment(commentId)
    .pipe(
      flatMap(res => {
        let comments = res.body;
        if (!comments || comments.length === 0) {
          return of(null as Comment);
        }
        // Safety check for null documents or an empty array of documents.
        if (comments[0].documents === null || comments[0].documents && comments[0].documents.length === 0) {
          return of(new Comment(comments[0]));
        }
        // now get the rest of the data for this project
        return this._getExtraAppData(new Comment(comments[0]));
      })
    )
    .catch(error => this.api.handleError(error));
  }*/

  public getAll(currentProjectId: string): Observable<Object> {
    let emailSubscribe = [];
    return this.api.getEmails(currentProjectId)
      .map((res: any) => {
        if (res) {
          if (!res || res.length === 0) {
            return { totalCount: 0, data: [] };
          }
          res.forEach(email => {
            emailSubscribe.push(new EmailSubscribe(email));
          });
          return { totalCount: res.length, data: emailSubscribe };
        }
        return {};
      })
      .catch(error => this.api.handleError(error));
  }

  public deleteEmail(emailAddress: string, projectId: string): Observable<Object> {
    return this.api.deleteEmail(emailAddress, projectId)
      .map((res: any) => {
        if (res) {
          return { res };
        }
        return {};
      })
      .catch(error => this.api.handleError(error));
  }

}
