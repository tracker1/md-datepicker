
export default function renderMonthHeadings(props) {
  const { actions, config } = props;
  const {
    chooseDate: { months },
    current,
    localize: l,
  } = config;

  const min = new Date(config.min.getFullYear(), config.min.getMonth() - 1, 1);
  const max = new Date(config.max.getFullYear(), config.max.getMonth() - 1 - months, 1);
  const m = new Date(current.year, current.month - 1, 1);
  const hasPrev = min < m;
  const hasNext = max > m;

  const ret = [];

  const prevButton = <button
    className='prev'
    onClick={ event => {
      event.stopImmediatePropagation();
      actions.advanceCurrentMonth(-1);
    }}
    ariaLabel='Previous Month'
  >
    {'\u25c0'}
  </button>;

  const nextButton = <button
    className='next'
    onClick={ event => {
      event.stopImmediatePropagation();
      actions.advanceCurrentMonth(+1);
    }}
    ariaLabel='Next Month'
  >
    {'\u25b6'}
  </button>;

  while (ret.length < months) {
    const i = ret.length + 1;
    m.setMonth(m.getMonth() + 1);

    let prev = null;
    let next = null;

    if (i == 1) {
      prev = hasPrev
        ? prevButton
        : <button
            className="prev disabled"
            disabled="true"
            onClick={ event => event.stopImmediatePropagation() }
          >
            {'\u25c0'}
          </button>;
    }

    if (i === months) {
      next = hasNext
        ? nextButton
        : <button
            className="next disabled"
            disabled="true"
            onClick={ event => event.stopImmediatePropagation() }
          >
            {'\u25b6'}
          </button>;
    }
 
    ret.push(
      <div className='month'>

        <button
          className='text'
          onClick={ event => {
            event.stopImmediatePropagation();
            actions.pickMonth(new Date(+m));
          }}
          ariaLabel='Change Month'
        >
          {l.month[m.getMonth()]}
        </button>

        {prev}

        {next}

      </div>
    );
  }
  return <div class="months">{ret}</div>;
}
