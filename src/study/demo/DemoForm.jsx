import React from 'react'
import RatForm from '@/components/form'
export default class DemoForm extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            formAttr: { labelWidth: "80"}, 
            attrs:[
              { label:"活动名称", prop:"name" },
              { label:"活动区域", prop:"region", placeholder:"请选择活动区域", xtype:'Select',
                options:[{label:"区域一", value:"shanghai"},{label:"区域二", value:"beijing"}]  },
              { label:"活动日期", prop:"date1", placeholder:"选择日期", xtype:'DatePicker'},
              { label:"活动时间", prop:"date2", placeholder:"选择时间", selectableRange:"18:30:00 - 20:30:00", xtype:'TimePicker'},
              { label:"即时配送", prop:"delivery", onText:"",  offText:"", xtype:'Switch'},
              { label:"活动性质", prop:"type",  xtype:'Checkbox',
                options:[
                  {label:"美食/餐厅线上活动", name:"type"}, {label:"地推活动", name:"type"}, 
                  {label:"线下主题活动", name:"type"}, {label:"纯品牌曝光", name:"type"}, 
                ]
              },
              { label:"特殊资源", prop:"resource", xtype:'Radio',
                options:[{value:"线上品牌商赞助"},{value:"线下场地免费"}] },
              { label:"活动形式", prop:"desc", type:"textarea"},
            ],
            form: {
                name: '', region: '', date1: null, date2: null, delivery: false, type: [], resource: '', desc: ''
            }
        };
        this.onChange = this.onChange.bind(this);
    }
      
    onSubmit(e) {
        e.preventDefault();
    }
      
    onChange(k, v) {
        /** this.setState({

        })*/
        this.state.form[k] = v
        this.forceUpdate();
    }
      
    render() {
        const { form, attrs, formAttr } = this.state
        return (
          <RatForm modelForm={form} attrs={attrs} onChange={this.onChange} {...formAttr}></RatForm>
        )
    }
      
}