import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-boot',
    template:
    `<div class="container">
         <router-outlet></router-outlet>
    </div>

    <div class="footer">
        <div class="container">
            <p class="text-muted">Rutha / MIT Licensed / Made in Panama.</p>
        </div>
    </div>`,
})

export class LayoutComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
       // this._router.navigate(['Index']);
    }
}