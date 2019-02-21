const onlyNumber = (value) => {
  if (!value) {
    return value;
  }
  return value.replace(/[^\d]/g, '');
};

export default onlyNumber;
