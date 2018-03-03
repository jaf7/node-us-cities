import { assert, should, expect } from 'chai';
import US from '../src';

describe('US States List', () => {
  it('should return an array of US states / cities', () => {
    const us_data = US.getAllData();
    expect(us_data).to.be.an('array');
  });
});
