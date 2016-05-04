export default function cleanup(refs, cb) {
  setTimeout(() => {
    if (refs.body) document.body.style.overflow = refs.body.overflow || '';
    if (refs.component) ReactDOM.render('', refs.container, refs.component);
    setTimeout(() => {
      if (refs.container) refs.container.parentNode.removeChild(refs.container);
      cb();
    }, 10);
  }, 50);
}
