import { h, Component } from 'preact';
import { Chart } from '@progress/kendo-charts-react-wrapper';
import '@progress/kendo-ui';
import style from './style';

export default class Charts extends Component {
  render({ time }) {
    return (
      <div class={style.charts}>
        <h1>Habitz Charts</h1>
	<div class='charts'>
	  <Chart
	  ></Chart>
	</div>
      </div>
    );
  }
}
