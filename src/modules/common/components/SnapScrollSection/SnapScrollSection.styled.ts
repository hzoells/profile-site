import styled from 'styled-components'

export const StyledRoot = styled.div`
  scroll-snap-align: start;

  height: 100%;

  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
