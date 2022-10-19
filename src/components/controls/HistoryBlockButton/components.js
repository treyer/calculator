import styled from 'styled-components'

export const Button = styled.div`
  position: absolute;
  left: ${({ isShown }) => (isShown ? '0' : '-40px')};
  top: 0;

  width: ${({ theme }) => theme.sizes[2]}px;
  height: ${({ theme }) => theme.sizes[2]}px;
  margin-left: ${({ theme }) => theme.spaces[1]}px;

  background-image: url(/src/assets/img/svg/arrows-${({
      isShown,
    }) => (isShown ? 'right' : 'left')}.svg);
  background-size: ${({ theme }) => theme.sizes[2]}px
    ${({ theme }) => theme.sizes[2]}px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
