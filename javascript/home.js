window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage()
    document.querySelector(".emp-count").textContent = empPayrollList.length
    createInnerHtml()
    localStorage.removeItem('editEmp')
})

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? 
            JSON.parse(localStorage.getItem('EmployeePayrollList')) : []
}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    if (empPayrollList.length == 0) return
    let innerHtml = `${headerHtml}`
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
                <tr>
                    <td><img class="profile" alt="" src="${empPayrollData._profilePic}" alt=""></td>
                    <td>${empPayrollData._name}</td>
                    <td>${empPayrollData._gender}</td>
                    <td>${getDeptHtml(empPayrollData._department)}</td>
                    <td>${empPayrollData._salary}</td>
                    <td>${empPayrollData._startDate}</td>
                    <td>
                        <img name="${empPayrollData._id}" onclick="remove(this)" src="/EmployeePayrollApp_Day45/assets/delete-black-18dp.svg" alt="delete">
                        <img name="${empPayrollData._id}" onclick="update(this)" src="/EmployeePayrollApp_Day45/assets/create-black-18dp.svg" alt="edit">
                    </td>
                </tr>`
    }
    document.querySelector('#table-display').innerHTML = innerHtml
}

const getDeptHtml = (deptList) => {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class-'dept-label'>${dept}</div>`
    }
    return deptHtml
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Chester Billington',
            _gender: 'male',
            _department: [
                'Engineering', 'Finance'
            ],
            _salary: '450000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/EmployeePayrollApp_Day45/assets/Ellipse -2.png'
        },
        {
            _name: 'Waren Buffet',
            _gender: 'male',
            _department: [
                'Sales', 'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/EmployeePayrollApp_Day45/assets/Ellipse -1.png'
        }
    ]
    return empPayrollListLocal
}