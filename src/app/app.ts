import { XHRBackend } from '@angular/http';
import { InMemoryBackendService,
         SEED_DATA }  from 'angular2-in-memory-web-api';
import { UsersData }   from './data/users-data';
import { HTTP_PROVIDERS } from '@angular/http';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import {LayoutComponent} from './layout'
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {provide}           from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(LayoutComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: UsersData }) ,    
    provide(LocationStrategy,
        { useClass: HashLocationStrategy })
]);
