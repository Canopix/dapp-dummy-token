import { mount, configure } from 'enzyme'
import { StoreProvider } from 'easy-peasy'
import Home from './Home'
import { Router, Redirect } from 'react-router-dom'
import { mockStore as store } from '../../utils/testing'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
configure({ adapter: new Adapter() })

describe('Home Component', () => {
  const subject = (
    <StoreProvider store={store}>
      <Router history={history}>
        <Home />
      </Router>
    </StoreProvider>
  )
  it('should redirect if there is an address', () => {
    const wrapper = mount(subject)
    const redirect = wrapper.find(Redirect)

    expect(redirect).toHaveLength(1)
  })
})
