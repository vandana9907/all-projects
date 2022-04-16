import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongifService {

  constructor(private http: HttpClient) { }
  getCourseListCourse() {
    return this.http.get('assets/mock-data/courses-list.json')
  }

  getCourseListCourse1() {
    return this.http.get('assets/mock-data/cloud.json')
  }

  getCourseListCourse2() {
    return this.http.get('assets/mock-data/appdevelopment.json')
  }
  getCourseListCourse3() {
    return this.http.get('assets/mock-data/machine.json')
  }
  getCourseListCourse4() {
    return this.http.get('assets/mock-data/testing.json')
  }
  getProfiledata() {
    return this.http.get('assets/mock-data/profiledata.json')

  }

}
