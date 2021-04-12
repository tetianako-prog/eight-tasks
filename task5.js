class Component {
  constructor(tag) {
    this.element = {
      tag,
      style: {
        display: 'block',
      },
    };
  }
  hide() {
    this.element.style.display = 'none';
  }
  show() {
    this.element.style.display = 'block';
  }
}

class Box extends Component {
  constructor({ size, color, tag }) {
    super(tag);
    this.element.style.width = size;
    this.element.style.height = size;
    this.element.style.background = color;
  }

  getProps() {
    console.log(
      `Tag: ${this.element.tag}; Width: ${this.element.style.width}; Height: ${this.element.style.height}; Background: ${this.element.style.background}; Display: ${this.element.style.display}`,
    );
  }
}
