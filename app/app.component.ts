import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { DashboardComponent } from './dashboard/dashboard';
import { SubscriptionComponent, SubscriptionService } from './subscription/subscription.export';
import { ExceptionService, FormTabsService } from './blocks/blocks.export';
import { FormService } from './form/form.export';


@Component({
  selector: 'subscription-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    ExceptionService,
    FormService,
    SubscriptionService,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ]
})
@RouteConfig([
  { path: '/Dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
  { path: '/Subscription/...', name: 'Subscription', component: SubscriptionComponent }
])
export class AppComponent {
  constructor() {
  }

}
