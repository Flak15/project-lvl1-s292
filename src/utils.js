const generateNumber = (minNumber, maxNumber) =>
  Math.floor((Math.random() * (maxNumber - minNumber)) + minNumber);

export default generateNumber;
