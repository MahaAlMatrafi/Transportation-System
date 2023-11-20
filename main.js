class Vehicle {
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

class Car extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

class Plane extends Vehicle {
  constructor(name, manufacturer, id, type) {
    super(name, manufacturer, id);
    this.type = type;
  }
}

class Employee {
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

class Reservation {
  constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
  }
}

const car1 = new Car("Camry", "Toyota", "C1", "Gas");
const car2 = new Car("Tesla Model S", "Tesla", "C2", "Electric");
const car3 = new Car("BMW 3 Series", "BMW", "C3", "Gas");

const plane1 = new Plane("Boeing 747", "Boeing", "P1", "Jet");
const plane2 = new Plane("A320", "Airbus", "P2", "Narrow-body Jet");

const reservations = [];

function mapVehicleEmployee(employeeId, vehicleId) {
  const employee = employees.find((emp) => emp.id === employeeId);
  const vehicle = vehicles.find((veh) => veh.id === vehicleId);

  if (employee instanceof Pilot && vehicle instanceof Car) {
    console.log("Error : Pilots cann't be assigned to cars.");
  } else if (employee instanceof Driver && vehicle instanceof Plane) {
    console.log("Error : Drivers cann't be assigned to planes.");
  } else {
    const reservation = new Reservation(
      new Date(),
      employeeId,
      vehicleId,
      reservations.length + 1
    );
    reservations.push(reservation);
    console.log("Reservation created successfully.");
  }
}

function printReservations() {
  reservations.map((reservation) => {
    console.log("Reservation ID:", reservation.reservationID);
    console.log("Reservation Date:", reservation.reservationDate);
    console.log("Employee ID:", reservation.employeeId);
    console.log("Vehicle ID:", reservation.vehicleId);
    console.log("===============================");
  });
}

const employee1 = new Driver("Sara", "E1", "2000-02-12", "D1");
const employee2 = new Pilot("Maha", "E2", "2001-03-02", "P1");

const vehicles = [car1, car2, car3, plane1, plane2];

const employees = [employee1, employee2];

mapVehicleEmployee("E1", "C1");
mapVehicleEmployee("E2", "P2"); 
mapVehicleEmployee("E2", "C2"); 

printReservations();