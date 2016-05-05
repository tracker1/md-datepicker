
export default function renderMonthHeadings(props) {
  const { actions, config } = props;
  const {
    chooseDate: { months },
    style: { chooseDate: { heading: { month: style } } },
    current,
    localize: l,
  } = config;

  const min = new Date(config.min.getFullYear(), config.min.getMonth() - 1, 1);
  const max = new Date(config.max.getFullYear(), config.max.getMonth() - 1 - months, 1);
  const m = new Date(current.year, current.month - 1, 1);
  const hasPrev = min < m;
  const hasNext = max > m;

  const ret = [];
  while (ret.length < months) {
    const i = ret.length + 1;
    m.setMonth(m.getMonth() + 1);

    //if (i > 1) ret.push(<div style={ style.spacer }></div>);
    ret.push(
      <div style={ style.wrap }>

        <button
          style={ style.text }
          onClick={ event => {
            actions.changeScreen('choose-month');
            event.stopImmediatePropagation();
          }}
          ariaLabel='Change Month'
        >
          {l.month[m.getMonth()]}
        </button>

        {
          !hasPrev || i > 1 ? null // <div style={ style.prev }></div>
          : <button
              style={ style.prev }
              onClick={ event => {
                actions.advanceCurrentMonth(-1);
                event.stopImmediatePropagation();
              }}
              ariaLabel='Previous Month'
            >
              {'\u25c0'}
            </button>
        }

        {
          !hasNext || i < months ? null //<div style={ style.next }></div>
          : <button
              style={ style.next }
              onClick={ event => {
                actions.advanceCurrentMonth(+1);
                event.stopImmediatePropagation();
              }}
              ariaLabel='Next Month'
            >
              {'\u25b6'}
            </button>
        }

      </div>
    );
  }
  return <div>{ret}</div>;
}
