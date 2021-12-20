import Vare from './vare.js';

// jQuery
// kilde: https://www.jqueryscript.net/gallery/Simple-Clean-jQuery-Vertical-Product-Gallery.html

$(document).ready(function () {
  $('a').click(function () {
    var largeImage = $(this).attr('data-full');
    $('.selected').removeClass();
    $(this).addClass('selected');
    $('.full img').hide();
    $('.full img').attr('src', largeImage);
    $('.full img').fadeIn();
    updateHeading();
  });
});

// Vanilla JS

//global
const _skjorter = [];
let _products = [];
let _type = null;
let _index = null;

const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);
_type = URLDATA.get('type');
_index = URLDATA.get('index');

// slhslimflannel, sort
const slhslimflannel1 = new Vare('Selected', 749.99, 'sort', 'XS', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-sort.jpg', 'Skjorte', 3);
const slhslimflannel2 = new Vare('Selected', 749.99, 'sort', 'Small', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-sort.jpg', 'Skjorte', 2);
const slhslimflannel3 = new Vare('Selected', 749.99, 'sort', 'Medium', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-sort.jpg', 'Skjorte', 1);
const slhslimflannel4 = new Vare('Selected', 749.99, 'sort', 'Large', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-sort.jpg', 'Skjorte', 6);
const slhslimflannel5 = new Vare('Selected', 749.99, 'sort', 'XL', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-sort.jpg', 'Skjorte', 5);

// slhslimflannel, blå
const slhslimflannel6 = new Vare('Selected', 749.99, 'blå', 'XS', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-blå.jpg', 'Skjorte', 4);
const slhslimflannel7 = new Vare('Selected', 749.99, 'blå', 'Small', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-blå.jpg', 'Skjorte', 1);
const slhslimflannel8 = new Vare('Selected', 749.99, 'blå', 'Medium', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-blå.jpg', 'Skjorte', 3);
const slhslimflannel9 = new Vare('Selected', 749.99, 'blå', 'Large', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-blå.jpg', 'Skjorte', 5);
const slhslimflannel10 = new Vare('Selected', 749.99, 'blå', 'XL', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-blå.jpg', 'Skjorte', 2);

// slhslimflannel, grøn
const slhslimflannel11 = new Vare('Selected', 749.99, 'grøn', 'XS', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-grøn.jpg', 'Skjorte', 3);
const slhslimflannel12 = new Vare('Selected', 749.99, 'grøn', 'Small', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-grøn.jpg', 'Skjorte', 1);
const slhslimflannel13 = new Vare('Selected', 749.99, 'grøn', 'Medium', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-grøn.jpg', 'Skjorte', 3);
const slhslimflannel14 = new Vare('Selected', 749.99, 'grøn', 'Large', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-grøn.jpg', 'Skjorte', 6);
const slhslimflannel15 = new Vare('Selected', 749.99, 'grøn', 'XL', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-grøn.jpg', 'Skjorte', 5);

// slhslimflannel, hvid
const slhslimflannel16 = new Vare('Selected', 749.99, 'hvid', 'XS', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-hvid.jpg', 'Skjorte', 3);
const slhslimflannel17 = new Vare('Selected', 749.99, 'hvid', 'Small', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-hvid.jpg', 'Skjorte', 6);
const slhslimflannel18 = new Vare('Selected', 749.99, 'hvid', 'Medium', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-hvid.jpg', 'Skjorte', 9);
const slhslimflannel19 = new Vare('Selected', 749.99, 'hvid', 'Large', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-hvid.jpg', 'Skjorte', 5);
const slhslimflannel20 = new Vare('Selected', 749.99, 'hvid', 'XL', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-hvid.jpg', 'Skjorte', 1);

// slhslimflannel, orange
const slhslimflannel21 = new Vare('Selected', 749.99, 'orange', 'XS', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-orange.jpg', 'Skjorte', 4);
const slhslimflannel22 = new Vare('Selected', 749.99, 'orange', 'Small', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-orange.jpg', 'Skjorte', 2);
const slhslimflannel23 = new Vare('Selected', 749.99, 'orange', 'Medium', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-orange.jpg', 'Skjorte', 2);
const slhslimflannel24 = new Vare('Selected', 749.99, 'orange', 'Large', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-orange.jpg', 'Skjorte', 2);
const slhslimflannel25 = new Vare('Selected', 749.99, 'orange', 'XL', 'Reduceret CO2-udslip', './images/varer/skjorter/slhslimflannel/slhslimflannel-orange.jpg', 'Skjorte', 5);

const slhslimflannelSet = new Set();
slhslimflannelSet
  .add(slhslimflannel1)
  .add(slhslimflannel2)
  .add(slhslimflannel3)
  .add(slhslimflannel4)
  .add(slhslimflannel5)
  .add(slhslimflannel6)
  .add(slhslimflannel7)
  .add(slhslimflannel8)
  .add(slhslimflannel9)
  .add(slhslimflannel10)
  .add(slhslimflannel11)
  .add(slhslimflannel12)
  .add(slhslimflannel13)
  .add(slhslimflannel14)
  .add(slhslimflannel15)
  .add(slhslimflannel16)
  .add(slhslimflannel17)
  .add(slhslimflannel18)
  .add(slhslimflannel19)
  .add(slhslimflannel20)
  .add(slhslimflannel21)
  .add(slhslimflannel22)
  .add(slhslimflannel23)
  .add(slhslimflannel24)
  .add(slhslimflannel25);
_skjorter.push(slhslimflannelSet);

// pierOne, sort
const pierOne1 = new Vare('Pier One', 1299.99, 'sort', 'XS', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-sort.jpg', 'Skjorte', 3);
const pierOne2 = new Vare('Pier One', 1299.99, 'sort', 'Small', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-sort.jpg', 'Skjorte', 2);
const pierOne3 = new Vare('Pier One', 1299.99, 'sort', 'Medium', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-sort.jpg', 'Skjorte', 1);
const pierOne4 = new Vare('Pier One', 1299.99, 'sort', 'Large', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-sort.jpg', 'Skjorte', 6);
const pierOne5 = new Vare('Pier One', 1299.99, 'sort', 'XL', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-sort.jpg', 'Skjorte', 5);

// pierOne, blå
const pierOne6 = new Vare('Pier One', 1299.99, 'blå', 'XS', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-blå.jpg', 'Skjorte', 4);
const pierOne7 = new Vare('Pier One', 1299.99, 'blå', 'Small', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-blå.jpg', 'Skjorte', 1);
const pierOne8 = new Vare('Pier One', 1299.99, 'blå', 'Medium', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-blå.jpg', 'Skjorte', 3);
const pierOne9 = new Vare('Pier One', 1299.99, 'blå', 'Large', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-blå.jpg', 'Skjorte', 5);
const pierOne10 = new Vare('Pier One', 1299.99, 'blå', 'XL', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-blå.jpg', 'Skjorte', 2);

// pierOne, rød
const pierOne11 = new Vare('Pier One', 1299.99, 'rød', 'XS', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-rød.jpg', 'Skjorte', 3);
const pierOne12 = new Vare('Pier One', 1299.99, 'rød', 'Small', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-rød.jpg', 'Skjorte', 1);
const pierOne13 = new Vare('Pier One', 1299.99, 'rød', 'Medium', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-rød.jpg', 'Skjorte', 3);
const pierOne14 = new Vare('Pier One', 1299.99, 'rød', 'Large', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-rød.jpg', 'Skjorte', 6);
const pierOne15 = new Vare('Pier One', 1299.99, 'rød', 'XL', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-rød.jpg', 'Skjorte', 5);

// pierOne, hvid
const pierOne16 = new Vare('Pier One', 1299.99, 'hvid', 'XS', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-hvid.jpg', 'Skjorte', 3);
const pierOne17 = new Vare('Pier One', 1299.99, 'hvid', 'Small', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-hvid.jpg', 'Skjorte', 6);
const pierOne18 = new Vare('Pier One', 1299.99, 'hvid', 'Medium', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-hvid.jpg', 'Skjorte', 9);
const pierOne19 = new Vare('Pier One', 1299.99, 'hvid', 'Large', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-hvid.jpg', 'Skjorte', 5);
const pierOne20 = new Vare('Pier One', 1299.99, 'hvid', 'XL', 'Vandbesparende', './images/varer/skjorter/pier-one/pier-one-hvid.jpg', 'Skjorte', 1);

const pierOneSet = new Set();
pierOneSet.add(pierOne1).add(pierOne2).add(pierOne3).add(pierOne4).add(pierOne5).add(pierOne6).add(pierOne7).add(pierOne8).add(pierOne9).add(pierOne10).add(pierOne11).add(pierOne12).add(pierOne13).add(pierOne14).add(pierOne15).add(pierOne16).add(pierOne17).add(pierOne18).add(pierOne19).add(pierOne20);
_skjorter.push(pierOneSet);

// trostol, rød
const trostol1 = new Vare('Trostol', 499.99, 'rød', 'XS', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-rød.jpg', 'Skjorte', 5);
const trostol2 = new Vare('Trostol', 499.99, 'rød', 'Small', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-rød.jpg', 'Skjorte', 4);
const trostol3 = new Vare('Trostol', 499.99, 'rød', 'Medium', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-rød.jpg', 'Skjorte', 6);
const trostol4 = new Vare('Trostol', 499.99, 'rød', 'Large', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-rød.jpg', 'Skjorte', 2);
const trostol5 = new Vare('Trostol', 499.99, 'rød', 'XL', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-rød.jpg', 'Skjorte', 0);

// trostol, blå
const trostol6 = new Vare('Trostol', 499.99, 'blå', 'XS', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-blå.jpg', 'Skjorte', 10);
const trostol7 = new Vare('Trostol', 499.99, 'blå', 'Small', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-blå.jpg', 'Skjorte', 3);
const trostol8 = new Vare('Trostol', 499.99, 'blå', 'Medium', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-blå.jpg', 'Skjorte', 5);
const trostol9 = new Vare('Trostol', 499.99, 'blå', 'Large', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-blå.jpg', 'Skjorte', 0);
const trostol10 = new Vare('Trostol', 499.99, 'blå', 'XL', 'Genbrug af materialer', './images/varer/skjorter/trostol/trostol-blå.jpg', 'Skjorte', 0);

const trostolSet = new Set();
trostolSet.add(trostol1).add(trostol2).add(trostol3).add(trostol4).add(trostol5).add(trostol6).add(trostol7).add(trostol8).add(trostol9).add(trostol10);
_skjorter.push(trostolSet);

// lindbergh, grå
const lindbergh1 = new Vare('Lindbergh', 699.99, 'grå', 'XS', null, './images/varer/skjorter/lindbergh/lindbergh-grå.jpg', 'Skjorte', 5);
const lindbergh2 = new Vare('Lindbergh', 699.99, 'grå', 'Small', null, './images/varer/skjorter/lindbergh/lindbergh-grå.jpg', 'Skjorte', 4);
const lindbergh3 = new Vare('Lindbergh', 699.99, 'grå', 'Medium', null, './images/varer/skjorter/lindbergh/lindbergh-grå.jpg', 'Skjorte', 6);
const lindbergh4 = new Vare('Lindbergh', 699.99, 'grå', 'Large', null, './images/varer/skjorter/lindbergh/lindbergh-grå.jpg', 'Skjorte', 2);
// const lindbergh5 = new Vare('Lindbergh', 699.99, 'grå', 'XL', null, './images/varer/skjorter/lindberghlindbergh-grå.jpg', 'Skjorte', 0);

// lindbergh, blå
const lindbergh6 = new Vare('Lindbergh', 699.99, 'blå', 'XS', null, './images/varer/skjorter/lindbergh/lindbergh-blå.jpg', 'Skjorte', 10);
const lindbergh7 = new Vare('Lindbergh', 699.99, 'blå', 'Small', null, './images/varer/skjorter/lindbergh/lindbergh-blå.jpg', 'Skjorte', 3);
const lindbergh8 = new Vare('Lindbergh', 699.99, 'blå', 'Medium', null, './images/varer/skjorter/lindbergh/lindbergh-blå.jpg', 'Skjorte', 5);
const lindbergh9 = new Vare('Lindbergh', 699.99, 'blå', 'Large', null, './images/varer/skjorter/lindbergh/lindbergh-blå.jpg', 'Skjorte', 0);
// const lindbergh10 = new Vare('Lindbergh', 699.99, 'blå', 'XL', null, './images/varer/skjorter/lindbergh/lindbergh-blå.jpg', 'Skjorte', 0);

const lindberghSet = new Set();
lindberghSet.add(lindbergh1).add(lindbergh2).add(lindbergh3).add(lindbergh4).add(lindbergh6).add(lindbergh7).add(lindbergh8).add(lindbergh9);
_skjorter.push(lindberghSet);
appendProductsToDom();

function appendProductsToDom() {
  if (_type === null || _index === null) {
    return;
  } else if (_type.localeCompare('Skjorte', 'da', { sensitivity: 'base' }) === 0) {
    _products = Array.from(_skjorter[_index]);
  }
  document.querySelector('#product-details__container .full img').setAttribute('src', _products[0].billedsti);
  document.querySelector('#product-details__container .full img').setAttribute('data-index', 0);
  document.querySelector('#product-details__container .detaljer').innerHTML = /*html*/ `
    <div>
    <select name="size-select" id="size-select">
      <option value="XS">XS</option>
      <option value="Small">Small</option>
      <option value="Medium">Medium</option>
      <option value="Large">Large</option>
      <option value="XL">XL</option>
    </select>
    </div>
    <button id="put-in-basket">Læg i kurven</button>
  `;
  for (let i = 0; i < _products.length; i++) {
      if (_products[i].størrelse.localeCompare('XS', 'da', {sensitivity: 'base'})=== 0) {
          if (i === 0) {
              document.querySelector('#product-details__container .previews').innerHTML += /*html*/ `<a href="#" class="selected" data-index=${i} data-full="${_products[i].billedsti}"><img src="${_products[i].billedsti.slice(0, -4)}-small.jpg"></a>`;
          } else {
              document.querySelector('#product-details__container .previews').innerHTML += /*html*/ `<a href="#" data-index=${i} data-full="${_products[i].billedsti}"><img src="${_products[i].billedsti.slice(0, -4)}-small.jpg"></a>`;
          }
      }
  }
  document.querySelector('#put-in-basket').addEventListener('click', () => {
    let size = document.querySelector('#size-select').value;
    let index = document.querySelector('.selected').getAttribute('data-index');
    console.log(`${_products[index].model} lagt i kurven (${size}, ${_products[index].farve})`);
  });
  document.querySelector('#size-select').addEventListener('change', () => {
    updateHeading();
  });
  updateHeading();
}

function updateHeading() {
    let size = document.querySelector('#size-select').value;
    let index = document.querySelector('.selected').getAttribute('data-index');
    if (size !== null && index !== null) {
      document.querySelector('#product-details__container h2').innerText = `${_products[index].type}, ${_products[index].model}, ${size}, ${_products[index].farve}, ${_products[index].pris} DKK`;
    }
}