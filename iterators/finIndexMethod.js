const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(word => {
    return word === 'elephant';
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});