import React from 'react';
import { Line } from 'react-chartjs-2';
import './data.css';
class Data extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {},
			currentRate: 0
		};

		this.state.datesFormatted = this.getPass14DatesFormatted(new Date());
	}
	componentWillMount() {
		this.getCurrent();
		this.getChartData();
	}
	formatChartDate(s) {
		let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

		let str = s.split('');
		let m = str[5] + str[6];
		let d = str[8] + str[9];

		return months[Number(m) - 1] + ' ' + Number(d);
	}
	async getChartData() {
		let dateArr = [];
		let rateArr = [];

		let data = await fetch(
			`https://api.coindesk.com/v1/bpi/historical/close.json?currency=EUR&start=${this.state
				.datesFormatted[0]}&end=${this.state.datesFormatted[this.state.datesFormatted.length - 1]}`
		)
			.then((response) => response.json())
			.then((obj) => {
				for (let i = 0; i < this.state.datesFormatted.length; i++) {
					dateArr.push(this.formatChartDate(this.state.datesFormatted[i]));
					rateArr.push(obj.bpi[this.state.datesFormatted[i]]);
				}
			});
		let i;
		let todayData = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then((response) => response.json())
			.then((obj) => {
				i = obj.bpi.EUR.rate;
				this.setState({
					today: this.getDateFormatted(new Date(), 0),
					currentRate: obj.bpi.EUR.rate
				});
				let t = this.formatChartDate(this.getDateFormatted(new Date(), 0));
				let r = obj.bpi.EUR.rate || this.state.currentRate;
				if (r.indexOf(',')) {
					r = r.split('').filter((a) => a !== ',').join('');
				}
				dateArr.push(t);
				rateArr.push(parseFloat(r));
			});

		this.setState({
			chartData: {
				labels: dateArr,
				datasets: [
					{
						lable: 'rate',
						data: rateArr
					}
				]
			}
		});
	}
	getPass14DatesFormatted(today) {
		let array = [];
		for (let i = 13; i >= 1; i--) {
			let d = today - 1000 * 60 * 60 * 24 * i;
			d = new Date(d);
			let dYear = d.getFullYear();
			let dMonth = d.getMonth() + 1; //getMonth returns 0-11
			let dDate = d.getDate();
			let dFormatted =
				dYear + '-' + (dMonth >= 10 ? dMonth : '0' + dMonth) + '-' + (dDate >= 10 ? dDate : '0' + dDate);

			array.push(dFormatted);
		}

		return array;
	}
	getDateFormatted(today, n) {
		let start = today - 1000 * 60 * 60 * 24 * n;
		start = new Date(start);
		let startYear = start.getFullYear();
		let startMonth = start.getMonth() + 1; //getMonth returns 0-11
		let startDate = start.getDate();
		let startFormatted =
			startYear +
			'-' +
			(startMonth >= 10 ? startMonth : '0' + startMonth) +
			'-' +
			(startDate >= 10 ? startDate : '0' + startDate);

		return startFormatted;
	}

	async getCurrent() {
		var d = new Date();

		let t;
		let r;
		return await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then((response) => response.json())
			.then((obj) => {
				this.setState({
					today: this.getDateFormatted(new Date(), 0),
					currentRate: obj.bpi.EUR.rate
				});
				t = this.formatChartDate(this.getDateFormatted(new Date(), 0));
				r = obj.bpi.EUR.rate;
			});
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'
	};
	render() {
		return (
			<div className="data">
				<Line
					width={600}
					height={250}
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: `Bitcoin Price Index(EUR)currrent:€${this.state.currentRate}`,
							fontSize: 25
						},
						bezierCurve: false,
						elements: {
							line: {
								tension: 0.1
							}
						},
						legend: {
							display: false
						}
					}}
				/>
			</div>
		);
	}
}

export default Data;
