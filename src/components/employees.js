import random from 'random-id'

const employees = [
  {
    id: random(10),
    firstName: "Vishal",
    lastName: "Sinha",
    phone: "9988776655"
  },
  {
    id: random(10),
    firstName: "Nishant",
    lastName: "Varshney",
    phone: "9944556677"
  },
  {
    id: random(10),
    firstName: "Rajat",
    lastName: "Sharma",
    phone: "6677554499"
  }
]

export const getAllEmployees = () => {
  return employees
}

export const getEmployeeById = (id) => {
  return employees.find(emp => emp.id === id)
}

export const addEmployee = (firstName, lastName, phone) => {
  employees.push({
    id: random(10),
    firstName: firstName,
    lastName: lastName,
    phone: phone
  })
}

export const editEmployee = (id, firstName, lastName, phone) => {
  const index = employees.findIndex(emp => emp.id === id)
  employees[index] = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    phone: phone
  }
}

export const deleteEmployee = (id) => {
  const index = employees.findIndex(emp => emp.id === id)
  employees.splice(index, 1)
}