import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { BasicDetails } from '../src/LoanBasicDetails/BasicDetails.js';

describe('BasicDetails.js', () => {
   const basicDetail =  new BasicDetails();
  it('Capture Deatils', () => {
    // var captures = basicDetail._captureDetails();
    // expect(captures).toBe(true);
  });
  it('number to words', () => {
    // noTowords
  });
  it('to dashboard', () => {
    // _toDashboard
  });
});
