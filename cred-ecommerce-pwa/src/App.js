// src/App.js
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('remoteApp/Header'));

function App() {
  return (
    <div id="__next">
      <h1>Host Application</h1>
      <h2>hello</h2>
      <Suspense fallback={<div>Loading Remote Component...</div>}>
        <Header />
      </Suspense>
    </div>
  );
}

export default App;
