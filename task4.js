const students = [
  { name: 'Olha', gender: 'female' },
  { name: 'Oleh', gender: 'male' },
  { name: 'Kristi', gender: 'female' },
];

function sortByGender(arr) {
  const obj = {
    male: [],
    female: [],
  };

  arr.forEach(item => {
    obj[item.gender].push(item);
  });
  return obj;
}
