import { h, Component } from 'preact';
import{ DatePicker } from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import style from './style';

export default class Days extends Component {
  render({ time }) {
    return (
      <div class={style.days}>
        <h1>Habitz Day by Day</h1>
	<div class='datepicker'>
	  <DatePicker>
	  </DatePicker>
	</div>
      </div>
    );
  }
}
