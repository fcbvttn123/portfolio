import { useState } from "react"

function FormInput({
  labelText,
  inputType,
  inputId,
  required,
  handleInputChange,
  inputName,
  inputValue,
  labelClassName,
}) {
  return (
    <div className="flex flex-col gap-y-2 mb-3">
      <label
        htmlFor={inputId}
        className={`font-light text-lg ${labelClassName}`}
      >
        {labelText} {required && "*"}
      </label>
      <input
        id={inputId}
        type={inputType}
        onChange={handleInputChange}
        name={inputName}
        value={inputValue}
        className="bg-transparent px-2 py-3 border-[1px] hover:border-[2px] border-gray-300 lg:min-w-[300px]"
      />
    </div>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formError, setFormError] = useState(null)
  function handleChange(e) {
    const { name, value, type, checked } = e.target
    formData.email !== "" && setFormError(null)
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }
    })
  }
  function handleFormSubmit(e) {
    e.preventDefault()
    formData.email == "" &&
      setFormError("Please fill in your email to get notifications")
    console.log(formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })
  }
  return (
    <section className="text-color md:flex md:justify-between">
      <div>
        <div>
          <h1 className="font-bold text-3xl mb-1">Contact</h1>
          <p>Looking forward to hearing from you</p>
        </div>
        <div className="my-6">
          <h2 className="font-bold text-xl mb-1">Phone</h2>
          <a href="tel:+14372136600">437-213-6600</a>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-1">Email</h2>
          <a href="mailto:vutran@sheridancollege.ca">
            vutran@sheridancollege.ca
          </a>
        </div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 md:mt-0 md:grid md:grid-cols-2 md:gap-x-6"
      >
        <FormInput
          labelText="First Name"
          inputType="text"
          inputId="firstName"
          inputName="firstName"
          inputValue={formData.firstName}
          handleInputChange={handleChange}
        />
        <FormInput
          labelText="Last Name"
          inputType="text"
          inputId="lastName"
          inputName="lastName"
          inputValue={formData.lastName}
          handleInputChange={handleChange}
        />
        <FormInput
          labelText="Email"
          inputType="email"
          inputId="email"
          required={true}
          inputName="email"
          inputValue={formData.email}
          handleInputChange={handleChange}
          labelClassName={
            formError == "Please fill in your email to get notifications" &&
            "text-red-600"
          }
        />
        <FormInput
          labelText="Subject"
          inputType="text"
          inputId="subject"
          inputName="subject"
          inputValue={formData.subject}
          handleInputChange={handleChange}
        />
        <div className="flex flex-col gap-y-2 mb-3">
          <label htmlFor="message" className="font-light text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="bg-transparent px-2 py-3 border-[1px] hover:border-[2px] border-gray-300 w-full"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="relative mt-5 w-32 h-32 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 md:top-6"
        >
          Submit
        </button>
        {formError && (
          <p className="col-span-2 text-center mt-4 text-red-600">
            {formError}
          </p>
        )}
      </form>
    </section>
  )
}