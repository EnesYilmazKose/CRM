function UI() {

}

UI.prototype.addCustomerToUI = (newCustomer) => {
    const customerList = document.getElementById('customers');
    customerList.innerHTML +=
            `
            <tr>
                <td>${newCustomer.name}</td>
                <td>${newCustomer.surname}</td>
                <td>${newCustomer.contactNumber}</td>
                <td>${newCustomer.email}</td>
                <td><a href="#" id="hideButton" class="btn btn-info"><i class="bi bi-card-heading"></i></a></td>
                <td><a href="#" class="btn btn-danger"><i class="bi bi-dash-circle"></i></a></td>
            </tr>
        `;
}

UI.prototype.clearInputs = () => {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i].value = "";
    }
}

UI.prototype.displayMessage = (message, type) => {
    const cardBody = document.querySelector(".card-body");

    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
        div.remove();
    }, 2000);
}

UI.prototype.loadAllCustomers = (customers) => {
    const customerList = document.getElementById('customers');
    customers.forEach(function (customer) {
        customerList.innerHTML +=
        `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.surname}</td>
                <td>${customer.contactNumber}</td>
                <td>${customer.email}</td>
                <td><a href="#" id="hideButton" class="btn btn-info"><i class="bi bi-card-heading"></i></a></td>
                <td><a href="#" class="btn btn-danger"><i class="bi bi-dash-circle"></i></a></td>
            </tr>
            
        `;
    })
}

UI.prototype.deleteCustomerFromUI = (element) => {
    element.remove();
}

UI.prototype.clearAllCustomersFromUI = () => {
    const customerList = document.getElementById("customers");
    customerList.innerHTML = "";
}

UI.prototype.hideDetailsUI = (element) => {
    element.style.display = "none";
}

UI.prototype.showDetailsUI = (element) => {
    element.style.display = "inline-table";
}