/**
 * 判断是否为undefined
 * @param {*} value
 * @returns boolean
 */
export const isUndefined = (value) => typeof value === 'undefined';

/**
 * 判断是否为null
 * @param {*} value
 * @returns boolean
 */
export const isNull = (value) => value === null;

/**
 * 判断是否为null或undefined
 * @param {*} value
 * @returns boolean
 */
export const isNil = (value) => isNull(value) || isUndefined(value);
