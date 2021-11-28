import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Content from './components/Content'
import Content2 from './components/Content2'
import Content3 from './components/Content3'

// css
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/2" component={Content2}></Route>
          <Route exact path="/3" component={Content3}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
