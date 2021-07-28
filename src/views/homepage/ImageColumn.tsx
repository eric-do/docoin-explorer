import React from 'react';
import styled  from 'styled-components';
import { device } from '../../utils/media';

const ImageContainer = styled.div`
  padding-left: 140px;
`;

const SectionImage = styled.img`
  @media ${device.mobile} {
    visibility: hidden;
  }
`;

interface IProps {
  image: string;
}

const ImageColumn = ({ image }: IProps) => {
  return (
    <ImageContainer className="column is-justify-content-center is-flex-direction-column is-flex">
      <figure className="image" >
        <SectionImage
          src={image}
          aria-label="Section features image"
        />
      </figure>
    </ImageContainer>
  );
}

export default ImageColumn;