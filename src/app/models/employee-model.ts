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

export interface LoginModel{
    UserName : string;
    Password : string;
}

export interface LoginResponse{
    token : string;
}
