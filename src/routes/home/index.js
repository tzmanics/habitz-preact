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
	  <ul>
	    <li>
	      <h3 class='goal-name'>Meditate</h3>
	      <div class='iterations'>
	        <input type='radio'/>  
	        <input type='radio'/>  
	      </div>
	    </li>
	    <li>
	      <h3 class='goal-name'>Drink Water</h3>
	      <div class='iterations'>
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	      </div>
	    </li>
	    <li>
	      <h3 class='goal-name'>Code 1 Hour</h3>
	      <div class='iterations'>
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	        <input type='radio'/>  
	      </div>
	    </li>
	  </ul>
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
	  <Button> + </Button>
	</div>
      </div>
    );
  }
}
