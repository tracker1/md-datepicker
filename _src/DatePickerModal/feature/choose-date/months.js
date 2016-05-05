import Month from './month';

export default function renderMonths(props) {
  const { config } = props;
  const {
    chooseDate: { months },
    current,
  } = config;

  const m = new Date(current.year, current.month - 1, 1);
  const ret = [];
  while (ret.length < months) {
    m.setMonth(m.getMonth() + 1);
    ret.push(<Month month={new Date(+m)} {...props} />);
  }
  return <div className="months">{ret}</div>;
}
