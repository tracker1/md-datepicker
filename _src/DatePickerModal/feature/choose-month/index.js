import * as D from 'lib/dateutils';

function getMonth(actions, year, month, name, min, max) {
  const m = new Date(year, month, 1);
  const classes = ['dtm-picker-item'];
  const disabled = (m < min || m >= max);

  if (disabled) classes.push('disabled');
  else classes.push('active');

  // don't show disabled months
  if (disabled) return null;

  return <button
    class={classes.join(' ')}
    disabled={disabled}
    onClick={event => {
      event.stopImmediatePropagation();
      actions.setCurrentMonth(m);
    }}
  >
    {name}
  </button>;
}

export default function renderChooseMonth(props) {
  const { actions, config: { min, max, current, localize: l } } = props;
  const rmin = D.minMonth(min);
  const rmax = D.maxMonth(max);

  return <div className="choose-month dtm-picker" ariaLabel={`Choose month in ${current.year}`}>
    <button
      class="dtm-picker-header"
      ariaLabel='Select another year.'
      onClick={event => {
        event.stopImmediatePropagation();
        actions.pickYear();
      }}
    >
      {current.year}
    </button>
    <div className='dtm-picker-wrap'>
      <div className='dtm-picker-outer'>
        <div className='dtm-picker-inner'>
          {l.month.map((m, i) => getMonth(actions, current.year, i, m, rmin, rmax))}
        </div>
      </div>
    </div>
  </div>;
}
