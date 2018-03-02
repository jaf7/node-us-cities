import { assert, should, expect } from 'chai';
import US from '../src';

describe('US States List', () => {
  it('should return an array of US states / cities', () => {
    expect(US()).to.be.an('array');
  });
});
