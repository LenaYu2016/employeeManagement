
import {bootstrap} from "angular2/platform/browser";
import {AdminComponent} from './admin.component'
import {provide, enableProdMode} from '@angular/core';
import { AuthConfig, AuthHttp } from 'angular2-jwt/angular2-jwt';
import {FORM_PROVIDERS} from 'angular2/common';
import { HTTP_PROVIDERS,Http } from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AUTH_PROVIDERS} from "angular2-jwt/angular2-jwt";
import {Provider} from "angular2/core";


 bootstrap(AdminComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS, FORM_PROVIDERS,
   AUTH_PROVIDERS]);