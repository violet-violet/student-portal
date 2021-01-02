const sortFunctions = {
  lastNameToLastLetter: (a, b) => {
    const aName = a.name.last.toLowerCase();
    const bName = b.name.last.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  },

  lastNameToFirstLetter: (a, b) => {
    const aName = a.name.last.toLowerCase();
    const bName = b.name.last.toLowerCase();
    if (aName > bName) {
      return -1;
    }
    if (aName < bName) {
      return 1;
    }
    return 0;
  },

  firstNameToLastLetter: (a, b) => {
    const aName = a.name.first.toLowerCase();
    const bName = b.name.first.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  },

  firstNameToFirstLetter: (a, b) => {
    const aName = a.name.first.toLowerCase();
    const bName = b.name.first.toLowerCase();
    if (aName > bName) {
      return -1;
    }
    if (aName < bName) {
      return 1;
    }
    return 0;
  },

  genderToMale: (a, b) => {
    const aName = a.gender.toLowerCase();
    const bName = b.gender.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  },
  genderToFemale: (a, b) => {
    const aName = a.gender.toLowerCase();
    const bName = b.gender.toLowerCase();
    if (aName > bName) {
      return -1;
    }
    if (aName < bName) {
      return 1;
    }
    return 0;
  },
  groupToMax: (a, b) => {
    const aValue = a.group;
    const bValue = b.group;
    if (aValue > bValue) {
      return -1;
    }
    if (aValue < bValue) {
      return 1;
    }
    return 0;
  },
  groupToMin: (a, b) => {
    const aValue = a.group;
    const bValue = b.group;
    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  },
  ageToMax: (a, b) => {
    const aValue = a.age;
    const bValue = b.age;
    if (aValue > bValue) {
      return -1;
    }
    if (aValue < bValue) {
      return 1;
    }
    return 0;
  },
  ageToMin: (a, b) => {
    const aValue = a.age;
    const bValue = b.age;
    if (aValue < bValue) {
      return -1;
    }
    if (aValue > bValue) {
      return 1;
    }
    return 0;
  },
};

export default sortFunctions;
