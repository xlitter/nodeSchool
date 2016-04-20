'use strict';

const picSrc = require('cat-picture').src;
const LightImage = require('lightning-image-poly');

function init() {
  return new LightImage('#visualization', null, [picSrc], { hullAlgorithm: 'convex' });
}

init();
