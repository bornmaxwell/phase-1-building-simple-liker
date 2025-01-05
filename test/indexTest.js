require ( './helpers.js' );

const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    const modal = document.querySelector("#modal");
    expect(modal).not.to.equal(null);
  } )
} )
