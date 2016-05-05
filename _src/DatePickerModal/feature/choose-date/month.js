export function dateCell(config, actions, dtm, m) {
  if (config.chooseDate.months > 1 && dtm.getMonth() !== m.getMonth()) return '';

  const classes = [];
  const checked = config.checkDate(new Date(+dtm));

  if (typeof checked === 'string') classes.push(checked);

  const disabled = (
    dtm < config.min
    || dtm >= config.max
    || !checked
  );

  if (disabled) {
    classes.push('disabled');
  } else {
    classes.push((dtm.getMonth() !== m.getMonth()) ? 'oob' : 'active');
  }

  return <button
    className={classes.join(' ')}
    disabled={disabled}
    onClick={event => {
      event.stopImmediatePropagation();
      if (disabled) return;
      actions.resolve(dtm);
    }}
  >
    {dtm.getDate()}
  </button>;
}

export default function renderMonth(props) {
  const { month, config, actions } = props;
  const { localize: l } = config;

  let rows = [];
  let stack = [];

  const dtm = new Date(month.getFullYear(), month.getMonth(), 1 - month.getDay());
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 1);

  while (dtm < end || stack.length < 7) {
    if (stack.length === 7) {
      rows.push(<tr>{stack}</tr>);
      stack = [];
    }
    stack.push(
      <td>
        { dateCell(config, actions, new Date(+dtm), new Date(+month)) }
      </td>
    );
    dtm.setDate(dtm.getDate() + 1);
  }

  if (stack.length) rows.push(<tr>{stack}</tr>);
  if (rows.length < 6) rows.push(<tr><td><button disabled="true" /></td></tr>);

  return <div className='month'>
    <table>
      <thead>
        <tr class='dow'>
          {l.days.map((d) => <th class="d">{d}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </div>;
}
