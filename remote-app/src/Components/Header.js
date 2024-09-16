import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderUpperDropdown from "./HeaderUpperDropdown/HeaderUpperDropdown";
require("./Header.css");

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleDropdown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  React.useEffect(() => {
    if (toggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <>
      <HeaderUpperDropdown toggleDropDown={toggleDropDown} />
      <div id="navbar-wrapper" className="sc-1tidt5-2 eojfPz">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="88"
          viewBox="0 0 74 88"
          fill="none"
        >
          <path
            d="M36.9957 57.4618C36.6778 57.4628 36.3652 57.3812 36.0889 57.225L12.5222 44.0271C12.2371 43.8671 11.9999 43.6345 11.835 43.3533C11.6701 43.072 11.5834 42.7521 11.5839 42.4266V1.83446C11.5839 1.34793 11.7783 0.88133 12.1243 0.537302C12.4703 0.193273 12.9396 0 13.429 0H60.5595C61.0489 0 61.5182 0.193273 61.8642 0.537302C62.2102 0.88133 62.4046 1.34793 62.4046 1.83446V42.4266C62.4051 42.7521 62.3184 43.072 62.1535 43.3533C61.9887 43.6345 61.7514 43.8671 61.4663 44.0271L37.8996 57.225C37.6242 57.3808 37.3126 57.4624 36.9957 57.4618ZM15.274 41.3681L36.9957 53.5332L58.7145 41.3681V3.66892H15.274V41.3681Z"
            fill="white"
          ></path>
          <path
            d="M36.9957 39.0858C36.678 39.0854 36.3658 39.0038 36.0889 38.849L28.6284 34.6665C28.3433 34.5069 28.106 34.2749 27.9406 33.9942C27.7752 33.7135 27.6878 33.3941 27.6872 33.0688V25.3915H31.3773V32.0132L36.9986 35.1515L43.5552 31.4769L45.3658 34.6722L37.9053 38.8547C37.6271 39.0081 37.3138 39.0877 36.9957 39.0858Z"
            fill="white"
          ></path>
          <path
            d="M36.9957 48.2752C36.678 48.2748 36.3658 48.1933 36.0889 48.0384L20.5739 39.3482C20.2891 39.1885 20.0522 38.9563 19.8873 38.6756C19.7225 38.3949 19.6356 38.0756 19.6356 37.7506V17.8425C19.6356 17.356 19.83 16.8894 20.176 16.5453C20.522 16.2013 20.9913 16.008 21.4806 16.008H44.2668V19.6855H23.3199V36.6864L36.99 44.3438L50.6571 36.6864V28.7323H54.3472V37.7506C54.3472 38.0756 54.2603 38.3949 54.0954 38.6756C53.9306 38.9563 53.6936 39.1885 53.4089 39.3482L37.8938 48.0384C37.6196 48.192 37.3104 48.2735 36.9957 48.2752Z"
            fill="white"
          ></path>
          <path
            d="M54.3529 21.7197H50.6628V11.6744H26.1664V8.00545H52.5108C53.0001 8.00545 53.4694 8.19872 53.8154 8.54275C54.1614 8.88678 54.3558 9.35338 54.3558 9.83991L54.3529 21.7197Z"
            fill="white"
          ></path>
          <path
            d="M0 78.5624C0 73.2244 3.97991 69.1304 9.46915 69.1304C11.0224 69.1067 12.5559 69.4796 13.9228 70.2134C15.2898 70.9471 16.4446 72.0173 17.2769 73.3214L13.6872 75.4013C12.8809 74.0005 11.3199 73.1731 9.47202 73.1731C6.2439 73.1731 4.16356 75.3242 4.16356 78.5624C4.16356 81.8005 6.2439 83.9516 9.47202 83.9516C11.3199 83.9516 12.9153 83.1243 13.6872 81.7235L17.2769 83.7976C15.7159 86.3652 12.8034 87.9943 9.47202 87.9943C3.97991 87.9943 0 83.9003 0 78.5624Z"
            fill="white"
          ></path>
          <path
            d="M53.1248 83.9174V87.9515H40.8264V69.1219H53.1248V73.156H45.1478V76.3827H52.1693V80.4681H45.1478V83.9088L53.1248 83.9174Z"
            fill="white"
          ></path>
          <path
            d="M32.5997 81.0673C33.63 80.5632 34.5007 79.7866 35.1162 78.8229C35.7317 77.8591 36.0683 76.7453 36.0889 75.6038C36.092 74.7546 35.9262 73.9131 35.601 73.1278C35.2759 72.3425 34.7979 71.6288 34.1945 71.0278C33.591 70.4268 32.8741 69.9502 32.0848 69.6256C31.2956 69.301 30.4495 69.1346 29.5954 69.1361H22.0201V88H26.3472V81.7948H28.4075L31.9799 87.9943H36.6341L32.5997 81.0673ZM29.5954 78.0231H26.3472V73.1731H29.5954C30.7862 73.1731 31.759 74.223 31.759 75.5981C31.759 76.9733 30.7862 78.0231 29.5954 78.0231Z"
            fill="white"
          ></path>
          <path
            d="M64.8178 69.1304H57.8594V87.9315H64.8178C70.0229 87.9315 74 83.8489 74 78.531C74 73.213 70.0143 69.1304 64.8178 69.1304ZM64.8178 83.9174H62.175V73.1674H64.8063C67.7733 73.1674 69.8221 75.31 69.8221 78.5338C69.8221 81.7577 67.7848 83.9174 64.8178 83.9174Z"
            fill="white"
          ></path>
        </svg>
        <div
          id="toggle-container"
          className={`sc-1tidt5-4 lflulY ${
            toggle ? "toggle-border-color" : ""
          }`}
        >
          {!toggle && !toggleDropDown ? (
            <div className="sc-1tidt5-6 bTbOXu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.8015 8.79492L12.3754 12.5529L7.94935 8.79492L6.5897 9.95752L12.3754 14.8699L18.1611 9.95752L16.8015 8.79492Z"
                  fill="white"
                  fillOpacity="0.6"
                ></path>
              </svg>
              <div
                className="sc-1tidt5-7 
                        hafGcW expand-text"
                onClick={handleToggleDropdown}
              >
                click to expand
              </div>
              <div className="sc-1tidt5-8 deSCLg svg-container">
                <svg
                  width="123"
                  height="31"
                  viewBox="0 0 123 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M78.8023 2.44038C78.5021 1.92822 78.0694 1.52203 77.5219 1.23063C76.9656 0.930395 76.321 0.78911 75.5969 0.78911H72.1619V1.99886H73.0008V6.51115H72.1619V7.7209H75.5969C76.321 7.7209 76.9656 7.57078 77.5219 7.27938C78.0694 6.97915 78.5021 6.57296 78.8023 6.05197C79.1202 5.52215 79.2703 4.92169 79.2703 4.23293C79.2703 3.54416 79.1202 2.96136 78.8023 2.44038ZM77.5042 5.42502C77.3188 5.76057 77.0627 6.03431 76.736 6.21975C76.4004 6.41401 76.0207 6.51115 75.5792 6.51115H74.4225V1.99886H75.5792C76.0207 1.99886 76.4004 2.08716 76.736 2.28143C77.0627 2.46687 77.3188 2.73178 77.5042 3.06733C77.6897 3.40288 77.7868 3.79141 77.7868 4.23293C77.7868 4.67444 77.6897 5.08064 77.5042 5.42502Z"
                    fill="white"
                  ></path>
                  <path
                    d="M69.398 5.32789V7.7209H62.6428V6.51115H63.4817V1.99886H62.6428V0.78911H69.3185V3.17329H67.888V1.99886H64.9122V3.67662H67.1728V4.78041H64.9122V6.51115H67.9763V5.32789H69.398Z"
                    fill="white"
                  ></path>
                  <path
                    d="M59.4904 6.51115L58.784 4.66561C58.7487 4.56848 58.6957 4.47135 58.6162 4.39187V4.33889C58.8723 4.25059 59.0931 4.13579 59.2697 3.97685C59.4551 3.8179 59.5875 3.63247 59.6847 3.41171C59.7818 3.19095 59.826 2.9437 59.826 2.66996C59.826 2.07833 59.614 1.61916 59.1814 1.28361C58.7487 0.948056 58.1041 0.78911 57.2387 0.78911H53.4858V1.99886H54.3247V6.51115H53.4858V7.7209H56.6029V6.51115H55.7464V4.78924H56.9296C57.1062 4.78924 57.2299 4.82456 57.3182 4.8952C57.4065 4.96584 57.4771 5.08947 57.5477 5.2749L58.3513 7.7209H60.0909V6.51115H59.4904ZM58.2277 3.30575C58.1394 3.42937 58.0069 3.5265 57.8303 3.58832C57.6625 3.65896 57.4506 3.68545 57.1945 3.68545H55.7464V1.99886H57.2034C57.5566 1.99886 57.8303 2.06067 58.0422 2.19313C58.2542 2.31675 58.3601 2.52868 58.3601 2.82008C58.3601 3.01435 58.316 3.17329 58.2277 3.30575Z"
                    fill="white"
                  ></path>
                  <path
                    d="M50.8809 5.02765C50.7837 5.59279 50.5718 6.08729 50.2539 6.51115C49.936 6.935 49.5298 7.25289 49.0442 7.49131C48.5497 7.7209 48.0022 7.83569 47.3929 7.83569C46.8631 7.83569 46.3862 7.74739 45.9447 7.57078C45.512 7.39418 45.1323 7.14693 44.8056 6.82904C44.4966 6.51115 44.2493 6.12261 44.0727 5.68993C43.8961 5.24841 43.8078 4.76275 43.8078 4.23293C43.8078 3.70311 43.8961 3.2351 44.0639 2.80242C44.2317 2.3609 44.4701 1.99003 44.7791 1.67214C45.0882 1.35425 45.4414 1.107 45.8476 0.939225C46.2538 0.762619 46.6953 0.674316 47.1633 0.674316C47.6048 0.674316 47.9845 0.753789 48.2936 0.912735C48.6027 1.07168 48.8499 1.30127 49.0353 1.6015C49.2208 1.90173 49.3444 2.28143 49.3974 2.72295H49.4504V0.78911H50.872V3.56182H49.4504C49.3267 3.09382 49.0883 2.72295 48.7174 2.44921C48.3554 2.17547 47.9139 2.04301 47.4017 2.04301C46.9867 2.04301 46.6247 2.13132 46.3068 2.31675C45.9977 2.50219 45.7505 2.75827 45.565 3.09382C45.3884 3.42054 45.3001 3.80024 45.3001 4.23293C45.3001 4.55965 45.3531 4.86871 45.4502 5.14245C45.5562 5.41619 45.6975 5.65461 45.8829 5.84887C46.0684 6.05197 46.2891 6.20209 46.5452 6.30805C46.8013 6.41401 47.0838 6.46699 47.3929 6.46699C47.7461 6.46699 48.064 6.39635 48.3377 6.2639C48.6203 6.12261 48.8587 5.92835 49.0442 5.67227C49.2296 5.42502 49.3532 5.12479 49.4239 4.78041L50.8809 5.02765Z"
                    fill="white"
                  ></path>
                  <path
                    d="M49.8837 18.0614C50.3446 19.1508 50.5715 20.2807 50.557 21.4208C50.5368 23.1301 50.0282 24.7296 49.0486 26.1687C48.0776 27.5977 46.7541 28.7421 45.1112 29.5743C43.4741 30.4023 41.6666 30.8227 39.7376 30.8227C38.2667 30.8227 36.8652 30.5843 35.5705 30.1147C34.273 29.6451 33.1142 28.9704 32.1288 28.1092C31.1376 27.2423 30.3573 26.2178 29.8097 25.0619C29.2592 23.8988 28.9861 22.6634 29.002 21.3948C29.0223 19.7086 29.5366 18.1148 30.5278 16.6584C31.5104 15.2149 32.8339 14.0561 34.4609 13.2123C36.0864 12.3699 37.865 11.9422 39.7477 11.9422C41.3993 11.9422 42.9323 12.2124 44.305 12.7456C45.6834 13.2816 46.8957 14.0749 47.9071 15.1051C48.7625 15.985 49.4271 16.9777 49.8852 18.0599L49.8837 18.0614ZM44.4885 25.6745C44.9581 24.4493 45.2066 22.9639 45.2268 21.2589C45.2398 20.1594 45.1271 19.1176 44.8887 18.1625C44.6561 17.219 44.3093 16.3896 43.8614 15.6975C43.4221 15.0199 42.8832 14.4766 42.2619 14.0836C41.9483 13.8712 41.5943 13.705 41.1941 13.5807C40.7982 13.4565 40.4124 13.3943 40.0483 13.3943C39.3721 13.3943 38.7262 13.5128 38.128 13.7469C37.5399 13.9781 37.04 14.3061 36.6383 14.7265C36.1803 15.2048 35.7801 15.7828 35.4492 16.4416C35.1154 17.1106 34.8568 17.8678 34.6805 18.6942C34.5028 19.5308 34.4074 20.4483 34.3944 21.4193C34.3799 22.633 34.4999 23.7499 34.7513 24.7411C35.0013 25.7164 35.3697 26.566 35.848 27.2654C36.3132 27.9474 36.8796 28.4733 37.5269 28.8273C38.18 29.1842 38.8938 29.3576 39.7058 29.3576C40.8098 29.3576 41.7432 29.0513 42.561 28.4227C43.3831 27.7913 44.0319 26.8666 44.4856 25.6731"
                    fill="white"
                  ></path>
                  <path
                    d="M27.9314 12.289L27.914 13.7512H26.7899C25.8796 13.7512 25.2092 13.9607 24.793 14.3725C24.3784 14.7858 24.1616 15.4577 24.1501 16.3737L24.0287 26.3797C24.0171 27.2871 24.2209 27.9575 24.6283 28.3736C25.0372 28.7912 25.7019 29.0022 26.6035 29.0022H27.7276L27.7088 30.489H15.6598L15.6786 29.0022H16.914C17.8156 29.0022 18.4832 28.7926 18.8978 28.3808C19.314 27.9676 19.5293 27.2957 19.5408 26.3811L19.6579 16.7899L12.9174 30.4904H11.8742L5.37792 16.8101L5.26811 25.8263C5.25944 26.5083 5.38081 27.0862 5.62644 27.5471C5.86629 27.9979 6.2174 28.3375 6.69856 28.5831C7.19705 28.8403 7.82413 28.9805 8.56248 29.0022L9.04796 29.0166L9.03063 30.489H0L0.0187836 29.0022H0.690662C1.65875 29.0022 2.3942 28.7334 2.93459 28.1814C3.47932 27.6252 3.74952 26.8796 3.76252 25.8985L3.87811 16.3723C3.88967 15.449 3.69172 14.7742 3.29148 14.3639C2.89125 13.9564 2.22226 13.7483 1.30474 13.7483H0.205176L0.222515 12.2861H8.17958L14.1499 24.8018L20.3774 12.289H27.9314Z"
                    fill="white"
                  ></path>
                  <path
                    d="M75.2663 12.289L75.2489 13.7512H74.5785C73.4948 13.7512 72.6958 14.0778 72.1395 14.7497C71.5659 15.4418 71.2654 16.4879 71.2495 17.862L71.0934 30.6609H69.9765L56.1112 16.1483L56.0014 25.1226C55.9899 26.0473 56.0881 26.7857 56.2933 27.3174C56.484 27.813 56.7889 28.1901 57.231 28.4762C57.5952 28.6973 58.0546 28.8432 58.5892 28.9068C58.9389 28.9631 59.4114 29.0036 60.024 29.0267L60.5052 29.0455L60.4878 30.4904H50.5672L50.5845 29.0542L51.0599 29.0282C51.9037 28.9834 52.5929 28.8345 53.1087 28.5904C53.5884 28.3621 53.9323 28.0355 54.1621 27.5934C54.4048 27.1252 54.5305 26.5227 54.5392 25.8031L54.6577 16.0804C54.6635 15.5747 54.5652 15.1643 54.3542 14.8233C54.1447 14.4881 53.8413 14.2338 53.4266 14.0474C52.9903 13.8524 52.4426 13.7527 51.7982 13.7527H51.0772L51.0946 12.2904H58.6716L69.6962 23.9291L69.7713 17.7666C69.7814 16.9416 69.65 16.2148 69.3827 15.6065C69.124 15.0199 68.7599 14.5864 68.2701 14.2858C67.997 14.111 67.7311 13.9911 67.4696 13.9217C67.1878 13.848 66.7761 13.7902 66.2458 13.7527L65.782 13.7194L65.7993 12.2919H75.2663V12.289Z"
                    fill="white"
                  ></path>
                  <path
                    d="M96.7924 12.289L96.6985 19.9556H95.4544L95.3547 19.5915C95.0412 18.4558 94.758 17.599 94.5123 17.047C94.2725 16.511 93.9546 15.9952 93.5645 15.5126C93.1122 14.9635 92.6181 14.569 92.0878 14.3379C91.1631 13.9492 90.0028 13.7527 88.6403 13.7527H85.7765L85.6898 20.9179H86.0943C88.1952 20.9179 89.8988 18.8214 90.0967 16.9054H91.452L91.3379 26.306H89.6791L89.5881 25.6731C89.4639 25.1486 89.3295 24.7411 89.1821 24.4392C89.0362 24.1372 88.8425 23.828 88.6056 23.5159C87.9886 22.7457 87.1246 22.3614 85.9629 22.3441L85.6724 22.3397L85.5915 29.0282H87.9048C88.7038 29.0282 89.4306 28.9704 90.0649 28.8577C90.6848 28.7478 91.2483 28.5745 91.7381 28.3433C92.2279 28.1135 92.6947 27.8101 93.1267 27.4402C93.8737 26.8102 94.4647 26.0141 94.8837 25.072C95.1322 24.5143 95.4024 23.7398 95.6842 22.7732L95.7911 22.4062H97.1233L97.025 30.4904H77.4408L77.3802 29.0282H78.3742C80.1529 29.0282 80.991 28.1872 81.0126 26.3811L81.134 16.3752C81.1456 15.4519 80.9476 14.7771 80.5474 14.3668C80.1457 13.9593 79.4767 13.7512 78.5606 13.7512H77.5954L77.6128 12.289H96.7938H96.7924Z"
                    fill="white"
                  ></path>
                  <path
                    d="M123 12.289L122.983 13.6732L122.538 13.7238C121.993 13.7859 121.497 13.8885 121.065 14.0286C120.639 14.1674 120.24 14.3494 119.882 14.5705C119.519 14.7916 119.136 15.0979 118.74 15.4808C118.336 15.8723 117.936 16.3174 117.553 16.8086L113.284 22.3888L113.235 26.3797C113.224 27.287 113.426 27.9575 113.835 28.3736C114.244 28.7912 114.909 29.0021 115.81 29.0021H117.462L117.443 30.4889H104.268L104.287 29.0021H105.986C106.895 29.0021 107.567 28.7926 107.982 28.3808C108.398 27.9676 108.613 27.2957 108.625 26.3811L108.668 22.8411L103.735 15.946C103.138 15.108 102.553 14.5242 101.997 14.2121C101.451 13.9058 100.715 13.7512 99.8108 13.7512H99.0031L99.0204 12.289H110.973L110.955 13.7267H109.182C108.68 13.7267 108.414 13.835 108.278 13.9261C108.135 14.02 108.076 14.1312 108.074 14.3075C108.074 14.3957 108.093 14.4766 108.133 14.5531C108.203 14.6832 108.443 15.056 108.814 15.6065L112.592 20.9439L116.04 16.4546C116.492 15.8853 116.725 15.4186 116.729 15.0704C116.733 14.689 116.588 14.3985 116.268 14.1572C115.913 13.8885 115.427 13.7512 114.823 13.7512H113.196L113.214 12.289H123Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
          ) : null}

          {toggleDropDown ? (
            <div onClick={handleToggleDropdown} class="sc-1tidt5-9 kkPlId">
              <img
                src="https://web-images.credcdn.in/v2/_next/assets/images/navbar/cross-btn.png"
                class="sc-1tidt5-10 ggkUoP"
              />
            </div>
          ) : null}

          {!toggleDropDown ? (
            <div className="sc-1tidt5-5 ruYqV nav-toggle-container">
              <a className="nav-toggle" onClick={handleToggle}>
                <span
                  className={`bar ${toggle ? "x toggle-text-color" : ""}`}
                  style={{ backgroundColor: "white", opacity: 1 }}
                ></span>
                <span
                  className={`bar ${toggle ? "x toggle-text-color" : ""}`}
                  style={{ backgroundColor: "white", opacity: 1 }}
                ></span>
                <span
                  className={`bar ${toggle ? "x toggle-text-color" : ""}`}
                  style={{ backgroundColor: "white", opacity: 1 }}
                ></span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <div className="sc-1duc9m6-0 gpOFxE">
        <div
          className="sc-lzqbdr-0 bZglto"
          style={{
            opacity: toggle ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {toggle ? <HeaderMenu toggle={toggle} /> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
