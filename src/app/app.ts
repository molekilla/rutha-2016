
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LayoutComponent} from './layout'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide}           from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);