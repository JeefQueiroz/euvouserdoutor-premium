import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { institutional, routeMeta, pathToView } from './institutional.js';

export { institutional, routeMeta, pathToView };

export function render(url) {
  return renderToString(<App initialPath={url} />);
}
