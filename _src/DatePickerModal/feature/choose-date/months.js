import * as D from 'lib/dateutils';
import Month from './month';

export default function renderMonths(props) {
  const { config } = props;
  const {
    current,
  } = config;
  const months = current.months;

  const m = new Date(current.year, current.month - 1, 1);
  const ret = [];
  while (ret.length < months) {
    m.setMonth(m.getMonth() + 1);
    ret.push(<Month month={D.clone(m)} {...props} />);
  }
  return <div className="dpm-months">{ret}</div>;
}
