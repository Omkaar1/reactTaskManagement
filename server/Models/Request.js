import mongoose from "mongoose";

// Define the Item schema
const ItemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Define the Purchase Request schema
const PurchaseRequestSchema = new Schema({
  requestDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  requester: {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
  },
  items: [ItemSchema],
  totalAmount: {
    type: Number,
    required: true,
    min: 0,
  },
  justification: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
    required: true,
  },
  approval: {
    approverName: {
      type: String,
      trim: true,
    },
    approvalDate: {
      type: Date,
    },
    comments: {
      type: String,
      trim: true,
    },
  },
});

// Export the model
const Request = mongoose.model("PurchaseRequest", PurchaseRequestSchema);
export default Request;
