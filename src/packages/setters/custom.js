import SetterLayout from './setterLayout'

const components = [
    SetterLayout
]

export default {
    install: app => {
        components.forEach(component => {
            app.component(component.name, component)
        })
    }
}