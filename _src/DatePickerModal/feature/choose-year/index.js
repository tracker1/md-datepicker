import * as D from 'lib/dateutils';

function getYears(actions, min, max) {
  const ret = [];
  for (let y = min.getFullYear(); y < max.getFullYear(); y++) {
    const dtm = new Date(y, 0, 1);
    ret.push(
      <button
        className='dtm-picker-item'
        onClick={event => {
          event.stopImmediatePropagation();
          actions.setCurrentYear(dtm);
        }}
      >
        {y}
      </button>
    );
  }
  return ret;
}

export default function renderChooseYear(props) {
  // window.console.log('renderChooseYear', props);
  const { actions, config: { min, max } } = props;

  return <div className="choose-year dtm-picker" ariaLabel='Choose a year.'>
    <div
      className='dtm-picker-header'
      ariaLabel='Select another year.'
    >
      Select a year.
    </div>
    <div className='dtm-picker-wrap'>
      <div className='dtm-picker-outer'>
        <div className='dtm-picker-inner'>
          {getYears(actions, D.minYear(min), D.maxYear(max))}
        </div>
      </div>
    </div>
  </div>;
}
