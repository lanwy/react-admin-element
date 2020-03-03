import React from 'react'
import { Form } from 'element-react'
import RatCheckbox from './src/RatCheckbox'
import RatDatePicker from './src/RatDatePicker'
import RatInput from './src/RatInput'
import RatInputNumber from './src/RatInputNumber'
import RatRadio from './src/RatRadio'
import RatSelect from './src/RatSelect'
import RatSwitch from './src/RatSwitch'
import RatTimePicker from './src/RatTimePicker'

export default class RatForm extends React.Component {
    constructor(props) {
        super(props)
        this.onChange.bind(this)
    }
    //具体的onChange实现一定要写到具体的页面中，不可以改变props
    onChange(k, v) {
        this.props.onChange(k, v)
    }
    render() {
        const { attrs, modelForm, onSubmit } = this.props
        const items = attrs.map((attr, index) =>
            <RatBitem key={index} attr={attr} modelForm={modelForm} onChange={(v) => this.onChange(attr.prop, v)} />
        ); 
        return (
          <Form model={modelForm} onSubmit={onSubmit} {...this.props}>
            { items }
          </Form>
        )
    }
}

/**
 * React.createElement的第一个参数是节点类型
 * 第二个参数（json对象）是该节点的属性
 * 后面的所有参数都是该节点的子节点
 * 
 * 着重讲一下第一个参数：
 *   若节点类型是“原生HTML节点”时，要写成字符串类型，如'div'
 *   若是自定义组件（必须要首字母大写），则要写成变量，如 RatCheckbox 
 *   那要是组件名是动态（字符串，组件都可以）的呢，则可以如下方式：Object[key]
 */
export function RatAitem(props) {
    const { attr } = props
    let type = attr.xtype ? attr.xtype : 'Input'
    return React.createElement(
        RatFormItem[type],
        { ...props }
    );
}

export function RatBitem(props) {
    const { attr } = props
    return (
        <Form.Item {...attr}>
            <RatAitem {...props} />
        </Form.Item>
    )
}

export const RatFormItem = {
    Checkbox:       RatCheckbox, 
    DatePicker:     RatDatePicker, 
    Input:          RatInput, 
    InputNumber:    RatInputNumber,
    Radio:          RatRadio, 
    Select:         RatSelect, 
    Switch:         RatSwitch, 
    TimePicker:     RatTimePicker
}