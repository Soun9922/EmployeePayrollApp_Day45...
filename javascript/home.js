window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml()
})

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                        "<th>Salary</th><th>Start Date</th><th>Actions</th>"
    const innerHtml = `${headerHtml}
                <tr>
                    <td><img class="profile" alt="" src="/EmployeePayrollApp_Day45/assets/Ellipse -2.png"></td>
                    <td>Bill Gates</td>
                    <td>Male</td>
                    <td><div class='dept-label'>HR</div>
                        <div class='dept-label'>Finance</div>
                    </td>
                    <td>400000</td>
                    <td>1 Nov 2020</td>
                    <td>
                        <img id="1" onclick="remove(this)" alt="delete" src="/EmployeePayrollApp_Day45/assets/delete-black-18dp.svg">
                        <img id="1" alt="edit" onclick="update(this)" src="/EmployeePayrollApp_Day45/assets/create-black-18dp.svg">
                    </td>
                </tr>`

    document.querySelector('#table-display').innerHTML = innerHtml
}