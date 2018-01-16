import { h, Component } from 'preact';
import { AutoComplete } from '@progress/kendo-dropdowns-react-wrapper';
import { Button } from '@progress/kendo-buttons-react-wrapper';
import { NumericTextBox } from '@progress/kendo-inputs-react-wrapper';
import '@progress/kendo-ui';
import style from './style';

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1> GOALS </h1>
	<div class='goals-list'>
	</div>
	<div class='create-goals'>
	  <AutoComplete value='Enter Goal' DataSource={[
	    'Water',
            'Work Out',
	    'No Sugar',
	    'Meditate'
	  ]} />
	  <NumericTextBox>
	  </NumericTextBox>
	  <Button>+</Button>
	</div>
      </div>
    );
  }
}
