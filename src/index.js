require('formdata-polyfill');
import 'whatwg-fetch';

import sliderTop from './mods/slider_top';
import sliderBottom from './mods/slider_bottom';
import loadMore from './mods/loadmore';
import accordeon from './mods/accordeon';
import filter from './mods/filter';
import formsvalidate from './mods/formsvalidate';
import sendform from './mods/sendform';
import imagehover from './mods/imagehover';
import burger from './mods/burger';
import calc from './mods/calc';
import present from './mods/present';
import consultation from './mods/consultation';
import design from './mods/design';
import allmodal from './mods/allmodal';

window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    sliderTop();
    sliderBottom();
    loadMore();
    accordeon();
    filter();
    formsvalidate();
    sendform();
    imagehover();
    burger();
    calc();
    present();
    consultation();
    design();
    allmodal();


});

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
}



