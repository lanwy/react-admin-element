import React from 'react'
import { Input } from 'element-react'

export default class RatInput extends React.Component {

    render() {
        const {modelForm, attr, onChange} = this.props
        return (
            <Input value={ modelForm[attr.prop]} onChange={ onChange } {...attr} />
        )
    }

}