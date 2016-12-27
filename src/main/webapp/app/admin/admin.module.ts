import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UIRouterModule } from 'ui-router-ng2';

import { Ng2TestSharedModule, ParseLinks } from '../shared';

import {
    AuditsComponent,
    UserMgmtComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    LogsComponent,
    JhiMetricsMonitoringModalComponent,
    JhiMetricsMonitoringComponent,
    JhiHealthModalComponent,
    JhiHealthCheckComponent,
    JhiConfigurationComponent,
    JhiDocsComponent,
    AuditsService,
    UserService,
    JhiConfigurationService,
    JhiHealthService,
    JhiMetricsService,
    LogsService,
    adminState,
    auditState,
    configState,
    docsState,
    healthState,
    logsState,
    userMgmtState,
    userMgmtDetailState,
    userMgmtNewState,
    userMgmtEditState,
    userMgmtDeleteState,
    metricsState
} from './';

let ADMIN_STATES = [
    adminState,
    auditState,
    configState,
    docsState,
    healthState,
    logsState,
    userMgmtState,
    userMgmtDetailState,
    userMgmtNewState,
    userMgmtEditState,
    userMgmtDeleteState,
    metricsState
];

@NgModule({
    imports: [
        Ng2TestSharedModule,
        UIRouterModule.forChild({ states: ADMIN_STATES })
    ],
    declarations: [
        AuditsComponent,
        UserMgmtComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        LogsComponent,
        JhiConfigurationComponent,
        JhiHealthCheckComponent,
        JhiHealthModalComponent,
        JhiDocsComponent,
        JhiMetricsMonitoringComponent,
        JhiMetricsMonitoringModalComponent
    ],
    entryComponents: [
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        JhiHealthModalComponent,
        JhiMetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        UserService,
        JhiConfigurationService,
        JhiHealthService,
        JhiMetricsService,
        LogsService,
        ParseLinks
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Ng2TestAdminModule {}
