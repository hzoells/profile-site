import React, {memo} from 'react'

import {
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledInfo,
  StyledLink,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Inverse.styled'

export interface InverseProps {
  className?: string
}

export const Inverse = (props: InverseProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='INVERSE'>
      <StyledInfo>
        <StyledItemTitleContainer>
          <StyledText>
            Inverse started as a platform for immersive expo-style events, and has shifted into
            providing immersive experiences for communities. The strengths of the platform include
            fun and spontaneous person to person interaction and support for integrating a variety
            of interactive media in the 3D environment. Check out the platform{' '}
            <StyledLink
              linkProps={{href: 'https://inverse.app/dashboard/home', isNewTab: true}}
              text='here'
            />
            .
          </StyledText>
        </StyledItemTitleContainer>

        <StyledItemTitleContainer>
          <StyledText>
            Most of the features I build have components in each layer of our tech stack. Most
            recently, I have been building the initial blockchain integrations for our platform.
            Here are a few of the things I&apos;ve been working on:
          </StyledText>
        </StyledItemTitleContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Blockchain</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            I have built wallet authentication, an ERC1155 ticketing service with configurable
            revenue sharing, and an ERC721 3D model NFT service. This was all built on Polygon, but
            we have plans to extend to Hive.
          </StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Back End</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            We use Node, MongoDB, and Redis on our back end. I have worked accross our back end from
            designing and implementing new models to large scale migrations.
          </StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Front End</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            Most of the features I have worked on involve adding some UI components. We use NextJS
            with Typescript and Redux.
          </StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Unity</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            The the Unity features I have worked on include a player to player interaction feature
            requiring Photon RPC calls and messaging between our web and Unity applications. I also
            worked on building a presentation feature where certain users&apos; avatars were
            persisted across instances.
          </StyledText>
        </StyledItemContentContainer>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Inverse)
