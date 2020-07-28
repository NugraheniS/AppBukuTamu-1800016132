import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: any = 'http://localhost/rest-api/public/user';
  constructor(private http: HttpClient) { }
  // status()
  // {
  //     return this.http.get(this.apiUrl+'status');
  // }
  baca()
  {
    return this.http.get(this.apiUrl);
  }  
   simpan(data)
  {
    return this.http.post(this.apiUrl,data);
}
  ubah(data){
    return this.http.put(this.apiUrl+'/' + data.id, data);
  }
  hapus(id){
    return this.http.delete(this.apiUrl+'/delete/' + id);
  }
} 