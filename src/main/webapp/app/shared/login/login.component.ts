import { Component, OnInit, AfterViewInit, Renderer, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StateService } from 'ui-router-ng2';
import { JhiLanguageService } from '../language/language.service';
import { LoginService } from '../login/login.service';
import { StateStorageService } from '../auth/state-storage.service';
import { EventManager } from '../service/event-manager.service';

@Component({
    selector: 'jhi-login-modal',
    templateUrl: './login.component.html'
})
export class JhiLoginModalComponent implements OnInit, AfterViewInit {
    authenticationError: boolean;
    password: string;
    rememberMe: boolean;
    username: string;
    credentials: any;

    constructor(
        private eventManager: EventManager,
        private $state: StateService,
        private languageService: JhiLanguageService,
        private loginService: LoginService,
        private stateStorageService: StateStorageService,
        private elementRef: ElementRef,
        private renderer: Renderer,
        private activeModal: NgbActiveModal
    ) {
        this.credentials = {};
    }

    ngOnInit() {
        this.languageService.addLocation('login');
    }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#username'), 'focus', []);
    }

    cancel () {
        this.credentials = {
            username: null,
            password: null,
            rememberMe: true
        };
        this.authenticationError = false;
        this.activeModal.dismiss('cancel');
    }

    login () {
        this.loginService.login({
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }).then(() => {
            this.authenticationError = false;
            this.activeModal.dismiss('login success');
            if (this.$state.current.name === 'register' || this.$state.current.name === 'activate' ||
                this.$state.current.name === 'finishReset' || this.$state.current.name === 'requestReset') {
                this.$state.go('home');
            }

            this.eventManager.broadcast({
                name: 'authenticationSuccess',
                content: 'Sending Authentication Success'
            });

            // previousState was set in the authExpiredInterceptor before being redirected to login modal.
            // since login is succesful, go to stored previousState and clear previousState
            let previousState = this.stateStorageService.getPreviousState();
            if (previousState) {
                this.stateStorageService.resetPreviousState();
                this.$state.go(previousState.name, previousState.params);
            }
        }).catch(() => {
            this.authenticationError = true;
        });
    }

    register () {
        this.activeModal.dismiss('to state register');
        this.$state.go('register');
    }

    requestResetPassword () {
        this.activeModal.dismiss('to state requestReset');
        this.$state.go('requestReset');
    }
}
