import {expect} from 'chai';

describe('MAPS', () => {

  it('has a set method', ()=> {

    let myMap = new Map();
    myMap.set('name', 'Aaron');

    expect(myMap.get('name')).to.equal('Aaron');

  });

  it('can use objects as a key', ()=> {

    let user = {name: 'Aaron'};
    let value = {twitter: '@js_dev', gplus: '+AaronFrost'}

    let myMap = new Map();
    myMap.set(user, value);

    expect(myMap.has(user)).to.be.true;
    expect(myMap.get(user)).to.equal(value);

  });

  // calls to `map.get` are not working. leave commented out.
  //it.skip('doesn\'t coerce keys', ()=>{
  //
  //  let myMap = new Map();
  //  myMap.set(1, 'Aaron');
  //  expect(myMap.get('1')).to.be.false;
  //  myMap.set('1', 'Aaron');
  //  expect(myMap.get('1')).to.be.true;
  //
  //});

});