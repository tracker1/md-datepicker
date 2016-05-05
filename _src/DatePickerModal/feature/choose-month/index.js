function getMonth(year, month, name, min, max) {
  const m = new Date(year, month, 1);
  const classes = ['month'];
  const disabled = (m < min || m >= max);

  if (disabled) classes.push(disabled);

  return <button 
    class={classes.join(' ')}
    disabled={disabled}
    onClick={event => {
      event.stopImmediatePropagation();
      action.setCurrentMonth(m);
    }}
  >
    {name}
  </button>;
}

function getMonths(config) {
  var months = [];
  for (var i=0; i<12; i++) {
    
  }
}

export default function renderChooseMonth(props) {
  var { config: { min, max, current, localize: l } } = props;
  
  return <div className="choose-month">
    <div class="header">
      {config.current.year}
    </div>
    <div class="picker-wrap">
      <div class="picker">
        {l.month.map((m, i) => getMonth(current.year, i, m, min, max))}
      </div>
    </div>
  </div>
}