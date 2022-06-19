import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title : 'All Flights',
      flights: flights,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newFlight(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/new', {
      title : 'Add Flights',
      flights: flights,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  console.log(req.body)
  Flight.create(req.body)
  .then(flight => {
    console.log('Created Flight: ', flight)
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newFlight as new,
  create
}