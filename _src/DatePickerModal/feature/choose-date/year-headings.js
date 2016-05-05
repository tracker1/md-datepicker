export default function renderYearHeadings(props) {
  const { actions, config } = props;
  const {
    chooseDate: { months },
    current,
  } = config;

  // all months same year
  if (months < 2 || current.month < 10) {
    return <div className="year">
      <div
        className='full'
        onClick={ event => {
          event.stopImmediatePropagation();
          actions.changeScreen('choose-month');
        }}
      >
        {current.year}
      </div>
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
      <div className='item'>
        {sy ? m.getFullYear() : ''}
      </div>
    );
  }
  return <div
    className='year'
    onClick={ event => {
      event.stopImmediatePropagation();
      actions.changeScreen('choose-month');
    }}
  >
    {ret}
  </div>;
}
