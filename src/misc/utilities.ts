export function css(...classes: string[]) {
  return classes.filter(c => typeof c === 'string' && !!c.trim()).join(' ');
}
