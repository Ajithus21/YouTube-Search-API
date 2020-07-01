import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class YTService {
	key;
	searchUrl;
	maxResult = 10;
	constructor(private httpclient: HttpClient) {
		this.key = 'AIzaSyCtsIC3dROLmWsKhW5QhlOZZSUbjN1G9cI';
		this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?key=';
	}

	getData(data): Observable<any> {
		console.log(data);
		return this.httpclient.get(this.searchUrl + this.key + '&type=video&part=snippet' + '&q=' + data);
	}
}
