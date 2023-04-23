import EchartLine from './EchartLine'
import EchartBar from './EchartBar'
import EchartPie from './EchartPie'
import EchartMap from './EchartMap'

const components = [
    EchartLine,
    EchartBar,
    EchartPie,
    EchartMap,
]

export default {
    install: (app) => {
        components.forEach(component => {
            app.component(component.name, component)
        });
    }
}