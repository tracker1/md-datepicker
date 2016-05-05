export function Row(props) {
  const { date, config } = props;
  return <div>{props.children}</div>
}

export default function renderMonth(props, m) {
  const { actions, config } = props;
  const {
    style: { chooseDate: { month:style } }
  };
  /*
  const { actions, config } = props;
  const {
    style: { chooseDate: { heading: { month: style } } },
    current,
    localize: l,
  } = config;
  */
  const { month } = props;
  
  const rows = [
    `${month.getFullYear()}-${month.getMonth() + 1}`
  ];
  
  return <div>
  
  </div>;
}
