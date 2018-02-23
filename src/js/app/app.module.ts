import 'rxjs/add/operator/toPromise';
import {CommonModule}	        from	'@angular/common'
import {BrowserModule}	        from	'@angular/platform-browser'
import {ReactiveFormsModule}	from	'@angular/forms'
import {NgModule}	            from	'@angular/core'
import {FormsModule}	        from	'@angular/forms'
import {HttpModule}	            from	'@angular/http'
import {APP_BASE_HREF}	        from	'@angular/common'
import {routing}	            from	'./app.routes'
import {AppComponent}	        from	'./app.component'

import {HomeView}               from    './view/home.view'

@NgModule({
    imports: [CommonModule, BrowserModule, ReactiveFormsModule,FormsModule, HttpModule,routing],
    declarations: [AppComponent,HomeView],
    entryComponents: [],
    providers: [
     {provide: APP_BASE_HREF, useValue:"/"}
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}