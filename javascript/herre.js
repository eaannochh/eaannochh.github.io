import Vare from './vare.js';

// JQUERY
// kilde: https://www.jqueryscript.net/form/jQuery-Plugin-For-Multiple-Select-With-Checkboxes-multi-select-js.html

$('#størrelse').multiSelect({
  noneText: '-- Størrelse --',
  allText: '-- Alle --',
});

$('#farve').multiSelect({
  noneText: '-- Farve --',
  allText: '-- Alle --',
});

$('#pris').multiSelect({
  noneText: '-- Pris --',
  allText: '-- Alle --',
});

$('#bæredygtighed').multiSelect({
  noneText: '-- Bæredygtighed --',
  allText: '-- Alle --',
});

$('.multi-select').change(function () {
  filterResults(_skjorter);
});

// VANIALLA JS

//global
const _filteredSizes = [];
const _filteredColors = [];
const _filteredPrices = [];
const _filteredSustainability = [];
const _skjorter = [];

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
const trostol3 = new Vare('Trostol', 499.99, 'rød', 'Medium', 'Genbrug af materialer', './images/varer/skjorter/trostoltrostol-rød.jpg', 'Skjorte', 6);
const trostol4 = new Vare('Trostol', 499.99, 'rød', 'Large', 'Genbrug af materialer', './images/varer/skjorter/trostoltrostol-rød.jpg', 'Skjorte', 2);
const trostol5 = new Vare('Trostol', 499.99, 'rød', 'XL', 'Genbrug af materialer', './images/varer/skjorter/trostoltrostol-rød.jpg', 'Skjorte', 0);

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
const lindbergh3 = new Vare('Lindbergh', 699.99, 'grå', 'Medium', null, './images/varer/skjorter/lindberghlindbergh-grå.jpg', 'Skjorte', 6);
const lindbergh4 = new Vare('Lindbergh', 699.99, 'grå', 'Large', null, './images/varer/skjorter/lindberghlindbergh-grå.jpg', 'Skjorte', 2);
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

// append all products to dom
appendProductsToDom(_skjorter);

function appendProductsToDom(products) {
  const productContainer = document.querySelector('#product__container') ?? null;
  if (productContainer !== null) {
    productContainer.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
      // destructuring to get first item
      const [firstItem] = products[i];

      productContainer.innerHTML += /*html*/ `
            <a href="produktdetaljer.html?type=${firstItem.type.replace(' ', '%20')}&index=${i}">
                <div class="product" data-product-set-index=${i}>
                    <h3>${firstItem.model}</h3>
                    <img src="${firstItem.billedsti}">
                    <p class="price">${firstItem.pris} DKK</p>
                </div>
            </a>
            `;
    }
  }
}

function filterResults(products) {
  const productContainer = document.querySelector('#product__container') ?? null;
  // create shallow copy to avoid mutation
  let filteredProducts = [];
  let targetArray = [];
  if (productContainer !== null) {
    let filteredSizes = $('#størrelse').val();
    let filteredColors = $('#farve').val();
    let filteredPrices = $('#pris').val();
    let filteredSustainability = $('#bæredygtighed').val();

    for (let i = 0; i < products.length; i++) {
      let setContainsSize = false;
      let setContainsColors = false;
      let setContainsPrice = false;
      let setContainsSustainability = false;
      // sizes
      if (filteredSizes.length > 0) {
        targetArray = Array.from(products[i]);
        for (const size of filteredSizes) {
          for (const element of targetArray) {
            if (element.størrelse.localeCompare(size, 'da', { sensitivity: 'base' }) === 0) {
              setContainsSize = true;
            }
          }
        }
      } else {
        setContainsSize = true;
      }

      // colors
      if (filteredColors.length > 0) {
        targetArray = Array.from(products[i]);
        for (const color of filteredColors) {
          for (const element of targetArray) {
            if (element.farve.localeCompare(color, 'da', { sensitivity: 'base' }) === 0) {
              setContainsColors = true;
            }
          }
        }
      } else {
        setContainsColors = true;
      }

      // prices
      if (filteredPrices.length > 0) {
        targetArray = Array.from(products[i], (e) => e.pris);
        for (const price of filteredPrices) {
          switch (price) {
            case '0-250':
              for (const e of targetArray) {
                if (e >= 0 && e <= 250) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
            case '250-500':
              for (const e of targetArray) {
                if (e >= 250 && e <= 500) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
            case '500-750':
              for (const e of targetArray) {
                if (e >= 500 && e <= 750) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
            case '750-1000':
              for (const e of targetArray) {
                if (e >= 750 && e <= 1000) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
            case '1000-1500':
              for (const e of targetArray) {
                if (e >= 1000 && e <= 1500) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
            case '1500+':
              for (const e of targetArray) {
                if (e >= 1500) {
                  setContainsPrice = true;
                  break;
                }
              }
              break;
          }
        }
      } else {
        setContainsPrice = true;
      }

      // sustainability
      if (filteredSustainability.length > 0) {
        targetArray = Array.from(products[i]);
        for (const sustainability of filteredSustainability) {
          for (const element of targetArray) {
            if (sustainability === null || element?.sustainability?.localeCompare(sustainability, 'da', { sensitivity: 'base' }) === 0) {
              setContainsSustainability = true;
            }
          }
        }
      } else {
        setContainsSustainability = true;
      }

      if (setContainsSize === true && setContainsColors === true && setContainsPrice === true && setContainsSustainability === true) {
        filteredProducts.push(products[i]);
      }
    }
  }
  appendProductsToDom(filteredProducts);
}
