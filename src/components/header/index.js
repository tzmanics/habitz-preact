import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Header extends Component {
  render() {
    return (
      <header class={style.header}>
        <h1>HABITZ</h1>
	<p>iterations to make habitz to accomplish goals</p>
        <nav>
          <Link activeClassName={style.active} href="/">GOALS</Link>
          <Link activeClassName={style.active} href="/days">DAYS</Link>
        </nav>
      </header>
    );
  }
}
