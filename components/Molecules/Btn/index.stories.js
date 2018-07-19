import React from 'react'
import Btn from './index'
import Tx from '../../Atoms/Tx'

import { storiesOf, action } from '@storybook/react'
import { withInfo } from '@storybook/addon-info';

storiesOf('Btn', module)
    .add('size00',
        withInfo({
            text: 'ボタン size00'
        })(() => (
            <Btn>
                <Tx midium>Button!!!</Tx>
            </Btn>
        ))
    )
    .add('size01',
        withInfo({
            text: 'ボタン size01'
        })(() => (
            <Btn>
                <Tx large>Button!!!</Tx>
            </Btn>
        ))
    )
    .add('action', () => (
        <Btn clickAction={action('clicked')}>
            <Tx midium>click action</Tx>
        </Btn>
    ))
