"use client"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useNavigate } from "react-router-dom"
import { freeDemo } from "../../utils/constant"
import { isValidEmail, isValidName, isValidPhone, isRequired, sanitizeInput } from "../../utils/validation"
import { PRIMARY_GREEN, PRIMARY_TEXT, ERROR } from "../../utils/theme"
import { FaChevronDown } from "react-icons/fa"

const getPlaceholder = (id) => {

 
  switch (id) {
    case 'studentName':
      return 'John Smith'
    case 'parentName':
      return 'Parent/Guardian full name'
    case 'email':
      return 'you@example.com'
    case 'contactNumber':
    case 'contact':
      return '+966 50 123 4567'
    case 'city':
      return 'Riyadh'
    case 'country':
    case 'countryOfResidence':
      return 'Select your country'
    case 'studentGrade':
    case 'grade':
      return 'Select grade level'
    case 'curriculum':
      return 'Select curriculum'
    case 'subjectsOfInterest':
    case 'subject':
      return 'Select subject'
    default:
      return `Enter your ${id}`
  }
}

const DemoForm = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    console.log('EmailJS Public Key available:', !!publicKey) // Don't log the actual key for security
    if (publicKey) {
      emailjs.init(publicKey)
      console.log('EmailJS initialized')
    } else {
      console.error('EmailJS Public Key is missing from environment variables')
    }
  }, [])

  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    contact: "",
    country: "",
    city: "",
    grade: "",
    curriculum: "",
    subject: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    let validatedValue = value
    let fieldError = undefined

    if (value.trim() !== '') {
      switch (name) {
        case 'studentName':
        case 'parentName':
          if (!isValidName(value)) {
            fieldError = 'Please enter a valid name (letters, spaces, hyphens, apostrophes only)'
          }
          break
        case 'email':
          if (!isValidEmail(value)) {
            fieldError = 'Please enter a valid email address'
          }
          break
        case 'contactNumber':
        case 'contact':
          validatedValue = value.replace(/[^0-9+\s-]/g, '')
          if (validatedValue !== value) {
            fieldError = 'Phone numbers can only contain digits, +, spaces, and hyphens'
          } else if (value.trim() !== '' && !isValidPhone(value)) {
            fieldError = 'Please enter a valid phone number'
          }
          break
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: validatedValue }))
    setErrors((prev) => ({ ...prev, [name]: fieldError }))
  }

  const validateFields = () => {
    const newErrors = {}

    if (!isRequired(formData.studentName)) newErrors.studentName = "Student name is required."
    else if (!isValidName(formData.studentName)) newErrors.studentName = "Please enter a valid name."

    if (!isRequired(formData.parentName)) newErrors.parentName = "Parent/Guardian name is required."
    else if (!isValidName(formData.parentName)) newErrors.parentName = "Please enter a valid name."

    if (!isRequired(formData.email)) newErrors.email = "Email is required."
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email."

    if (!isRequired(formData.contact)) newErrors.contact = "Phone number is required."
    else if (!isValidPhone(formData.contact)) newErrors.contact = "Invalid phone number."

    if (!isRequired(formData.country)) newErrors.country = "Country is required."
    if (!isRequired(formData.city)) newErrors.city = "City is required."
    if (!isRequired(formData.grade)) newErrors.grade = "Grade is required."
    if (!isRequired(formData.curriculum)) newErrors.curriculum = "Curriculum is required."
    if (!isRequired(formData.subject)) newErrors.subject = "Subjects are required."

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus(null)
    const newErrors = validateFields()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setFormStatus("error")
      return
    }

    setIsSubmitting(true)
    const safeFormData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = sanitizeInput(formData[key])
      return acc
    }, {})

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    console.log('Environment variables loaded:', {
      serviceIdExists: !!serviceId,
      templateIdExists: !!templateId,
      publicKeyExists: !!publicKey
    })

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing required EmailJS configuration')
      setIsSubmitting(false)
      setFormStatus("error")
      alert("EmailJS configuration is incomplete. Please check your environment variables.")
      return
    }

    const templateParams = {
      to_name: "The Oasis Academy",
      reply_to: safeFormData.email,
      from_name: safeFormData.studentName,
      // recipient: "theoasisacademypk1@gmail.com",
      recipient: "syedbilalahmed2004@gmail.com",
      ...safeFormData,
      // Map form fields to the email template variables expected
      fullName: safeFormData.studentName,
      contactNumber: safeFormData.contact,
      countryOfResidence: safeFormData.country,
      studentGrade: safeFormData.grade,
      subjectsOfInterest: safeFormData.subject
    }

    console.log('Attempting to send email with EmailJS...')
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('EmailJS SUCCESS:', response)
        setIsSubmitting(false)
        setFormStatus("success")
        setFormData({
          studentName: "",
          parentName: "",
          email: "",
          contact: "",
          country: "",
          city: "",
          grade: "",
          curriculum: "",
          subject: "",
        })
        navigate("/thank-you")
      })
      .catch((error) => {
        console.error('EmailJS ERROR:', error)
        setIsSubmitting(false)
        setFormStatus("error")
        alert("Something went wrong: " + error.text + ". Please try again.")
      })
  }

  return (
    <div className="w-full bg-cover bg-center py-8 md:py-16 bg-stone-950 bg-opacity-30 bg-blend-overlay" style={{ backgroundImage: "url('../../../src/assets/DemoForm/freedemo.svg')" }}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-4 md:mb-6">
            <div className="inline-flex items-center mb-2">
              <div className="w-3 h-3 md:w-4 md:h-4 mr-2" style={{ backgroundColor: PRIMARY_GREEN }}></div>
              <span className="font-medium text-sm md:text-base">{freeDemo.badge}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{freeDemo.title}</h1>
          </div>

          <div className="bg-white rounded-xl md:rounded-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-[1020px] mx-auto shadow-sm p-3 sm:p-5 md:p-8 flex justify-center">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full md:w-[95%] sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {freeDemo.fields.map((field) => (
                <div key={field.id} className="space-y-1 sm:space-y-2">
                  <label htmlFor={field.id} className="block text-xs sm:text-sm font-medium">
                    {field.label}
                    {['fullName', 'studentName', 'email', 'contactNumber', 'contact', 'countryOfResidence', 'country', 'studentGrade', 'grade', 'curriculum', 'subjectsOfInterest', 'subject'].includes(field.id) && (
                      <span style={{ color: ERROR }} className="ml-1">*</span>
                    )}
                  </label>
                  {field.type === "select" ? (
                    <div className="relative">
                      <select
                        id={field.id}
                        name={field.id}
                        className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md appearance-none max-h-12 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors`}
                        value={formData[field.id] || ''}
                        onChange={handleChange}
                      >
                        <option value="" disabled>{getPlaceholder(field.id)}</option>
                        {field.options.map((option, index) => (
                          <option key={index} value={typeof option === "object" ? option.value : option}>
                            {typeof option === "object" ? option.label : option}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 text-xs sm:text-sm" />
                    </div>
                  ) : (
                    <input
                      type={field.type || "text"}
                      id={field.id}
                      name={field.id}
                      placeholder={getPlaceholder(field.id)}
                      className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-sm border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-colors`}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                    />
                  )}
                  {errors[field.id] && <p className="text-xs sm:text-sm" style={{ color: ERROR }}>{errors[field.id]}</p>}
                </div>
              ))}
              <div className="col-span-full mt-2 sm:mt-4">
                <button 
                  type="submit" 
                  className="w-full bg-green-600 text-white font-semibold text-sm sm:text-base py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-sm" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {formStatus === "success" && <p className="text-green-600 mt-2 text-xs sm:text-sm text-center">Thank you! Your request was submitted.</p>}
                {formStatus === "error" && <p className="text-red-600 mt-2 text-xs sm:text-sm text-center">Please fix the errors above and try again.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoForm