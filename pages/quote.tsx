'use client'

import { FormEvent, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export default function Quote() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [prefilled, setPrefilled] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
  })

  useEffect(() => {
    if (router.query.product) {
      const product = decodeURIComponent(router.query.product as string)
      setFormData(prev => ({ ...prev, interest: product }))
      setPrefilled(product)
    }
  }, [router.query])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Head>
        <title>Request a Quote — Keltech Communications</title>
      </Head>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '20px 28px' }}>
        <div style={{ marginBottom: '40px' }}>
          <span className="eyebrow">GET STARTED</span>
          <h1 style={{ fontSize: '32px', margin: '12px 0 16px' }}>Request a Quote</h1>
          <p style={{ color: 'var(--steel)', fontSize: '16px', lineHeight: '1.75' }}>Tell us about your products and services needs and a representative from Keltech Communications will review your request and get back to you.</p>
        </div>

        {prefilled && (
          <div style={{ background: 'var(--amber-dim)', padding: '16px', borderRadius: '4px', marginBottom: '24px', borderLeft: '4px solid var(--amber)' }}>
            <p style={{ color: 'var(--ink)', fontSize: '14px', margin: '0' }}>Pre-filled from: {prefilled}</p>
          </div>
        )}

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>
              <div>
                <label htmlFor="phone" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="company" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Company / operation</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="interest" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Product or service you&apos;re inquiring about</label>
              <input
                type="text"
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="message" style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your site, timeline, and what you're trying to solve."
                rows={6}
                style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--line-light)', borderRadius: '4px', fontSize: '14px', fontFamily: 'var(--font-body)' }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px 24px',
                backgroundColor: 'var(--amber)',
                color: 'var(--ink)',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Submit Request
            </button>
          </form>
        ) : (
          <div style={{ background: 'var(--paper-dim)', padding: '40px', borderRadius: '4px', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>DEMO MODE</span>
            <h2 style={{ fontSize: '24px', margin: '16px 0 20px' }}>This form does not send anywhere</h2>
            <p style={{ color: 'var(--steel)', marginBottom: '24px' }}>In a live build, this request would route directly to Keltech&apos;s team. In this concept demo, nothing was transmitted or stored — this confirmation is just to show the intended experience.</p>
            <Link href="/" className="btn btn-amber" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: 'var(--amber)', color: 'var(--ink)', borderRadius: '4px', textDecoration: 'none' }}>
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
