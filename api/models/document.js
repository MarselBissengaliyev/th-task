import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
  outNumber: {
    type: Number,
    required: true
  },
  deliveryType: {
    type: String,
    required: true
  },
  dateOut: {
    type: Date,
    required: true
  },
  registerNumber: {
    type: Number,
    required: true
  },
  corespodent: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    required: true,
  },
  registrator: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  performer: {
    type: String,
    required: true
  },
  // 
  theme: {
    type: String,
    required: true,
  },
  inNumber: {
    type: Number,
    required: true
  },
  inDate: {
    type: Date,
    required: true
  }
}
);

export default mongoose.model('Document', DocumentSchema);