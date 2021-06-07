import styled from 'styled-components';
import PropTypes from 'prop-types';

export interface StackProps {
  /**
   * Whitespace between each child of the Stack
   */
  gap?: 'sm'|'md'|'lg';
  /**
   * Index of element after which the Stack is splitted. Leave 'undefined' for no splitting.
   */
  splitAt?: number;
  /**
   * Should apply gap recursively (on nested levels)
   */
  isRecursive?: boolean;
}

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${({ isRecursive }) => (isRecursive ? '' : '>')} * {
    margin-top: 0;
    margin-bottom: 0;
  }

  ${({ isRecursive }) => (isRecursive ? '' : '>')} * + * {
    margin-top: ${({ gap }) => gap === 'sm' ? '8px' : gap === 'md' ? '16px' : '32px'};
  }

  ${({ splitAt }) =>
    splitAt &&
    `
    :only-child {
      height: 100%;
    }

    > :nth-child(${splitAt}) {
      margin-bottom: auto;
    }
  `}
`;

Stack.propTypes = {
  gap: PropTypes.oneOf(['sm', 'md','lg']),
  splitAt: PropTypes.number,
  isRecursive: PropTypes.bool,
};

Stack.defaultProps = {
  gap: 'sm',
  isRecursive: false,
};