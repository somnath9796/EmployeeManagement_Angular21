export interface EmployeeModel{
    employeeId : number;
    employeeName: string;
    employeeEmail: string;
    employeeDepartment: string;
    salary: number;
    dateOfJoining: string;
    isActive: boolean

}

export interface APIResponse{
    status : number,
    message :string
}