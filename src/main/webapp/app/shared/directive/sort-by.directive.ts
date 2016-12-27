import { Directive, Host, HostListener, Input, ElementRef, Renderer } from '@angular/core';
import { JhiSortDirective } from './sort.directive';

@Directive({
    selector: '[jhiSortBy]'
})
export class JhiSortByDirective {

    @Input() jhiSortBy: string;

    jhiSort: JhiSortDirective;

    constructor(@Host() jhiSort: JhiSortDirective,  private el: ElementRef, private _renderer: Renderer) {
        this.jhiSort = jhiSort;
    }

    @HostListener('click') onClick() {
    	if (this.jhiSort.predicate && this.jhiSort.predicate !== '_score') {
        	this.jhiSort.sort(this.jhiSortBy);
        	this.applyClass();
        }
    }

    applyClass () {
        let childSpan = this.el.nativeElement.children[1],
            sortDesc = 'fa-sort-desc',
            add = 'fa-sort-asc';
        if (!this.jhiSort.ascending) {
            add = sortDesc;
        }
        this.resetClasses(childSpan);
        this._renderer.setElementClass(childSpan, add, true);
    }

    resetClasses (childSpan) {
        let remove = childSpan.className;
        let classesToRemove = remove.split(' ');
        this._renderer.setElementClass(childSpan, classesToRemove[1], false);
    }
}
