const form = document.getElementById('customer-form');
const nameElement = document.getElementById('name');
const surnameElement = document.getElementById('surname');
const contactNumberElement = document.getElementById('contactNumber');
const emailElement = document.getElementById('email');
const noteElement = document.getElementById('note');
const cardBody = document.querySelectorAll('.card-body')[2];
const clear = document.getElementById('clear-customers');
const hide = document.getElementById('hideButton');
const customerDetailTable = document.getElementById('customerDetailTable');

const ui = new UI();
const storage = new Storage();

eventlistener();

function eventlistener() {
    form.addEventListener("submit", addCustomer);

    document.addEventListener('DOMContentLoaded', () => {
        let customers = storage.getCustomersFromStorage();
        ui.loadAllCustomers(customers);
    });

    cardBody.addEventListener('click', deleteCustomer);
    clear.addEventListener('click', clearAllCustomers);
    cardBody.addEventListener('click', showHideDetails);
    document.getElementById('searchBarCustomer').addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const rows = document.querySelectorAll('#customers tr');

        rows.forEach(function (row) {
            const cells = row.querySelectorAll('td');
            let found = false;

            cells.forEach(function (cell) {
                const text = cell.textContent.toLowerCase();
                if (text.includes(searchText)) {
                    found = true;
                }
            });

            if (found) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

function addCustomer(e) {
    e.preventDefault();

    const name = nameElement.value;
    const surname = surnameElement.value;
    const contactNumber = contactNumberElement.value;
    const email = emailElement.value;
    const note = noteElement.value;

    if (name === "" || surname === "" || contactNumber === "" || email === "") {
        ui.displayMessage("Make sure fill all spaces!", "danger");
    }
    else {
        const newCustomer = new Customer(name, surname, contactNumber, email, note);
        ui.addCustomerToUI(newCustomer);
        ui.addNotetoCustomerToUI(newCustomer);
        storage.addCustomerToStorage(newCustomer);
        ui.displayMessage('Customer succesfully added!', "success");
    }
}

function deleteCustomer(e) {
    e.preventDefault();
    if(e.target.className === "btn btn-danger") {
        ui.deleteCustomerFromUI(e.target.parentElement.parentElement);
        storage.deleteCustomerFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}

function clearAllCustomers() {
    if(confirm("Are You Sure?")) {
        ui.clearAllCustomersFromUI();
        storage.clearAllCustomersFromStorage();
    }
}

function showHideDetails(e) {
    e.preventDefault();
    if(e.target.className === "btn btn-info") {
        ui.hideDetailsUI(e.target.parentElement.parentElement.parentElement.parentElement);
        ui.showDetailsUI(e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling);
        ui.hideDetailsUI(e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling);
        ui.showDetailsUI(e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling);
        ui.hideDetailsUI(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling);
    }
}