export interface User {
  userId: number,
  firstName: string,
  lastName: string,
  jmbg: string,
  dateOfBirth: number,
  gender: string,
  phoneNumber: string,
  address: string,
  email: string,
  isActive: boolean,
}

export interface Employee {
  employeeId: number,
  firstName: string,
  lastName: string,
  username: string,
  jmbg: string,
  dateOfBirth: number,
  gender: string,
  phoneNumber: string,
  address: string,
  email: string,
  isActive: boolean,
  permissions: Permission[],
  role: Role
}

export interface Firm {
  firmId: number,
  firmName: string,
  email: string,
  phoneNumber: number,
  matNumberFirm: number,
  pib: number,
  industryCode: number,
  isActive: boolean,

}

export interface Permission {
  permissionId: number
  authority: string
}

export interface Account{
  balance: number,
  account: string,
  mark: string,
  employeeId: number,
  userId: number,

}
export interface Role {
  roleId: number | undefined,
  roleName: string,
}

export interface Token {
  token: string
}

export interface Credit{
  name: string,
  accountNumber: string,
  amount: number,
  paymentPeriod: number,
  fee: number,
  startDate: number,
  endDate: number,
  monthlyFee: number,
  remainingAmount: number,
  currencyMark: string
}