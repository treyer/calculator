import styled from 'styled-components'

export const Button = styled.div`
  position: absolute;
  left: ${({ isShown }) => (isShown ? '0' : '-40px')};
  top: 0;

  width: 25px;
  height: 25px;
  margin-left: 5px;

  background-image: url(/src/assets/img/svg/arrows-${({
      isShown,
    }) => (isShown ? 'right' : 'left')}.svg);
  background-size: 25px 25px;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
