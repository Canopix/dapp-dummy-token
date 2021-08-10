import { mount, configure } from 'enzyme'
import { StoreProvider } from 'easy-peasy'
import Balance from './Balance'
import { Router, Link } from 'react-router-dom'
import { mockStore as store } from '../../utils/testing'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
configure({ adapter: new Adapter() })

describe('Home Component', () => {
  const subject = (
    <StoreProvider store={store}>
      <Router history={history}>
        <Balance />
      </Router>
    </StoreProvider>
  )
  it('match snapshot', () => {
    const wrapper = mount(subject)
    expect(wrapper).toMatchSnapshot()
  })
  it('should have a minified address', () => {
    const wrapper = mount(subject)
    expect(wrapper.text().includes('0xc77D...622a')).toBeTruthy()
  })
  it('should present a text of 500 DUMMY on the balance', () => {
    const wrapper = mount(subject)
    expect(wrapper.text().includes('500 DUMMY')).toBeTruthy()
  })
  it('should be a transfer link', () => {
    const wrapper = mount(subject)
    expect(wrapper.find(Link).props().to).toBe('/transfer')
  })
})
