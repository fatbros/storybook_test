import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const InnerTx = styled.p`
    ${({ midium }) => midium && css`
        font-size: 14px;
    `}
    ${({ large }) => large && css`
        font-size: 20px;
    `}

    ${({ color }) => color === 'red' && css`
        color: red;
    `}
    ${({ color }) => color === 'black' && css`
        color: black
    `}
`;

const Tx = ({ children, ...props }) => (
    <InnerTx {...props}>
        {children}
    </InnerTx>
);

Tx.defaultProps = {
    midium: false,
    large: false,
};

Tx.propTypes = {
    /** テキストサイズ標準 */
    midium: PropTypes.bool,
    /** テキストサイズ大きい */
    large: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]).isRequired,
};

export default Tx;
