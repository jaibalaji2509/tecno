import React from 'react'
import { isEmail } from 'validator'
import {
    getUser, signIn, signUp, verify
} from '../ApiService'
import * as validator from 'validator';

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
    // token=localStorage.getItem('token');

    state = { isAuth: localStorage.getItem('token') !== null } // true }//

    componentDidMount() {
        // const token = localStorage.getItem('token')
        // console.log("Auth token",token)
        // if (token !== "null"){
        //     console.log('token exists')
        //     this.setState({isAuth : true})
        // }

        this.checkToken()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.children !== this.props.children) {
            this.checkToken()
        }
    }

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        // this.createOfficeLocation = this.createOfficeLocation.bind(this)
        // this.addPosting = this.addPosting.bind(this)
        // this.addExperienceDetails = this.addExperienceDetails.bind(this)
        // this.suspendEmployee = this.suspendEmployee.bind(this)
        // this.addTransferEmployee = this.addTransferEmployee.bind(this)
        // this.promoteEmployee = this.promoteEmployee.bind(this)
        // this.addPromoteEmployee = this.addPromoteEmployee.bind(this)
        // this.viewSuspendEmployee = this.viewSuspendEmployee.bind(this)

        
        
    }

    async checkToken() {

        var user;
        // var result;
        try {
            user = await getUser()

            if (user.success) {
                console.log("setting auth true");
                this.setState({ isAuth: true })
            }

        } catch (e) {
            console.log('Auth Context Unauthorized');
            console.log(e.message)
            this.logout()
        }

    }

    async login(email, password) {

        if (!validator.isEmail(email) && !validator.isMobilePhone(email)) {
            throw new Error('Please enter a valid email / phone number.');
        }

        // if (!isEmail(email)) {
        //     throw new Error('Please enter a valid email id.')
        // }

        if (!password) {
            throw new Error('Please enter a password.')
        }

        console.log('Email', email)

        let result
        try {
            result = await signIn(email, password)
        } catch (e) {
            console.log(e.message)
            throw e
        }

        if (result.success) {
            console.log("sign in auth response", result)
            this.setState({ isAuth: true })
            sessionStorage.setItem('userId', result.user._id)
            localStorage.setItem('userId', result.user._id)
            localStorage.setItem('token', result.token)

            return {
                success: true,
                token: result.token,
                user: result.user,
            }
        }
        this.setState({ isAuth: false })

    }

    async signup(name, email, password) {
        if (!isEmail(email)) {
            throw new Error('Please enter a valid email')
        }

        if (password !== 'undefined') {
            if (
                password.length < 8
                // !password.match(
                //     /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/,
                // )
            ) {
                throw new Error('Please enter a password of min 8 characters.')
            }
        }

        let result
        try {
            result = await signUp(name, email, password)
        } catch (e) {
            console.log(e.message)
            throw e
        }

        if (result.success) {
            return ({ success: true, user: result.user })
        }
        this.setState({ isAuth: false })
        return false
    }

    async verify(email, code) {
        if (!isEmail(email)) {
            throw new Error('No email id to verify.')
        }

        if (code === 'undefined') {
            throw new Error('Please enter a verification code.')
        }

        let result
        try {
            result = await verify(email, code)
        } catch (e) {
            console.log(e.message)
            throw e
        }

        if (result.success) {
            return result
        }
        return false
    }

    // async createOfficeLocation(name, type, adress, adress1, country, state, dist, area, pincode) {

    //     if (name !== 'undefined') {
    //         throw new Error('Please enter office name')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter office type')
    //     }
    //     if (adress !== 'undefined') {
    //         throw new Error('Please enter Address')
    //     }
    //     if (adress1 !== 'undefined') {
    //         throw new Error('Please enter Address')
    //     }
    //     if (country !== 'undefined') {
    //         throw new Error('Please enter Country')
    //     }
    //     if (state !== 'undefined') {
    //         throw new Error('Please state')
    //     }
    //     if (dist !== 'undefined') {
    //         throw new Error('Please enter District')
    //     }
    //     if (area !== 'undefined') {
    //         throw new Error('Please enter Area')
    //     }
    //     if (pincode !== 'undefined') {
    //         throw new Error('Please enter Pincode')
    //     }

    //     let result
    //     try {
    //         result = await createOfficeLocation(name, type, adress, adress1, country, state, dist, area, pincode)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async addPosting( name, type, location, circle, division, department, dist, role) {
       
    //     if (name !== 'undefined') {
    //         throw new Error('Please enter office name')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter office type')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter Address')
    //     }
    //     if (circle !== 'undefined') {
    //         throw new Error('Please enter Address')
    //     }
    //     if (division !== 'undefined') {
    //         throw new Error('Please enter Country')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please state')
    //     }
    //     if (dist !== 'undefined') {
    //         throw new Error('Please enter District')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter Area')
    //     }


    //     let result
    //     try {
    //         result = await addPosting(name, type, location, circle, division, department, dist, role)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async addExperienceDetails(employee, name, type, location, circle, division, department, dist, role) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter Company name')
    //     }
    //     if (name !== 'undefined') {
    //         throw new Error('Please enter office name')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter Department type')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (circle !== 'undefined') {
    //         throw new Error('Please enter Address')
    //     }
    //     if (division !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please joining date')
    //     }
    //     if (dist !== 'undefined') {
    //         throw new Error('Please Relevin Date')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please Experience')
    //     }


    //     let result
    //     try {
    //         result = await addExperienceDetails(employee, name, type, location, circle, division, department, dist, role)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async suspendEmployee(employee, office, description, department, Id,
    //     desigination1, type, role, location, desigination2, from, desigination3, to, description1) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }
    //     if (desigination2 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (from !== 'undefined') {
    //         throw new Error('Please enter Suspend From')
    //     }
    //     if (desigination3 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (to !== 'undefined') {
    //         throw new Error('Please enter Suspend To')
    //     }
    //     if (description1 !== 'undefined') {
    //         throw new Error('Please enter Description')
    //     }

    //     let result
    //     try {
    //         result = await suspendEmployee(employee, office, description, department, Id,
    //             desigination1, type, role, location, desigination2, from, desigination3, to, description1)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async addTransferEmployee(employee, office, description, department, Id,
    //     desigination1, type, role, location, vacancy) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }
    //     if (vacancy !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }


    //     let result
    //     try {
    //         result = await addTransferEmployee(employee, office, description, department, Id,
    //             desigination1, type, role, location, vacancy)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async transferEmployeeList(employee, office, description, department, Id,
    //     desigination1, type, role, location,) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }


    //     let result
    //     try {
    //         result = await transferEmployeeList(employee, office, description, department, Id,
    //             desigination1, type, role, location)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async promoteEmployee(employee, office, description, department, Id,
    //     desigination1, type, role, location,) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }


    //     let result
    //     try {
    //         result = await promoteEmployee(employee, office, description, department, Id,
    //             desigination1, type, role, location)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }
    // async addPromoteEmployee(employee, office, description, department, Id,
    //     desigination1, type, role, location, vacancy) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }
    //     if (vacancy !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }


    //     let result
    //     try {
    //         result = await addPromoteEmployee(employee, office, description, department, Id,
    //             desigination1, type, role, location, vacancy)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    // async viewSuspendEmployee(employee, office, description, department, Id,
    //     desigination1, type, role, location,) {
    //     if (employee !== 'undefined') {
    //         throw new Error('Please enter employee')
    //     }
    //     if (office !== 'undefined') {
    //         throw new Error('Please enter office')
    //     }
    //     if (description !== 'undefined') {
    //         throw new Error('Please enter description')
    //     }
    //     if (department !== 'undefined') {
    //         throw new Error('Please enter department')
    //     }
    //     if (Id !== 'undefined') {
    //         throw new Error('Please enter Id')
    //     }
    //     if (desigination1 !== 'undefined') {
    //         throw new Error('Please enter Desigination')
    //     }
    //     if (type !== 'undefined') {
    //         throw new Error('Please enter type')
    //     }
    //     if (role !== 'undefined') {
    //         throw new Error('Please enter role')
    //     }
    //     if (location !== 'undefined') {
    //         throw new Error('Please enter location')
    //     }


    //     let result
    //     try {
    //         result = await viewSuspendEmployee(employee, office, description, department, Id,
    //             desigination1, type, role, location)
    //     } catch (e) {
    //         console.log(e.message)
    //         throw e
    //     }
    //     if (result.success) {
    //         return ({ success: true, user: result.user })
    //     }
    //     this.setState({ isAuth: false })
    //     return false
    // }

    logout() {
        this.setState({ isAuth: false })
        // localStorage.setItem('token', null)
        localStorage.removeItem('token')
    }

    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.login,
                    signup: this.signup,
                    // createOfficeLocation: this.createOfficeLocation,
                    // addPosting: this.addPosting,
                    // addExperienceDetails: this.addExperienceDetails,
                    // suspendEmployee: this.suspendEmployee,
                    // addTransferEmployee: this.addTransferEmployee,
                    // transferEmployee: this.transferEmployee,
                    // promoteEmployee: this.promoteEmployee,
                    // addPromoteEmployee: this.addPromoteEmployee,
                    // viewSuspendEmployee: this.viewSuspendEmployee,

                    
                    
                    verify: this.verify,
                    approval: this.approval,
                    logout: this.logout,
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

String.prototype.capitalize = function () {
    const text = this.toLowerCase()
    return text.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
        return p1 + p2.toUpperCase()
    })
}

const AuthConsumer = AuthContext.Consumer
export { AuthContext, AuthProvider, AuthConsumer }
