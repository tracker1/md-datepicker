function getMonth(actions, year, month, name, min, max) {
  const m = new Date(year, month, 1);
  const classes = ['month'];
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
  const rmin = new Date(min.getFullYear(), min.getMonth(), 1);
  const rmax = new Date(max.getFullYear(), max.getMonth(), 1);
  if (rmax.getDate < max.getDate()) rmax.setMonth(rmax.getMonth() + 1);
  
  return <div className="choose-month" ariaLabel={`Choose month in ${current.year}`}>
    <button 
      class="header" 
      ariaLabel='Select another year.'
      onClick={event => {
        event.stopImmediatePropagation();
        actions.pickYear();
      }}
    >
      {current.year}
    </button>
    <div class="picker">
      {l.month.map((m, i) => getMonth(actions, current.year, i, m, rmin, rmax))}
    </div>
  </div>
}