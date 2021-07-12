import { css } from 'styled-components';

const TextLarge = css`
  line-height: 29px;
  font-size: 24px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export default TextLarge;
