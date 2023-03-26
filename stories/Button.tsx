import styled, { keyframes, css, CSSProperties } from "styled-components";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Styling object
   */
  style?: CSSProperties;
}

const getVariantStyles = ({ primary = false }: ButtonProps) =>
  primary
    ? css`
        color: white;
        background-color: #1ea7fd;
      `
    : css`
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
      `;

const getSizeStyles = ({ size = "medium" }: ButtonProps) => {
  switch (size) {
    case "small": {
      return css`
        font-size: 12px;
        padding: 10px 16px;
      `;
    }
    case "large": {
      return css`
        font-size: 16px;
        padding: 12px 24px;
      `;
    }
    default: {
      return css`
        font-size: 14px;
        padding: 11px 20px;
      `;
    }
  }
};

/**
 * Primary UI component for user interaction
 */

const shake = keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}
30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}
40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;

const GiggleShake = styled.button<ButtonProps>`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  display: flex;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(252, 163, 249, 1) 0%,
    rgba(153, 189, 245, 1) 100%
  );

  ${({ primary, backgroundColor, size }) => css`
    ${getVariantStyles({ primary })}
    ${getSizeStyles({ size })}
${backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  `}

  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

export const Button = ({ label, ...rest }: ButtonProps) => (
  <GiggleShake {...rest}>{label}</GiggleShake>
);

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
