export const toCapitalizeFirstLetter = (str: string) => {
  const capitilizeArr = str.split('');
  const firstLetter = capitilizeArr.splice(0, 1);

  return firstLetter.join('').toUpperCase() + capitilizeArr.join('').toLowerCase();
};
