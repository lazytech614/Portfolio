'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const AnimatedLogo = () => {
  return (
          <Link href="#home" scroll={false}>
            <motion.svg
              className="h-[20px] sm:h-[30px] md:h-[40px]"
              viewBox="0 0 261 222"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
            >
              <defs>
                {/* Fire gradient for flames only */}
                <linearGradient id="fireGradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1a0000">
                    <animate
                      attributeName="stop-color"
                      values="#1a0000;#420000;#1a0000"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="25%" stopColor="#cc2900">
                    <animate
                      attributeName="stop-color"
                      values="#cc2900;#ff4500;#cc2900"
                      dur="2.5s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="50%" stopColor="#ff6600">
                    <animate
                      attributeName="stop-color"
                      values="#ff6600;#ff8800;#ff6600"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="75%" stopColor="#ffaa00">
                    <animate
                      attributeName="stop-color"
                      values="#ffaa00;#ffcc00;#ffaa00"
                      dur="1.8s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" stopColor="#ffffff">
                    <animate
                      attributeName="stop-color"
                      values="#ffffff;#ffffcc;#ffffff"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>

                {/* Fire distortion filter */}
                <filter id="fireFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02"
                    numOctaves="4"
                    seed="2"
                    result="noise1"
                  >
                    <animate
                      attributeName="baseFrequency"
                      values="0.015;0.025;0.018;0.015"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>

                  <feTurbulence
                    type="turbulence"
                    baseFrequency="0.05"
                    numOctaves="2"
                    seed="5"
                    result="noise2"
                  >
                    <animate
                      attributeName="baseFrequency"
                      values="0.04;0.06;0.045;0.04"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>

                  <feComposite in="noise1" in2="noise2" operator="multiply" result="combinedNoise" />

                  <feDisplacementMap
                    in2="combinedNoise"
                    in="SourceGraphic"
                    scale="40"
                    result="displaced"
                  >
                    <animate
                      attributeName="scale"
                      values="30;50;35;30"
                      dur="2.8s"
                      repeatCount="indefinite"
                    />
                  </feDisplacementMap>

                  <feGaussianBlur in="displaced" stdDeviation="1" result="softFlame" />
                </filter>

                {/* Logo mask */}
                <mask id="logoMask">
                  <rect width="261" height="222" fill="black" />
                  <path
                    d="M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z"
                    fill="white"
                  />
                  <path
                    d="M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z"
                    fill="white"
                  />
                </mask>
              </defs>

              {/* Main flame layer */}
              <rect
                width="261"
                height="222"
                fill="url(#fireGradient)"
                mask="url(#logoMask)"
                filter="url(#fireFilter)"
              >
                <animate
                  attributeName="opacity"
                  values="0.8;1;0.9;1;0.85;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Additional flame layer for depth */}
              <rect
                width="261"
                height="222"
                fill="url(#fireGradient)"
                mask="url(#logoMask)"
                filter="url(#fireFilter)"
                opacity="0.6"
                transform="scale(1.02)"
                transform-origin="center"
              >
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  values="1.01;1.03;1.02;1.01"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Logo outline paths - now with solid colors instead of gradients */}
              {[
                'M145.132 99.4494C146.355 100.398 147.145 101.258 147.5 102H62L173.599 221.75H130.884L24.8036 102H24.4206L0 74H45.5H121.5L145.132 99.4494Z',
                'M121.5 125.5H164.5H173.599C177.4 125.5 181 125.5 184.5 124.5C192.5 121 195.496 115.28 196.496 111.78L200 100.5C200 88.5 196.667 78.8333 195.5 74C189.9 63.2 185.167 54.5 183 51.5L173.599 41.5L159.5 31.5C153.1 28.7 140.5 27.3333 135 27L119.5 26H62C43.6 20.4 43 12.1667 38.5 9L33 0.734491L144.5 0.734497C148.982 1.78734 153.079 1.44905 156 1.99997C163.245 3.36639 170.838 4.69346 173 6.00001C176.033 7.83334 185.5 11 195.5 19.5L200 23.5L204 28.5C206.236 30.9756 208.611 34.9372 208.709 35.2522C211.337 38.4492 213.547 41.8754 215.5 44.5C218.804 48.9398 220.551 54.944 221.5 57L225 65L228 74L229.5 81.5L230.5 88.5V94V102L229.5 107.5L227 118L223.5 125.5C223.26 127.054 220.677 130.992 219.5 133L219.078 133.759C218.41 135.019 217.861 136.291 217 137.5C215.626 139.43 214 140.5 212 142C210 143.5 208.466 144.392 206 145.5C202.869 146.908 203.5 147.5 198.5 148C196.109 148.239 193.828 148.597 192 148.5C190.006 148.394 190.957 148.326 188 148.5L189.5 150.5L260.75 221.75H217.75L121.5 125.5Z',
              ].map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  stroke="#3b82f6"  // Solid blue color instead of gradient
                  strokeWidth={2}
                  fill="none"       // Transparent fill to show flames underneath
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 2, ease: 'easeInOut', delay: i * 0.2 },
                    },
                  }}
                />
              ))}
            </motion.svg>
          </Link>
  );
};

export default AnimatedLogo;
