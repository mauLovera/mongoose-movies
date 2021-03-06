import mongoose from "mongoose"

// shorthand
const Schema = mongoose.Schema

// where models are created and their data types are specified
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
  },
  flightNo: {
    type: Number, 
    min: 10, 
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return (new Date().getFullYear()) - 1 
    }
  }
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}