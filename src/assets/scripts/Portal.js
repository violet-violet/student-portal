import create from './utils/create';

export default class Portal {
  constructor(data) {
    this.isStatistics = true;
    this.studentData = data;
    this.mainContainer = document.querySelector('main');
    this.statContainer = create('div', 'statistics');
  }

  getTotalSatistics() {
    const studentNumber = this.studentData.length;
    create('div', 'statistics__item', `Students total: ${studentNumber}`, this.statContainer);

    let menNumber = 0;
    let womenNumber = 0;

    this.studentData.forEach((item) => {
      if (item.gender === 'm') {
        menNumber += 1;
      }
      if (item.gender === 'f') {
        womenNumber += 1;
      }
      return item;
    });

    create('div', 'statistics__item', `Man total: ${menNumber}`, this.statContainer);
    create('div', 'statistics__item', `Women total: ${womenNumber}`, this.statContainer);
  }

  getAverageValue(value) {
    const listOfGroupsWithDuplicates = this.studentData.map((student) => student.group);
    const listOfGroups = Array.from(new Set(listOfGroupsWithDuplicates));

    const valueNumberInGroup = listOfGroups.map((groupNumber) => {
      const groupArray = this.studentData.filter((student) => {
        switch (value) {
          case 'students':
            return student.group === groupNumber;
          case 'men':
            return student.group === groupNumber && student.gender === 'm';
          default:
            return student.group === groupNumber && student.gender === 'f';
        }
      });
      return groupArray.length;
    });

    const averageValue = (valueNumberInGroup
      .reduce((sum, currentGroup) => sum + currentGroup)) / valueNumberInGroup.length;
    return Math.round(averageValue);
  }

  getAverageStatistics() {
    create('div', 'statistics__item', `Average amount of students in a group: ${this.getAverageValue('students')}`, this.statContainer);
    create('div', 'statistics__item', `Average amount of men in a group: ${this.getAverageValue('men')}`, this.statContainer);
    create('div', 'statistics__item', `Average amount of women in a group: ${this.getAverageValue('women')}`, this.statContainer);
  }

  renderStatistics() {
    this.getTotalSatistics();
    this.getAverageStatistics();
    this.mainContainer.append(this.statContainer);
  }

  init() {
    this.renderStatistics();
  }
}
