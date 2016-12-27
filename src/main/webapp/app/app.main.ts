import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { Ng2TestAppModule } from './app.module';

ProdConfig();

platformBrowserDynamic().bootstrapModule(Ng2TestAppModule);
