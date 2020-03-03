import React, {Component} from 'react'
import { Table, Pagination } from 'element-react'
import { getPaginationData } from '@/libs/utils'
export default class DemoTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄'},
				{ date: '2016-05-04', name: '张晓丽', address: '上海市普陀区金沙江路 1517 弄'},
				{ date: '2016-05-06', name: '吴海云', address: '上海市普陀区金沙江路 1519 弄'},
				{ date: '2016-05-08', name: '李大成', address: '上海市普陀区金沙江路 1521 弄'},
				{ date: '2016-05-09', name: '祝枝山', address: '上海市普陀区金沙江路 1533 弄'},
				{ date: '2016-05-03', name: '唐柏生', address: '上海市普陀区金沙江路 1544 弄'}
			],
			columns: [
				{ label: "日期", prop: "date", width: 180 },
				{ label: "姓名", prop: "name", width: 180 },
				{ label: "地址", prop: "address" }
			],
			currentPage:1,
			hasPage:true,
			clientPagin:true,
			pageSize: 3,
			total: 6,
		}
		
		this.getTableDataShow = this.getTableDataShow.bind(this)
		this.onCurrentChange = this.onCurrentChange.bind(this)
	}
	
	/** 当前页显示的数据 */
	getTableDataShow(data) {
		if(this.state.hasPage && this.state.clientPagin){ //客户端分页
			return getPaginationData(data, {
				pageSize:this.state.pageSize, 
				pageNo: this.state.currentPage, 
				total: this.state.total
			})
		}
		return data
		
	}

	onCurrentChange(currentPage) {
		this.setState({ currentPage })
	}

	//当前页数据对应的属性：currentData
	get currentData() {
		const {data, currentPage } = this.state
		return this.getTableDataShow(data, currentPage)
	}

	render() {
		return (
			<div>
				<Table
					style={{width: '100%'}}
					columns={this.state.columns}
					maxHeight={200}
					data={this.currentData}
				/>
				<div>
					<Pagination 
						layout="total, prev, pager, next" 
						pageSize={this.state.pageSize} 
						total={this.state.total} 
						onCurrentChange={this.onCurrentChange} />
				</div>
			</div>
			
			
		)
	}
}