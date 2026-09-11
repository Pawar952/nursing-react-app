import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
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
  { timestamps: true }
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

  try {
    if (!process.env.MONGO_URI) {
      return res.status(500).json({
        success: false,
        message: "MONGO_URI is missing",
      });
    }

    await mongoose.connect(process.env.MONGO_URI);

    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to save message",
    });
  }
}
