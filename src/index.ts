#!/usr/bin/env node
import * as helpers from './helpers';
import * as utils from './utils';

export * from './helpers';
export * from './utils';

export const palindromic = {
    ...helpers,
    ...utils,
}
export default palindromic;
