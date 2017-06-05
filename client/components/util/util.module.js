'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('meanappApp.util', [])
  .factory('Util', UtilService)
  .name;
