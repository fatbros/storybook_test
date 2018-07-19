import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const _Tx = styled.p`
    ${props => props.midium && css`
        font-size: 14px;
    `}
    ${props => props.large && css`
        font-size: 20px;
    `}

    ${props => props.color == 'red' && css`
        color: red;
    `}
    ${props => props.color == 'black' && css`
        color: black
    `}
`

const Tx = props =>  <_Tx {...props}>{props.children}</_Tx>

Tx.propTypes = {
    /** テキストサイズ標準 */
    midium: PropTypes.bool,
    /** テキストサイズ大きい */
    large: PropTypes.bool,
    children: PropTypes.element.isRequired
}

export default Tx
