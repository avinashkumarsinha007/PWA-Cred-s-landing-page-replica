import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
require("./HeaderMenu.css");

const HeaderMenu = ({toggle}) => {
  let arr = ["what's new", "payments", "upgrades", "company", "insider perks"];
  const [state, setState] = React.useState(-1);
  const elementRef = useRef(null);
    
  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.5, ease: 'easeOut' }
      );
      let x = setTimeout(() => {
          setState(0);
      },600)
      return (() => {
          clearTimeout(x);
      })
  }, []);
    
  const handleToggle = (index) => {
      setState(index);
    };

  return (
    <>
        <div className="sc-lzqbdr-1 ifdFUg">
        <div
            ref={elementRef}
            className="sc-lzqbdr-2 fnLXEk"
            style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            clipPath: "polygon(0 % 0 %, 100 % 0 %, 100 % 100 %, 0 % 100 %)",
            transform: "translate(0px, 0px)",
            opacity: 1,
            }}
        >
            {arr.map((ele, i) => {
            return (
                <div
                key={ele + i}
                className={`sc-lzqbdr-3 ${
                    state === i ? "iMEJMc" : "cELZbo"
                    } menu-hover`}
                id="menu-item-placeholder"
                onMouseEnter={() => handleToggle(i)}
                >
                <div
                    className={`sc-lzqbdr-4 ${
                    state === i ? "fLtiWE" : "fkxYSv"
                    } menu-text`}
                >
                    {ele}
                </div>
                </div>
            );
            })}
        </div>
        <div style={{ marginLeft: "150px", opacity:  1 }}>
            { state === 0 ? <div className="sc-lzqbdr-13 fILBYT">
            <div className="sc-lzqbdr-14 TYhJo">
                <img
                src="https://web-images.credcdn.in/v2/_next/assets/images/launch-banners/money/now-live-wide.png?tr=q-95"
                className="sc-lzqbdr-15 kvUgOR"
                />
                <div className="sc-lzqbdr-16 erPHPG">now live</div>
            </div>
            <div className="sc-lzqbdr-17 gNZUTY">
                <div className="sc-lzqbdr-18 dlooAP">
                <img
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/garage-thumbnail.png"
                    className="sc-lzqbdr-19 jWwyTn"
                />
                <div className="sc-lzqbdr-20 cqKwXU">garage</div>
                <div className="sc-lzqbdr-21 dPHmzo">
                    manage, maintain, and
                    <br />
                    obsess over your cars
                </div>
                </div>
                <div className="sc-lzqbdr-18 dlooAP">
                <img
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/p2p-thumbnail.png"
                    className="sc-lzqbdr-19 jWwyTn"
                />
                <div className="sc-lzqbdr-20 cqKwXU">pay anyone</div>
                <div className="sc-lzqbdr-21 dPHmzo">
                    pay anyone, no matter
                    <br />
                    what UPI app they're on
                </div>
                </div>
                <div className="sc-lzqbdr-18 dlooAP">
                <img
                    src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/careers-thumbnail.png"
                    className="sc-lzqbdr-19 jWwyTn"
                />
                <div className="sc-lzqbdr-20 cqKwXU">WORK FOR CRED</div>
                <div className="sc-lzqbdr-21 dPHmzo">
                    apply to build the most
                    <br />
                    trustworthy community
                </div>
                </div>
            </div>
            </div>: null }
        
            {/* here */}
        
                        {state === 1 ? <div className="sc-lzqbdr-10 eJuiXU">
                            <a
                                href="https://cred.club/tap"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/tnp-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Tap to Pay</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/pay-via-upi"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/p2p-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Pay Anyone</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/upi-on-credit"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/rupay-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">RuPay Cards on UPI</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/cred-pay"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/snp-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Scan &amp; Pay</div>
                                    </div>
                                </div>
                            </a>
                        </div> : null}
            
            {/* here */}
            
                        {state === 2 ? <div className="sc-lzqbdr-10 eJuiXU">
                            <a
                                href="https://cred.club/escapes"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/travel-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Travel</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/garage"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/garage-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Garage</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/mint"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/mint-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Mint</div>
                                    </div>
                                </div>
                            </a>
                            <a
                                href="https://cred.club/money"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-5 ioROUa">
                                    <img
                                        src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/money-logo.png"
                                        className="sc-lzqbdr-6 jLcmwh"
                                    />
                                    <div className="sc-lzqbdr-7 hgQsWn">
                                        <div className="sc-lzqbdr-8 hAZRxv">Money</div>
                                    </div>
                                </div>
                            </a>
                        </div> : null}
                    
            {/* here */}
            
                        {state === 3 ? <div className="sc-lzqbdr-11 iQtPuU">
                            <a
                                href="https://cred.club/about"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-12 frbEIO">about CRED</div>
                            </a>
                            <a
                                href="https://careers.cred.club/openings"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-12 frbEIO">careers</div>
                            </a>
                        </div> : null}
            
            {/* here */}
            
                        {state === 4 ? <div className="sc-lzqbdr-11 iQtPuU">
                            <a
                                href="https://cred.club/ipl"
                                target="_blank"
                                rel="noreferrer"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="sc-lzqbdr-12 frbEIO">upgrade to UPI</div>
                            </a>
                        </div> : null}
            </div>
        </div>
    </>
  );
};

export default HeaderMenu;
