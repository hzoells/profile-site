import React, {memo} from 'react'

import {
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledInfo,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Internships.styled'

export interface InternshipsProps {
  className?: string
}

export const Internships = (props: InternshipsProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='Internships'>
      <StyledInfo>
        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Rightpoint {' (2019)'}</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>Application Development Intern working on two client projects.</StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Isobar {' (2018)'}</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>Front end intern working on the National Rental Car website.</StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Jules-Gonin Eye Hospital {' (2017)'}</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            Data science intern working on the data analysis for a study comparing techniques for
            corrective eye surgery.
          </StyledText>
        </StyledItemContentContainer>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Internships)
