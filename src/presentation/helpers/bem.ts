const ELEMENT_DELIMITER = '__';
const MODIFIER_DELIMITER = '_';
const MODIFIER_SPACER = '-';

type Modifiers = string | string[] | Record<string, string | number | boolean | object | null | undefined> | null;

class BEM {
  private styles: Record<string, string>;
  private block = '';
  private element = '';
  private modifiers: string[] = [];
  private mixes: string[] = [];

  constructor(styles: Record<string, string>) {
    this.styles = styles;
  }

  private static prepareModifiers = (modifiers: Modifiers) => {
    if (modifiers !== null && !Array.isArray(modifiers) && typeof modifiers === 'object') {
      return Object.entries(modifiers)
        .filter(([, value]) => value || value === 0)
        .map(([key, value]) =>
          typeof value === 'string' || typeof value === 'number' ? `${key}${MODIFIER_SPACER}${value}` : key,
        );
    }

    return modifiers;
  };

  private reset = () => {
    this.block = '';
    this.element = '';
    this.modifiers = [];
    this.mixes = [];
  };

  b = (block: string) => {
    this.block = block;

    return this;
  };

  e = (element: string) => {
    this.element = element;

    return this;
  };

  m = (modifiers: Modifiers, display = true) => {
    if (display) {
      this.modifiers = this.modifiers.concat(BEM.prepareModifiers(modifiers) ?? []);
    }

    return this;
  };

  mix = (className?: string) => {
    if (className) {
      this.mixes.push(className);
    }

    return this;
  };

  show = () => {
    const baseClassName = this.element ? `${this.block}${ELEMENT_DELIMITER}${this.element}` : this.block;
    const classNames = [
      baseClassName,
      ...this.modifiers.map((modifier) => `${baseClassName}${MODIFIER_DELIMITER}${modifier}`),
    ];

    const mixes = this.mixes;

    this.reset();

    return [...classNames.map((className) => this.styles[className]), ...mixes].join(' ');
  };
}

export default BEM;
