import {Homepage} from '../views/Homepage'
import {Testimonials} from '../views/testimonials'
import {Prices} from '../views/Prices'
import {Contacts} from '../views/contacts'
import Divider from '../components/divider.jsx'
import DividerBotom from '../components/dividerBotom'
const Router = () => (
    <div>
        <Homepage />
        <Divider color= {'#e8eeeb'} />
        <Prices />
        <DividerBotom />
        <Testimonials />
        <Divider color= {'#323232'} />
        <Contacts />

    </div>
)

export default Router