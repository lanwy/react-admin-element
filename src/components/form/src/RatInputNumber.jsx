import React from 'react'
import { InputNumber } from 'element-react'

export default class RatInputNumber extends React.Component {

    render() {
        const {modelForm, attr, onChange} = this.props
        return (
            <InputNumber value={ modelForm[attr.prop]} onChange={ onChange } {...attr} />
        )
    }

}