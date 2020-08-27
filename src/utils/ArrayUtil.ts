const arrayFromTo = (width: number, height: number) =>
  Array.from(Array(width), () => new Array(height).fill(false));

export default arrayFromTo;
