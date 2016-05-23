export default function cleanup(refs, cb) {
  setTimeout(() => {
    refs.cleanup.forEach(t => t());
    cb();
  }, 0);
}
