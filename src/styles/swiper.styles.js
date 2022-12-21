import { css } from "styled-components";

export const swiperStyle = css`
  .swiper-button-prev {
    left: 15px;
  }
  .swiper-button-next {
    right: 15px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: hsla(145, 100%, 90%, 0.5);
  }
  .swiper-pagination-bullet {
    background-color: ${(p) => p.theme.palette.primary.main.bg};
  }
`;
