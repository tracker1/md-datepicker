import YearHeadings from './year-headings';
import MonthHeadings from './month-headings';
import Months from './months';

export default function renderChooseDate(props /* , context */) {
  const { actions, config } = props;
  const { style: { chooseDate: style } } = config;

  return <div className="dpm-choose-date">
    <div
      style={ style.heading.wrap }
      onClick={ event => {
        actions.changeScreen('choose-month');
        event.stopImmediatePropagation();
      } }
    >
      <YearHeadings {...props} />
      <MonthHeadings {...props} />
    </div>
    <Months {...props} />
  </div>;
}
