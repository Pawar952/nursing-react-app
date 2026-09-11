import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  if (!MONGO_URI) {
    return res.status(500).json({
      success: false,
      message: "MONGO_URI is not configured",
    });
  }

  try {
    await mongoose.connect(MONGO_URI);

    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newContact = await Contact.create({
      name,
      phone,
      email,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Contact message saved successfully",
      id: newContact._id,
    });
  } catch (error) {
    console.error("MongoDB error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to save contact message",
    });
  }
}