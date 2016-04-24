import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chaiImmutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

chai.use(chaiImmutable);
