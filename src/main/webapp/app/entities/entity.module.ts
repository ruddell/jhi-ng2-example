import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { Ng2TestSharedModule } from '../shared';

let ENTITY_STATES = [

];

@NgModule({
    imports: [
        Ng2TestSharedModule,
        UIRouterModule.forChild({ states: ENTITY_STATES })
    ],
    declarations: [

    ],
    entryComponents: [

    ],
    providers: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ng2TestEntityModule {}
