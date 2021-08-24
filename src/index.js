import { createElement } from 'react';
import { render } from 'react-dom';
import { get } from 'lodash-es';

function MyApplication() {
  console.debug(get(foo, 'bar', 'baz'));
  return createElement('div', {}, 'Hello world');
}

const rootElement = document.querySelector('.app');
render(createElement(MyApplication), rootElement);
