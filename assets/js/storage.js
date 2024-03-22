const key = "customers";

function Storage() {

}

Storage.prototype.addCustomerToStorage = (newCustomer) => {
    let customers = Storage.prototype.getCustomersFromStorage();
    customers.push(newCustomer);
    localStorage.setItem(key, JSON.stringify(customers));
}

Storage.prototype.getCustomersFromStorage = () => {
    let customers;
    if(localStorage.getItem(key) === null) 
        customers = [];
    else
        customers = JSON.parse(localStorage.getItem(key));

    return customers;
}

Storage.prototype.deleteCustomerFromStorage = (customerEmail) => {
    let customers = Storage.prototype.getCustomersFromStorage();
    
    customers.forEach(function (customer, index) {
        if(customer.email === customerEmail) {
            customers.splice(index, 1);
        }
    });
    localStorage.setItem(key, JSON.stringify(customers));
}

Storage.prototype.clearAllCustomersFromStorage = () => {
    localStorage.removeItem(key);
}
