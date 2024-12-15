interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ackim',
    lastName: 'Longwe',
    age: 22,
    location: 'Zomba'
};

const student2: Student = {
    firstName: 'Mercy',
    lastName: 'Banda',
    age: 25,
    location: 'Blantyre'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

tableHead.innerHTML = `
  <tr>
    <th>First Name</th>
    <th>Location</th>
  </tr>
`;
table.appendChild(tableHead);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.firstName}</td>
    <td>${student.location}</td>
  `;
  tableBody.appendChild(row);
});

table.appendChild(tableBody);

document.body.appendChild(table);