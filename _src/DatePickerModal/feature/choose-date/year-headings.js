export default function renderYearHeadings(props) {
  const { actions, config } = props;
  const {
    current,
  } = config;
  const months = current.months;

  // all months same year

  if (months < 2 || current.month < 13 - months) {
    const cm = new Date(current.year, current.month, 1);
    return <div className="year">
      <button
        className='full'
        onClick={ event => {
          event.stopImmediatePropagation();
          actions.pickMonth(new Date(+cm));
        }}
        data-dtm={ cm.toISOString() }
      >
        {current.year}
      </button>
    </div>;
  }

  // months have different years
  const m = new Date(current.year, current.month - 1, 1);
  const ret = [];
  let sy;
  while (ret.length < months) {
    m.setMonth(m.getMonth() + 1);
    const cm = new Date(+m);
    sy = false;
    if (m.getMonth() === 0) sy = true;
    if (m.getMonth() === 11) sy = true;
    ret.push(
      <button
        className='item'
        onClick={ event => {
          event.stopImmediatePropagation();
          actions.pickMonth(new Date(cm));
        }}
        data-dtm={ m.toISOString() }
      >
        {sy ? m.getFullYear() : ''}
      </button>
    );
  }
  return <div
    className='year'
  >
    {ret}
  </div>;
}
