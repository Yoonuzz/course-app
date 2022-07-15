import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{HttpClient,HttpClientModule} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) { }
  getcourses(){
    return this.http.get('https://mylinkurcodesapp.herokuapp.com/getcourses');
  }
  addcourse(course:any){
    return this.http.post('https://mylinkurcodesapp.herokuapp.com/addcourse',course);
  }
}
