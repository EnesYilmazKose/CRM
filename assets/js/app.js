const form = document.getElementById('customer-form');
const nameElement = document.getElementById('name');
const surnameElement = document.getElementById('surname');
const contactNumberElement = document.getElementById('contactNumber');
const emailElement = document.getElementById('email');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById('clear-customers');

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
}

function addCustomer(e) {
    e.preventDefault();

    const name = nameElement.value;
    const surname = surnameElement.value;
    const contactNumber = contactNumberElement.value;
    const email = emailElement.value;

    if (name === "" || surname === "" || contactNumber === "" || email === "") {
        ui.displayMessage("Make sure fill all spaces!", "danger");
    }
    else {
        const newCustomer = new Customer(name, surname, contactNumber, email);
        ui.addCustomerToUI(newCustomer);
        storage.addCustomerToStorage(newCustomer);
        ui.displayMessage('Customer succesfully added!', "success");
    }
}

function deleteCustomer(e) {
    e.preventDefault();
    if(e.target.className === "btn btn-danger") {
        ui.deleteCustomerFromUI(e.target.parentElement.parentElement);
        storage.deleteCustomerFromStorage(e.target.parentElement.previousElementSibling.textContent);
    }
}

function clearAllCustomers() {
    if(confirm("Are You Sure?")) {
        ui.clearAllCustomersFromUI();
        storage.clearAllCustomersFromStorage();
    }
}