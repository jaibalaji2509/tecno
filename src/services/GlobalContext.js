import React, { Component, createContext } from 'react'

const GlobalContext = createContext({
    user: {},
    currentRouterLocation: '',
    driverCount:0,
    carrierCount:0,
    setValue: () => {},
})

class GlobalContextProvider extends Component {
    constructor (props) {
        super(props)
        this.setValue = this.setValue.bind(this)
    }

    setValue = (object) => {

        for (var key in object) {
            console.log('Setting Shared value', `${key}: ${object[key]}`)
            this.setState({
                [key]: object[key],
            })
        }
    }

    state = {
        user: {},
        currentRouterLocation: '',
        driverCount:0,
        carrierCount:0,
        setValue: () => {},
    }

    render () {
        return (
            <GlobalContext.Provider
                value={{
                    user: this.state.user,
                    driverCount:0,
                    carrierCount:0,
                    setValue: this.setValue,
                    currentRouterLocation: this.state.currentRouterLocation,
                }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }

}

const GlobalContextConsumer = GlobalContext.Consumer

export { GlobalContextConsumer, GlobalContextProvider, GlobalContext }
