import React from "react";
import { createSvgIcon } from "@mui/material";
import { styled } from "@mui/system";

const Icon = createSvgIcon(
  <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.07469 1.17897C0.635277 1.70697 0.41349 2.3829 0.454536 3.06897V32.931C0.41349 33.6171 0.635277 34.293 1.07469 34.821L1.16906 34.9155L17.8726 18.2025V17.811L1.16906 1.08447L1.07469 1.17897Z"
      fill="url(#paint0_linear_0_1)"
    />
    <path
      d="M23.4 23.778L17.8726 18.2025V17.811L23.4 12.222L23.5213 12.2895L30.1407 16.056C32.0281 17.1225 32.0281 18.8775 30.1407 19.9575L23.5483 23.7105L23.4 23.778Z"
      fill="url(#paint1_linear_0_1)"
    />
    <path
      d="M23.5618 23.697L17.8726 18L1.07471 34.821C1.45942 35.1597 1.95018 35.3531 2.46219 35.3679C2.9742 35.3827 3.47529 35.2179 3.87885 34.902L23.5753 23.697"
      fill="url(#paint2_linear_0_1)"
    />
    <path
      d="M23.5616 12.303L3.86518 1.09802C3.46162 0.782135 2.96053 0.617351 2.44852 0.632141C1.93651 0.646931 1.44575 0.840367 1.06104 1.17902L17.8724 18L23.5616 12.303Z"
      fill="url(#paint3_linear_0_1)"
    />
    <path
      opacity="0.2"
      d="M23.4 23.5754L3.86537 34.7129C3.47615 35.0043 3.00321 35.1618 2.51723 35.1618C2.03124 35.1618 1.5583 35.0043 1.16908 34.7129L1.07471 34.8074L1.16908 34.9019C1.55742 35.1954 2.0307 35.3542 2.51723 35.3542C3.00375 35.3542 3.47703 35.1954 3.86537 34.9019L23.5618 23.6969L23.4 23.5754Z"
      fill="black"
    />
    <path
      opacity="0.12"
      d="M1.07469 34.632C0.635277 34.104 0.41349 33.4281 0.454536 32.742V32.9445C0.41349 33.6306 0.635277 34.3065 1.07469 34.8345L1.16906 34.74L1.07469 34.632ZM30.1408 19.755L23.4 23.5755L23.5214 23.697L30.1408 19.944C30.5164 19.7673 30.8388 19.4946 31.0755 19.1532C31.3122 18.8119 31.4548 18.4141 31.4889 18C31.4131 18.3763 31.2522 18.7301 31.0184 19.0343C30.7847 19.3386 30.4845 19.5851 30.1408 19.755Z"
      fill="black"
    />
    <path
      opacity="0.25"
      d="M3.86522 1.28704L30.1406 16.245C30.4843 16.4149 30.7846 16.6615 31.0183 16.9657C31.252 17.2699 31.413 17.6238 31.4888 18C31.4546 17.5859 31.312 17.1881 31.0753 16.8468C30.8386 16.5055 30.5162 16.2327 30.1406 16.056L3.86522 1.09804C1.97781 0.0315371 0.440918 0.922539 0.440918 3.08254V3.28504C0.481362 1.11154 1.99129 0.220539 3.86522 1.28704Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_1"
        x1="16.3896"
        y1="2.75847"
        x2="-6.26333"
        y2="25.3804"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A0FF" />
        <stop offset="0.01" stopColor="#00A1FF" />
        <stop offset="0.26" stopColor="#00BEFF" />
        <stop offset="0.51" stopColor="#00D2FF" />
        <stop offset="0.76" stopColor="#00DFFF" />
        <stop offset="1" stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_1"
        x1="32.6078"
        y1="18"
        x2="-0.0038828"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE000" />
        <stop offset="0.41" stopColor="#FFBD00" />
        <stop offset="0.78" stopColor="#FFA500" />
        <stop offset="1" stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_1"
        x1="20.4746"
        y1="21.105"
        x2="-10.2514"
        y2="51.7753"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3A44" />
        <stop offset="1" stopColor="#C31162" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_1"
        x1="-3.15867"
        y1="-8.75698"
        x2="10.5573"
        y2="4.94019"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32A071" />
        <stop offset="0.07" stopColor="#2DA771" />
        <stop offset="0.48" stopColor="#15CF74" />
        <stop offset="0.8" stopColor="#06E775" />
        <stop offset="1" stopColor="#00F076" />
      </linearGradient>
    </defs>
  </svg>,
  "PlayStore Icon"
);

const PlayStoreIcon = styled(Icon)<{ size?: number }>(({ size = 16 }) => ({
  fontSize: size,
}));

export default PlayStoreIcon;
