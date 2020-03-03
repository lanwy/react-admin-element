import React from 'react'
import { Switch } from 'element-react'

export default class RatSwitch extends React.Component {

    render() {
        const {modelForm, attr, onChange} = this.props
        return (
            <Switch value={ modelForm[attr.prop]} onChange={ onChange } {...attr} />
        )
    }

}