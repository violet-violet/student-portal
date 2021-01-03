/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { v4 as uuidv4 } from 'uuid';
import create from './utils/create';
import sortFunctions from './sort';

export default class Portal {
  constructor(data) {
    this.studentData = data;
    this.mainContainer = document.querySelector('main');
    this.statContainer = create('div', 'statistics');
    this.manageContainer = create('div', 'management');
    this.btnStatistics = document.getElementById('btn-stats');
    this.btnManagement = document.getElementById('btn-manage');
    this.modalWindowContent = document.querySelector('#modal-content');
    this.currentSortTableFunction = sortFunctions.lastNameToLastLetter;
  }

  init() {
    this.renderStatistics();
    this.addTabButtonListener(this.btnStatistics);
    this.addTabButtonListener(this.btnManagement);
    this.addManageTableListeners();
  }

  addTabButtonListener(button) {
    const anotherTabBtn = button === this.btnStatistics ? this.btnManagement : this.btnStatistics;

    button.addEventListener('click', () => {
      const isToggled = this.toggleActiveBtn(button);
      if (isToggled) {
        button.setAttribute('disabled', '');
        anotherTabBtn.removeAttribute('disabled');

        if (button === this.btnStatistics) {
          this.renderStatistics();
          this.clearTab('management');
        }
        if (button === this.btnManagement) {
          this.renderManagement();
          this.clearTab('statistics');
        }
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
    this.studentData.sort(this.currentSortTableFunction);
    this.renderManageTable();
    this.mainContainer.append(this.manageContainer);
  }

  renderManageTable() {
    const addingButton = create('button', 'btn btn_adding', 'Add student', this.manageContainer);
    const closeButton = document.querySelector('#close-button');
    const buttonsWithModalWindow = [addingButton, closeButton];

    // Table header
    const trHeadElement = create('tr', '');
    const theadTitles = ['Last name', 'First name', 'Group', 'Age', 'Gender', 'Management'];
    theadTitles.forEach((title) => create('th', 'sorted-column', title, trHeadElement, ['id', `thead-${title}`]));
    const theadElement = create('thead', '', trHeadElement);
    const table = create('table', 'management__table', theadElement, this.manageContainer);

    // Table body
    const tbody = create('tbody', '');
    this.studentData.forEach((student) => {
      const currentTrElement = create('tr', '', null, null, ['id', `${student._id}`]);
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

      const deleteButton = create('button', 'btn btn_delete', 'Delete');
      const changeButton = create('button', 'btn btn_change', 'Change');
      buttonsWithModalWindow.push(changeButton);
      create('td', '', [changeButton, deleteButton], currentTrElement);

      tbody.append(currentTrElement);
    });

    table.append(tbody);
  }

  addManageTableListeners() {
    document.addEventListener('click', (event) => {
      const currentTR = event.target.closest('tr');

      if (event.target.classList.contains('btn_delete')) {
        const studentId = currentTR.id;
        const studentIndex = this.studentData.findIndex((student) => student._id === studentId);
        this.studentData.splice(studentIndex, 1);
        currentTR.remove();
      }

      if (event.target.classList.contains('btn_adding')) {
        const formHtml = '<h2 class="modal-window__title">Add student</h2><form><p><label>First name</label><input type="text" name="first_name"></p><p><label>Last name</label><input type="text" name="last_name"></p><p><label>Gender</label><select name="Gender"><option>male</option><option>female</option></select></p><p><label>Group</label><input type="number" name="group"></p><p><label>Age</label><input type="number" name="age"></p><button class="btn" id="form-add-student"> Add new student</button></form>';
        this.modalWindowContent.insertAdjacentHTML('beforeend', formHtml);
        this.toggleModalWindow();
      }

      if (event.target.id === 'form-add-student') {
        event.preventDefault();
        this.addNewStudent();
        this.closeModalWindow();
        this.renderManagement();
      }

      if (event.target.classList.contains('btn_change')) {
        const studentId = currentTR.id;
        const formHtml = `<h2 class="modal-window__title">Change student information</h2><form><input type="hidden" name="student-id" value="${studentId}"><p><label>First name</label><input type="text" name="first_name"></p><p><label>Last name</label><input type="text" name="last_name"></p><p><label>Gender</label><select name="Gender"><option>male</option><option>female</option></select></p><p><label>Group</label><input type="number" name="group"></p><p><label>Age</label><input type="number" name="age"></p><button class="btn" id="form-change-student">Save changings</button></form>`;
        this.modalWindowContent.insertAdjacentHTML('beforeend', formHtml);
        const currentStudent = this.studentData.find((student) => student._id === studentId);
        document.querySelector('input[name="age"]').value = currentStudent.age;
        document.querySelector('input[name="group"]').value = currentStudent.group;
        document.querySelector('input[name="first_name"]').value = currentStudent.name.first;
        document.querySelector('input[name="last_name"]').value = currentStudent.name.last;
        document.querySelector('select[name="Gender"]').value = currentStudent.gender === 'm' ? 'male' : 'female';
        this.toggleModalWindow();
      }

      if (event.target.id === 'form-change-student') {
        event.preventDefault();
        const studentId = document.querySelector('input[name="student-id"]').value;
        this.changeStudentInfo(studentId);
        this.closeModalWindow();
        this.renderManagement();
      }

      if (event.target.classList.contains('close-button')) {
        this.closeModalWindow();
      }

      if (event.target.id === 'thead-Last name') {
        this.sortTableColumn(sortFunctions.lastNameToLastLetter, sortFunctions.lastNameToFirstLetter);
      }

      if (event.target.id === 'thead-First name') {
        this.sortTableColumn(sortFunctions.firstNameToLastLetter, sortFunctions.firstNameToFirstLetter);
      }

      if (event.target.id === 'thead-Group') {
        this.sortTableColumn(sortFunctions.groupToMax, sortFunctions.groupToMin);
      }

      if (event.target.id === 'thead-Age') {
        this.sortTableColumn(sortFunctions.ageToMax, sortFunctions.ageToMin);
      }

      if (event.target.id === 'thead-Gender') {
        this.sortTableColumn(sortFunctions.genderToMale, sortFunctions.genderToFemale);
      }
    });
  }

  addNewStudent() {
    const newStudent = {};
    newStudent._id = `${uuidv4()}`;
    this.assignValuesForStudent(newStudent);
    this.studentData.push(newStudent);
  }

  assignValuesForStudent(student) {
    const currentStudent = student;
    currentStudent.age = document.querySelector('input[name="age"]').value;
    currentStudent.group = document.querySelector('input[name="group"]').value;
    if (!currentStudent.name) {
      currentStudent.name = {};
    }
    currentStudent.name.first = document.querySelector('input[name="first_name"]').value;
    currentStudent.name.last = document.querySelector('input[name="last_name"]').value;
    const selectGender = document.querySelector('select[name="Gender"]').value;
    currentStudent.gender = selectGender === 'male' ? 'm' : 'f';
    return currentStudent;
  }

  changeStudentInfo(studentId) {
    const currentStudent = this.studentData.find((student) => student._id === studentId);
    this.assignValuesForStudent(currentStudent);
  }

  closeModalWindow() {
    this.clearModalWindow();
    this.toggleModalWindow();
  }

  toggleModalWindow() {
    const modalWindow = document.querySelector('#modal-window');
    const modalOverlay = document.querySelector('#modal-overlay');
    modalWindow.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
  }

  clearModalWindow() {
    while (this.modalWindowContent.childNodes.length !== 2) {
      this.modalWindowContent.lastChild.remove();
    }
  }

  sortTableColumn(sortFuncToLastValue, sortFuncToFirstValue) {
    if (this.currentSortTableFunction === sortFuncToLastValue) {
      this.currentSortTableFunction = sortFuncToFirstValue;
    } else {
      this.currentSortTableFunction = sortFuncToLastValue;
    }
    this.renderManagement();
  }
}
