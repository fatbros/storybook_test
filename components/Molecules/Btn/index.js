import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerBtn = styled.button`
    width: 100%;
    border: 1px solid gray;
    border-radius: 4px;
    line-height: .5;
`;

const Btn = ({ clickAction, children, ...props }) => (
    <InnerBtn {...props} onClick={clickAction}>
        {children}
    </InnerBtn>
);

Btn.defaultProps = {
    clickAction: () => {},
};

Btn.propTypes = {
    /** ボタンにクリックした際の挙動 */
    clickAction: PropTypes.func,
    children: PropTypes.element.isRequired,
};

export default Btn;
