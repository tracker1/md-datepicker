export default function createContainer(refs) {
  Object.assign(refs, { body: { overflow: document.body.style.overflow } });
  document.body.style.overflow = 'hidden';
  const container = document.createElement('div');
  container.id = `date-picker-modal-${refs.instance}`;
  container.className = 'date-picker-modal-container';
  document.body.appendChild(container);
  return container;
}
