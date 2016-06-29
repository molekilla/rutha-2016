
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LayoutComponent} from './layout'
import { APP_ROUTER_PROVIDERS } from './routes';
import {provide}           from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(LayoutComponent, [
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);