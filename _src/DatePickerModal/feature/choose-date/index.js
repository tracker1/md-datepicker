import YearHeadings from './year-headings';
import MonthHeadings from './month-headings';
import Months from './months';

export default function renderChooseDate(props /* , context */) {
  const { actions } = props;

  return <div className="choose-date">
    <div
      className='heading'
      onClick={ event => {
        event.stopImmediatePropagation();
        actions.changeScreen('choose-month');
      }}
    >
      <YearHeadings {...props} />
      <MonthHeadings {...props} />
    </div>
    <Months {...props} />
  </div>;
}
