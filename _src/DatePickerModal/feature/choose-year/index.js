function getYears(actions, min, max) {
  const rmin = new Date(min.getFullYear(), 0, 1);
  const rmax = new Date(max.getFullYear(), 0, 1);
  if (rmax < max) rmax.setFullYear(rmax.getFullYear() + 1);

  const ret = [];
  for (let y = rmin.getFullYear(); y < rmax.getFullYear(); y++) {
    const dtm = new Date(y, 0, 1);
    ret.push(
      <button
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

  return <div className="choose-year" ariaLabel='Choose a year.'>
    <div
      class="header"
      ariaLabel='Select another year.'
    >
      Select a year.
    </div>
    <div class="picker">
      {getYears(actions, min, max)}
    </div>
  </div>;
}
