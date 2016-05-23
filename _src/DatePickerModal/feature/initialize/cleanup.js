export default function cleanup(refs, cb) {
  setTimeout(() => {
    if (refs.documentElement) {
      document.documentElement.style.overflow = refs.documentElement.overflow || '';
      document.documentElement.style.paddingRight = refs.documentElement.paddingRight || '';
    }
    if (refs.component) ReactDOM.render('', refs.container, refs.component);
    setTimeout(() => {
      // remove instance
      if (refs.container) refs.container.parentNode.removeChild(refs.container);

      // remove outer context
      const outerContainer = document.getElementById('DatePickerModal');
      if (outerContainer) {
        const components = outerContainer.querySelectorAll('.dpm-container');
        if (!components.length) outerContainer.parentNode.removeChild(outerContainer);
      }

      cb();
    }, 10);
  }, 50);
}
