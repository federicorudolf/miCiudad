import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../../assets/js/charts.js');
// import * as initDemo from '../../../../assets/js/charts.js';
declare var $: any;

@Component({
    selector: 'app-home',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    ngOnInit() {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
         initDemo();
    }
}
