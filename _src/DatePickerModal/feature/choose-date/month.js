import * as D from 'lib/dateutils';

export function dateCell(config, actions, dtm, m, selected) {
  if (config.monthsToShow > 1 && dtm.getMonth() !== m.getMonth()) return '';

  const classes = [];
  const checked = config.checkDate(D.clone(dtm));

  if (+selected === +dtm) classes.push('selected');

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
  const { value, localize: l } = config;
  const selected = !value ? null : D.date(value);

  let rows = [];
  let stack = [];

  const dtm = D.minMonth(month);
  dtm.setDate(dtm.getDate() - dtm.getDay());

  const end = D.nextMonth(month);

  while (dtm < end || stack.length < 7) {
    if (stack.length === 7) {
      rows.push(<tr>{stack}</tr>);
      stack = [];
    }
    stack.push(
      <td>
        { dateCell(config, actions, D.clone(dtm), D.clone(month), selected) }
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
