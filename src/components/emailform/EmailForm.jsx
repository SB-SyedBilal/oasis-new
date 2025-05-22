"use client"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useNavigate } from "react-router-dom"
import { freeDemo } from "../../utils/constant"
import { isValidEmail, isValidName, isValidPhone, isRequired, sanitizeInput } from "../../utils/validation"
import { PRIMARY_GREEN, PRIMARY_TEXT, ERROR } from "../../utils/theme"
import { FaChevronDown } from "react-icons/fa"

const getPlaceholder = (id, label) => {
  switch (id) {
    case 'fullName':
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
      return `Enter ${label.toLowerCase()}`
  }
}

const DemoForm = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const [formData, setFormData] = useState({
    fullName: "",
    parentName: "",
    email: "",
    contactNumber: "",
    countryOfResidence: "",
    studentGrade: "",
    curriculum: "",
    subjectsOfInterest: "",
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
        case 'fullName':
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

    if (!isRequired(formData.fullName)) newErrors.fullName = "Student name is required."
    else if (!isValidName(formData.fullName)) newErrors.fullName = "Please enter a valid name."

    if (!isRequired(formData.parentName)) newErrors.parentName = "Parent/Guardian name is required."
    else if (!isValidName(formData.parentName)) newErrors.parentName = "Please enter a valid name."

    if (!isRequired(formData.email)) newErrors.email = "Email is required."
    else if (!isValidEmail(formData.email)) newErrors.email = "Invalid email."

    if (!isRequired(formData.contactNumber)) newErrors.contactNumber = "Phone number is required."
    else if (!isValidPhone(formData.contactNumber)) newErrors.contactNumber = "Invalid phone number."

    if (!isRequired(formData.countryOfResidence)) newErrors.countryOfResidence = "Country is required."
    if (!isRequired(formData.studentGrade)) newErrors.studentGrade = "Grade is required."
    if (!isRequired(formData.curriculum)) newErrors.curriculum = "Curriculum is required."
    if (!isRequired(formData.subjectsOfInterest)) newErrors.subjectsOfInterest = "Subjects are required."

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

    const templateParams = {
      to_name: "The Oasis Academy",
      reply_to: safeFormData.email,
      from_name: safeFormData.fullName,
      recipient: "theoasisacademypk1@gmail.com",
      ...safeFormData,
    }

    emailjs.send(serviceId, templateId, templateParams)
      .then(() => {
        setIsSubmitting(false)
        setFormStatus("success")
        setFormData({
          fullName: "",
          parentName: "",
          email: "",
          contactNumber: "",
          countryOfResidence: "",
          studentGrade: "",
          curriculum: "",
          subjectsOfInterest: "",
        })
        navigate("/thank-you")
      })
      .catch(() => {
        setIsSubmitting(false)
        setFormStatus("error")
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <div className="w-full bg-cover bg-center py-16 bg-stone-950 bg-opacity-30 bg-blend-overlay" style={{ backgroundImage: "url('../../../src/assets/DemoForm/freedemo.svg')" }}>
      <div className="mx-auto max-w-[1440px] px-4 flex justify-center">
        <div className="w-full flex flex-col items-center">
          <div className="text-center mb-6">
            <div className="inline-flex items-center mb-2">
              <div className="w-4 h-4 mr-2" style={{ backgroundColor: PRIMARY_GREEN }}></div>
              <span className="font-medium">{freeDemo.badge}</span>
            </div>
            <h1 className="text-3xl font-bold">{freeDemo.title}</h1>
          </div>

          <div className="bg-white rounded-2xl w-full sm:w-[1020px] mx-auto shadow-sm p-4 sm:p-6 md:p-8 flex justify-center">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 w-full sm:w-[960px] sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {freeDemo.fields.map((field) => (
                <div key={field.id} className="space-y-2">
                  <label htmlFor={field.id} className="block text-sm font-medium">
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
                        className={`w-full px-3 py-2 border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md appearance-none max-h-12`}
                        value={formData[field.id] || ''}
                        onChange={handleChange}
                      >
                        <option value="" disabled>{getPlaceholder(field.id, field.label)}</option>
                        {field.options.map((option, index) => (
                          <option key={index} value={typeof option === "object" ? option.value : option}>
                            {typeof option === "object" ? option.label : option}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                    </div>
                  ) : (
                    <input
                      type={field.type || "text"}
                      id={field.id}
                      name={field.id}
                      placeholder={getPlaceholder(field.id, field.label)}
                      className={`w-full px-3 py-2 border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md`}
                      value={formData[field.id] || ''}
                      onChange={handleChange}
                    />
                  )}
                  {errors[field.id] && <p className="text-sm" style={{ color: ERROR }}>{errors[field.id]}</p>}
                </div>
              ))}
              <div className="col-span-full">
                <button type="submit" className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
                {formStatus === "success" && <p className="text-green-600 mt-2">Thank you! Your request was submitted.</p>}
                {formStatus === "error" && <p className="text-red-600 mt-2">Please fix the errors above and try again.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoForm