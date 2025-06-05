"use server"

import { redirect } from "next/navigation"

export async function submitCareerForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    throw new Error("Please fill in all required fields")
  }

  // Email content
  const emailContent = `
New Career Inquiry from Shepherd's Lambs Website

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This inquiry was submitted through the Shepherd's Lambs career page.
  `.trim()

  try {
    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending
    console.log("Sending email to: mommabearkirkpatrick@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, you would integrate with an actual email service:
    /*
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'mommabearkirkpatrick@gmail.com',
        subject: `Career Inquiry from ${name}`,
        text: emailContent,
        replyTo: email
      })
    })
    */
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send your inquiry. Please try again.")
  }

  // Redirect to success page or back to form with success message
  redirect("/career?success=true")
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !message) {
    throw new Error("Please fill in all required fields")
  }

  // Email content
  const emailContent = `
New Contact Inquiry from Shepherd's Lambs Website

Name: ${name}
Email: ${email}
Subject: ${subject || "General Inquiry"}

Message:
${message}

---
This inquiry was submitted through the Shepherd's Lambs contact form.
  `.trim()

  try {
    console.log("Sending email to: mommabearkirkpatrick@gmail.com")
    console.log("Email content:", emailContent)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error("Failed to send your inquiry. Please try again.")
  }

  redirect("/contact?success=true")
}
