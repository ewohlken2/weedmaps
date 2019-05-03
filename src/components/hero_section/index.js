import styled from 'styled-components';
import Locate from '../icons/locate';
import MapPin from '../icons/map-pin';
import React from 'react';
import { 
  HeroSectionWrapper,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton
 } from './App.styles';

 export const HeroSectionWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export default function HeroSection(props) {
    return (
        <HeroSectionWrapper>
            <ContentContainer>
                <LocationSection>
                    <h2>
                    <MapPin fill={'#7e7979'} width={'60px'} height={'40px'} />
                    <span> {location ? location.name : ''} </span>
                    <span> {isLocating && !location ? '...locating' : ''} </span>
                    </h2>
                    <LocateButton onClick={this.locateMe.bind(this)}>
                    <Locate fill={'#7e7979'} />
                    <span> Locate Me </span>
                    </LocateButton>
                </LocationSection>
                <TextContent>
                    Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut
                    enim ad minim veniam, quis.
                </TextContent>
            </ContentContainer>
        </HeroSectionWrapper>
    )
}