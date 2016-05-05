export default function renderYearHeadings(props) {
  const { actions, config } = props;
  const {
    chooseDate: { months },
    current,
    style: { chooseDate: { heading: { year: style } } }
  } = config;

  // all months same year
  if (months < 2 || current.month < 10) {
    return <div
      style={ style.fullItem }
      onClick={ event => {
        actions.changeScreen('choose-month');
        event.stopImmediatePropagation();
      } }
    >
      {current.year}
    </div>;
  }

  // months have different years
  const m = new Date(current.year, current.month - 1, 1);
  const ret = [];
  let sy;
  while (ret.length < months) {
    m.setMonth(m.getMonth() + 1);
    sy = false;
    if (m.getMonth() === 0) sy = true;
    if (m.getMonth() === 11) sy = true;
    ret.push(
      <div style={ style.item }>
        {sy ? m.getFullYear() : ''}
      </div>
    );
  }
  return <div
    style={ style.wrap }
    onClick={ event => {
      actions.changeScreen('choose-month');
      event.stopImmediatePropagation();
    } }
  >
    {ret}
  </div>;
}