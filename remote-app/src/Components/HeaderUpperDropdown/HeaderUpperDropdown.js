require("./HeaderUpperDropdown.css")

const HeaderUpperDropdown = ({ toggleDropDown }) => {
    
  return (
    <>
      <div className="sc-5ltvdt-3 ia-DBh"  data-testid="dropdown-container">
        <div className={`sc-5ltvdt-0 eMBOzo ${toggleDropDown?"active":""}`} data-testid="dropdown-content">
          <div className={`sc-5ltvdt-1 dXXwjD  ${toggleDropDown?"active":""}`} data-testid="dropdown-inner">
            <a
              href="https://cred.club/money"
              target="_blank"
              className="sc-5ltvdt-2 eQPvhU"
               data-testid="dropdown-link"
            >
              <div className="sc-b5xc4a-0 hNPQwt">
                <div>
                  <div className="sc-b5xc4a-1 jpRlrZ">LEARN MORE</div>
                </div>
                <svg
                  width="19"
                  height="8"
                  viewBox="0 0 32 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sc-b5xc4a-2 ggybSB"
                  data-testid="dropdown-icon"
                >
                  <path
                    d="M2 4.87494H0.875L0.875 7.12494H2L2 4.87494ZM2 7.12494L30.5 7.12494V4.87494L2 4.87494L2 7.12494ZM25.0685 4.7589e-08C25.0685 3.89997 28.1374 7.125 32 7.125L32 4.875C29.449 4.875 27.3185 2.72744 27.3185 -4.7589e-08L25.0685 4.7589e-08ZM32 4.875C28.1374 4.875 25.0684 8.09999 25.0684 12H27.3184C27.3184 9.27259 29.4489 7.125 32 7.125V4.875Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderUpperDropdown;