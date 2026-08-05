import { Resend } from 'resend'

interface ContactBody {
  name?: string
  email?: string
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)
  const name = body.name?.trim()
  const email = body.email?.trim()
  const message = body.message?.trim()

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: 'name, email and message are required' })
  }

  const profile = event.context.profile
  if (!profile?.contactEmail) {
    throw createError({ statusCode: 500, statusMessage: 'No contact email configured for this profile' })
  }

  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const { error } = await resend.emails.send({
    from: config.resendFromEmail,
    to: profile.contactEmail,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`
  })

  if (error) {
    throw createError({ statusCode: 502, statusMessage: 'Failed to send email' })
  }

  return { success: true }
})
