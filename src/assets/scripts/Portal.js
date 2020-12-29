import create from './utils/create';

export default class Portal {
  constructor(data) {
    this.isStatistics = true;
    this.studentData = data;
    this.mainContainer = document.querySelector('main');
    this.statContainer = create('div', 'statistics');
    this.manageContainer = create('div', 'management');
    this.btnStatistics = document.getElementById('btn-stats');
    this.btnManagement = document.getElementById('btn-manage');
  }

  init() {
    this.renderStatistics();

    this.btnStatistics.addEventListener('click', () => {
      const isToggled = this.toggleActiveBtn(this.btnStatistics);
      if (isToggled) {
        this.btnStatistics.setAttribute('disabled', '');
        this.btnManagement.removeAttribute('disabled');
        this.renderStatistics();
        this.clearTab('management');
      }
    });
    this.btnManagement.addEventListener('click', () => {
      const isToggled = this.toggleActiveBtn(this.btnManagement);
      if (isToggled) {
        this.btnManagement.setAttribute('disabled', '');
        this.btnStatistics.removeAttribute('disabled');
        this.renderManagement();
        this.clearTab('statistics');
      }
    });
  }

  renderStatistics() {
    while (this.statContainer.firstChild) {
      this.statContainer.firstChild.remove();
    }
    this.getTotalSatistics();
    this.getAverageStatistics();
    this.mainContainer.append(this.statContainer);
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

  getAverageStatistics() {
    create('div', 'statistics__item', `Average amount of students in a group: ${this.getAverageValue('students')}`, this.statContainer);
    create('div', 'statistics__item', `Average amount of men in a group: ${this.getAverageValue('men')}`, this.statContainer);
    create('div', 'statistics__item', `Average amount of women in a group: ${this.getAverageValue('women')}`, this.statContainer);
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

  toggleActiveBtn(btn) {
    if (!btn.hasAttribute('disabled')) {
      this.btnStatistics.classList.toggle('btn_active');
      this.btnManagement.classList.toggle('btn_active');
      return true;
    }
    return false;
  }

  clearTab(tabClass) {
    this.mainContainer.querySelector(`.${tabClass}`).remove();
  }

  renderManagement() {
    while (this.manageContainer.firstChild) {
      this.manageContainer.firstChild.remove();
    }

    this.studentData.sort((a, b) => {
      const aName = a.name.last.toLowerCase();
      const bName = b.name.last.toLowerCase();
      if (aName < bName) {
        return -1;
      }
      if (aName > bName) {
        return 1;
      }
      return 0;
    });

    this.renderManageTable();

    this.mainContainer.append(this.manageContainer);
  }

  renderManageTable() {
    const addingButton = create('button', 'btn btn_adding', 'Add student', this.manageContainer);
    const modalWindow = document.querySelector('#modal-window');
    const modalOverlay = document.querySelector('#modal-overlay');
    const closeButton = document.querySelector('#close-button');
    const buttonsWithModalWindow = [addingButton, closeButton];

    // Table header
    const trHeadElement = create('tr', '');
    const theadTitles = ['Last name', 'First name', 'Group', 'Age', 'Gender', 'Management'];
    theadTitles.forEach((title) => create('th', '', title, trHeadElement));
    const theadElement = create('thead', '', trHeadElement);
    const table = create('table', 'management__table', theadElement, this.manageContainer);

    // Table body
    const tbody = create('tbody', '');
    this.studentData.forEach((student) => {
      const currentTrElement = create('tr', '');
      create('td', '', student.name.last, currentTrElement);
      create('td', '', student.name.first, currentTrElement);
      create('td', '', `${student.group}`, currentTrElement);
      create('td', '', `${student.age}`, currentTrElement);

      if (student.gender === 'm') {
        create('td', '', 'male', currentTrElement);
      }
      if (student.gender === 'f') {
        create('td', '', 'female', currentTrElement);
      }

      const deleteButton = create('button', 'btn btn_func', 'Delete');
      const changeButton = create('button', 'btn btn_func', 'Change');
      buttonsWithModalWindow.push(changeButton);
      create('td', '', [changeButton, deleteButton], currentTrElement);

      tbody.append(currentTrElement);
    });

    buttonsWithModalWindow.forEach((btn) => {
      btn.addEventListener('click', () => {
        modalWindow.classList.toggle('closed');
        modalOverlay.classList.toggle('closed');
      });
    });

    table.append(tbody);
  }
}
