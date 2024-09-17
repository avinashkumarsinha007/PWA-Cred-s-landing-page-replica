import React, { Suspense } from 'react';

const Header = React.lazy(() => import('remoteApp/Header'));
const HeroBanner = React.lazy(() => import('remoteApp/HeroBanner'));
const ScrollingText = React.lazy(() => import('remoteApp/ScrollingText'));
const MobileTransition = React.lazy(() => import('remoteApp/MobileTransition'));
const SpinningCards = React.lazy(() => import('remoteApp/SpinningCards'));
const Footer = React.lazy(() => import('remoteApp/Footer'));

function App() {
  return (
    <div id="__next">
      <Suspense fallback={<div>Header loading...</div>}>
        <Header />
      </Suspense>
      
      <Suspense fallback={<div>HeroBanner Component...</div>}>
        <HeroBanner />
      </Suspense>

      <Suspense fallback={<div>ScrollingText Component...</div>}>
        <ScrollingText />
      </Suspense>

      <Suspense fallback={<div>MobileTransition Component...</div>}>
        <MobileTransition />
      </Suspense>
      
      <Suspense fallback={<div>SpinningCards Component...</div>}>
        <SpinningCards />
      </Suspense>
      
      <Suspense fallback={<div>Footer Component...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
