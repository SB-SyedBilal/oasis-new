"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useNavigate } from "react-router-dom"
import { freeDemo } from "../../utils/constant"
import { isValidEmail, isValidName, isValidPhone, isRequired, sanitizeInput } from "../../utils/validation"
import { PRIMARY_GREEN, PRIMARY_TEXT, ERROR } from "../../utils/theme"
import { FaChevronDown } from "react-icons/fa"

// Helper function to generate appropriate placeholders based on field ID or label
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

    // Validate input as it's entered
    if (value.trim() !== '') {
      switch (name) {
        case 'fullName':
        case 'studentName':
          if (!isValidName(value)) {
            fieldError = 'Please enter a valid name (letters, spaces, hyphens, apostrophes only)'
          }
          break
        case 'parentName':
          if (!isValidName(value)) {
            fieldError = 'Please enter a valid parent name (letters, spaces, hyphens, apostrophes only)'
          }
          break
        case 'email':
          if (!isValidEmail(value)) {
            fieldError = 'Please enter a valid email address'
          }
          break
        case 'contactNumber':
        case 'contact':
          // Allow only numbers, +, spaces, and hyphens
          validatedValue = value.replace(/[^0-9+\s-]/g, '')
          if (validatedValue !== value) {
            // If we had to sanitize the input, show a gentle reminder
            fieldError = 'Phone numbers can only contain digits, +, spaces, and hyphens'
          } else if (value.trim() !== '' && !isValidPhone(value)) {
            fieldError = 'Please enter a valid phone number'
          }
          break
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: validatedValue,
    }))

    setErrors((prev) => ({ ...prev, [name]: fieldError }))
  }

  // Validate all fields before submission
  const validateFields = () => {
    const newErrors = {}

    // Student Name validation
    if (!isRequired(formData.fullName)) {
      newErrors.fullName = "Student name is required."
    } else if (!isValidName(formData.fullName)) {
      newErrors.fullName = "Please enter a valid name (letters, spaces, hyphens, apostrophes only)."
    }

    // Parent Name validation
    if (!isRequired(formData.parentName)) {
      newErrors.parentName = "Parent/Guardian name is required."
    } else if (!isValidName(formData.parentName)) {
      newErrors.parentName = "Please enter a valid name (letters, spaces, hyphens, apostrophes only)."
    }

    // Email validation
    if (!isRequired(formData.email)) {
      newErrors.email = "Email address is required."
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)."
    }

    // Phone number validation
    if (!isRequired(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number is required."
    } else if (!isValidPhone(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number (e.g., +966 50 123 4567)."
    }

    // Country validation
    if (!isRequired(formData.countryOfResidence)) {
      newErrors.countryOfResidence = "Country of residence is required."
    }

    // Grade validation
    if (!isRequired(formData.studentGrade)) {
      newErrors.studentGrade = "Student's grade/level is required."
    }

    // Curriculum validation
    if (!isRequired(formData.curriculum)) {
      newErrors.curriculum = "Curriculum is required."
    }

    // Subjects validation
    if (!isRequired(formData.subjectsOfInterest)) {
      newErrors.subjectsOfInterest = "At least one subject of interest is required."
    }

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
    // Sanitize all fields
    const safeFormData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = sanitizeInput(formData[key])
      return acc
    }, {})

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    const templateParams = {
      to_name: "The Oasis Academy",
      fullName: safeFormData.fullName,
      parentName: safeFormData.parentName,
      email: safeFormData.email,
      contactNumber: safeFormData.contactNumber,
      countryOfResidence: safeFormData.countryOfResidence,
      studentGrade: safeFormData.studentGrade,
      curriculum: safeFormData.curriculum,
      subjectsOfInterest: safeFormData.subjectsOfInterest,
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
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
      .catch((error) => {
        setIsSubmitting(false)
        setFormStatus("error")
        alert("Something went wrong. Please try again.")
      })
  }

  return (
    <div
      className="w-full bg-cover bg-center py-16 bg-stone-950 bg-opacity-30 bg-blend-overlay"
      style={{ backgroundImage: "url('../../../src/assets/DemoForm/freedemo.svg')" }}
    >
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
                    {(field.id === 'fullName' || field.id === 'studentName' ||
                      field.id === 'email' ||
                      field.id === 'contactNumber' || field.id === 'contact' ||
                      field.id === 'countryOfResidence' || field.id === 'country' ||
                      field.id === 'studentGrade' || field.id === 'grade' ||
                      field.id === 'curriculum' ||
                      field.id === 'subjectsOfInterest' || field.id === 'subject') &&
                      <span style={{ color: ERROR }} className="ml-1">*</span>}
                  </label>
                  {field.type === "select" ? (
                    <div className="relative">
                      <select
                        id={field.id}
                        name={field.id}
                        required={field.required}
                        className={`w-full px-3 py-2 border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md appearance-none max-h-12`}
                        value={formData[field.id]}
                        onChange={handleChange}
                      >
                        <option value="" selected disabled>{getPlaceholder(field.id, field.label)}</option>
                        {field.options.map((option, index) => (
                          <option key={index} value={typeof option === "object" ? option.value : option}>
                            {typeof option === "object" ? option.label : option}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    </div>
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={getPlaceholder(field.id, field.label)}
                      className={`w-full px-3 py-2 border ${errors[field.id] ? `border-[${ERROR}]` : "border-gray-300"} rounded-md max-h-12`}
                      value={formData[field.id]}
                      onChange={handleChange}
                    />
                  )}
                  {errors[field.id] && <div style={{ color: ERROR }} className="text-xs mt-1">{errors[field.id]}</div>}
                </div>
              ))}

              <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white font-medium py-3 px-12 rounded-md hover:bg-green-700 transition-colors w-full sm:w-auto max-w-xs"
                  style={{ backgroundColor: PRIMARY_GREEN }}
                >
                  {isSubmitting ? freeDemo.submitButton.loadingText : freeDemo.submitButton.text}
                </button>
              </div>

              {formStatus === "success" && (
                <div className="col-span-1 md:col-span-3 text-center" style={{ color: PRIMARY_GREEN }}>
                  {freeDemo.submitButton.successMessage}
                </div>
              )}

              {formStatus === "error" && (
                <div className="col-span-1 md:col-span-3 text-center" style={{ color: ERROR }}>
                  {freeDemo.submitButton.errorMessage || "Please correct the errors above and try again."}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoForm
