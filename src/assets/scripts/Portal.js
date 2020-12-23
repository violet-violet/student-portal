import create from './utils/create';

export default class Portal {
  constructor(data) {
    this.isStatistics = true;
    this.studentData = data;
    this.mainContainer = document.querySelector('main');
    // this.statContainer =
  }

  // getTotalSatistics() {

  // }

  // getAverageStatistics() {

  // }

  renderStatistics() {
    const statContainer = create('div', 'statistics');
    const studentNumber = this.studentData.length;
    create('div', 'statistics__item', `Students total: ${studentNumber}`, statContainer);

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

    create('div', 'statistics__item', `Man total: ${menNumber}`, statContainer);
    create('div', 'statistics__item', `Women total: ${womenNumber}`, statContainer);

    const listOfGroupsWithDuplicates = this.studentData.map((student) => student.group);
    const listOfGroups = Array.from(new Set(listOfGroupsWithDuplicates));
    const studentNumberInGroup = listOfGroups.map((groupNumber) => {
      const groupArray = this.studentData.filter((student) => student.group === groupNumber);
      return groupArray.length;
    });
    const averageStudentsInGroup = (studentNumberInGroup
      .reduce((sum, currentGroup) => sum + currentGroup)) / studentNumberInGroup.length;
    create('div', 'statistics__item', `Average amount of students in a group: ${Math.round(averageStudentsInGroup)}`, statContainer);

    const menNumberInGroup = listOfGroups.map((groupNumber) => {
      const groupArray = this.studentData
        .filter((student) => student.group === groupNumber && student.gender === 'm');
      return groupArray.length;
    });
    const averageMenNumberInGroup = (menNumberInGroup
      .reduce((sum, currentGroup) => sum + currentGroup)) / menNumberInGroup.length;
    create('div', 'statistics__item', `Average amount of men in a group: ${Math.round(averageMenNumberInGroup)}`, statContainer);

    const womenNumberInGroup = listOfGroups.map((groupNumber) => {
      const groupArray = this.studentData
        .filter((student) => student.group === groupNumber && student.gender === 'f');
      return groupArray.length;
    });
    const averageWomenNumberInGroup = (womenNumberInGroup
      .reduce((sum, currentGroup) => sum + currentGroup)) / womenNumberInGroup.length;
    create('div', 'statistics__item', `Average amount of men in a group: ${Math.round(averageWomenNumberInGroup)}`, statContainer);

    this.mainContainer.append(statContainer);
  }

  init() {
    this.renderStatistics();
  }
}
