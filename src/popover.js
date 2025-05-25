export default class Popover {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      title: options.title || 'Popover',
      content: options.content || '',
    };
    this.popover = null;
    this.isVisible = false;

    this.init();
  }

  init() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    this.popover.style.position = 'absolute';
    this.popover.style.display = 'none'; // Initially hidden

    const title = document.createElement('h3');
    title.classList.add('popover-title');
    title.textContent = this.options.title;

    const content = document.createElement('div');
    content.classList.add('popover-content');
    content.textContent = this.options.content;

    this.popover.appendChild(title);
    this.popover.appendChild(content);
    document.body.appendChild(this.popover);

    this.element.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.popover.style.display = 'block';
    this.updatePosition();
  }

  hide() {
    this.popover.style.display = 'none';
  }

  updatePosition() {
    const elementRect = this.element.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();

    const left = elementRect.left + (elementRect.width / 2) - (popoverRect.width / 2);
    const top = elementRect.top - popoverRect.height - 10;

    this.popover.style.left = `${left}px`;
    this.popover.style.top = `${top}px`;
  }
}
