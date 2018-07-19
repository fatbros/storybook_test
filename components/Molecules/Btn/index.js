import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const _Btn = styled.button`
    width: 100%;
    border: 1px solid gray;
    border-radius: 4px;
    line-height: .5;
`

const Btn = props => <_Btn {...props} onClick={props.clickAction}>{props.children}</_Btn>

Btn.propTypes = {
    /** ボタンにクリックした際の挙動 */
    clickAction: PropTypes.func
}

export default Btn
