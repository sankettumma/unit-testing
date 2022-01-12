import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanBasicDetails/BasicDetails.js';
import Sinon  from 'sinon';

const el = await fixture(html`<basic-details></basic-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');
describe('BasicDetails.js', () => {
  //const basicDetail = new BasicDetails();
  it('check for spy', () => {
    const abc = Sinon.spy(el, "_toDashboard");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

it('check accessible', () => {
  expect(el).to.be.accessible;
});

it('check for capture', () => {
  const fun = Sinon.spy(el, "_captureDetails");
  form[1].click();
  expect(fun.calledOnce).to.be.true;
});


// it('check noToWord', () => {
//   const word = Sinon.spy(el, "_numToWord");
//   form[].click();
//   expect(word.calledOnce).to.be.true;
// });
  // it('number to words', () => {
  //   // noTowords
  // });
  // it('to dashboard', () => {
  //   // _toDashboard
  // });
});
