import React, {memo} from 'react'

import {
  StyledItemContentContainer,
  StyledItemTitleContainer,
  StyledInfo,
  StyledRoot,
  StyledText,
  StyledTitleText,
} from './Treehouse.styled'

export interface TreehouseProps {
  className?: string
}

export const Treehouse = (props: TreehouseProps) => {
  const {className} = props

  return (
    <StyledRoot className={className} title='TREEHOUSE'>
      <StyledInfo>
        <StyledItemTitleContainer>
          <StyledText>
            At Treehouse we were building a platform for translation agencies to automate the
            processes of receiving orders, onboarding suppliers, and routing orders to suppliers.
          </StyledText>
        </StyledItemTitleContainer>

        <StyledItemTitleContainer>
          <StyledText>
            I worked full stack at Treehouse and managed a rotating team of interns.
          </StyledText>
        </StyledItemTitleContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Development</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            We used .NET and Entity Framework with PostgreSQL on the back end. Initially we used
            ASP.NET MVC on the front end, but eventually I added a React user portal for managing
            clients.
          </StyledText>
        </StyledItemContentContainer>

        <StyledItemTitleContainer>
          <StyledTitleText variant='h6'>Team Management</StyledTitleText>
        </StyledItemTitleContainer>

        <StyledItemContentContainer>
          <StyledText>
            I managed onboarding for our team of interns and then created and assigned tasks for
            them in an agile environment. The team of interns fluctuated but eventually grew to 10
            people.
          </StyledText>
        </StyledItemContentContainer>
      </StyledInfo>
    </StyledRoot>
  )
}

export default memo(Treehouse)
