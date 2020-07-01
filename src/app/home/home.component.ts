import { Component, OnInit } from '@angular/core';
import { YTService } from '../yt.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	searchForm;
	myData;
	max = 10;
	url = 'https://www.youtube.com/embed/If1pv_utDLQ';
	constructor(private ytservice: YTService, private sanitizer: DomSanitizer) {
		this.searchForm = new FormGroup({
			userName: new FormControl('', Validators.required)
		});
		console.log(this.searchForm.value.userName);
	}
	ngOnInit(): void {}

	sendData() {
		this.ytservice.getData(this.searchForm.value.userName).subscribe((data) => {
			console.log(data);
			this.myData = data.items;
			console.log(this.myData);
		});
	}
	getEmbedUrl(item) {
		return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item + '?rel=0');
	}
}
