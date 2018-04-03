import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";

const openClass = "open";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    }

    ngOnInit() {
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}