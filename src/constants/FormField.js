const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"
    }
]

const signupFields=[
    {
        labelText:"First Name",
        labelFor:"firstName",
        id:"firstName",
        name:"firstName",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Your first name"
    },    {
        labelText:"Last Name",
        labelFor:"lastName",
        id:"lastName",
        name:"lastName",
        type:"text",
        autoComplete:"lastname",
        isRequired:true,
        placeholder:"Your last name"
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        labelText:"phone number",
        labelFor:"phone-number",
        id:"phoneNumber",
        name:"phone number",
        type:"number",
        autoComplete:"phone number",
        isRequired:true,
        placeholder:"phone number"
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"
    }
]

export { loginFields, signupFields }