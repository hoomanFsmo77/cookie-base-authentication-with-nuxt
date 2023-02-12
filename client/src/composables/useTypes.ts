export interface Login_Information {
    email:string|null
    password:string|null
}

export interface Register_Information extends Login_Information{
    name:string|null
    c_password:string|null
}
export interface Register_Response{
    token:string,
    user:{
        name:string
        email:string
        updated_at:string
        created_at:string
        id:number
    }
}

export interface Login_Response {
    token:string,
    user:{
        id:number
        name:string
        email:string
        email_verified_at:null
        created_at:string
        updated_at:string
    }
}
export interface IPosts {
    id:number,
    title:string,
    body:string
}