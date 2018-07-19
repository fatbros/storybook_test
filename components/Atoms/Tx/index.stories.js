import React from 'react'
import Tx from './index'
import { storiesOf } from '@storybook/react'

storiesOf('Tx', module)
    .add('size', () => (
        <div>
            <Tx midium>midium size text</Tx>
            <Tx large>large size text</Tx>
        </div>
    ))
    .add('color', () => (
        <div>
            <Tx color="black">black color</Tx>
            <Tx color="red">red color</Tx>
        </div>
    ))
