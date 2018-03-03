import { assert, should, expect } from 'chai';
import US from '../src';

describe('US States List', () => {
  it('should return an array of US states / cities', () => {
    const us_data = US.getAllData();
    expect(us_data).to.be.an('array');
  });

  it('should return an object for an abbreviation lookup', () => {
    const us_data = US.getDataByState('PA');
    expect(us_data).to.be.an('object');
  });

  it('should return an object for an state name lookup', () => {
    const us_data = US.getDataByState('Pennsylvania');
    expect(us_data).to.be.an('object');
  });

  it('should return null values for an invalid state', () => {
    const us_data = US.getDataByState('XA');
    assert(Object.keys(us_data).length === 0, 'object is not empty');
  });

  it('should return undefined for invalid arguments', () => {
    const data1 = US.getDataByState(12);
    const data2 = US.getDataByState({options: 'test'});
    assert(data1 === undefined && data2 === undefined,
      'Function does not return an error');
  });

});
