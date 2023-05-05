import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../model/userdata.model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private apiUrl = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    },
    ),
  };
  constructor(private http: HttpClient) { }


  // ------------plz dont delete this onsubmit method------------
  exampletMethod(data: any): Observable<any> {
    return this.http.post(this.apiUrl + '/your end point goes here', data);
  }
  GetAllRoles(): Observable<any> {
    return this.http.get(this.apiUrl + 'Admin/GetAllRoles');
  }
  postname(postData: any){
    return this.http.post('https://angular-data-f270d-default-rtdb.firebaseio.com/addemployee.json',postData)
  }
  getEmployeedata(){
    return this.http.get<{ [key: string]: UserData }>('https://angular-data-f270d-default-rtdb.firebaseio.com/addemployee.json').pipe(map(responseData => {
      const postsArray: UserData[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          postsArray.push({ ...responseData[key], id: key });
        }
      }
      return postsArray;
    })
  )
  }
  updateCategory(id:any,UserData:any){
    debugger


    return  this.http.put<UserData>('https://angular-data-f270d-default-rtdb.firebaseio.com/addemployee/'+id+'.json',UserData)



   }
}
