function FormInput({ labelText, inputType, inputId, required }) {
  return (
    <div className="flex flex-col gap-y-2 mb-3">
      <label htmlFor={inputId} className="font-light text-lg">
        {labelText} {required && "*"}
      </label>
      <input
        id={inputId}
        type={inputType}
        className="bg-transparent px-2 py-3 border-[1px] hover:border-[2px] border-gray-300"
      />
    </div>
  )
}

export function Contact() {
  return (
    <section className="text-color">
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
        <a href="mailto:vutran@sheridancollege.ca">vutran@sheridancollege.ca</a>
      </div>
      <form className="mt-10">
        <FormInput
          labelText="First Name"
          inputType="text"
          inputId="firstName"
        />
        <FormInput labelText="Last Name" inputType="text" inputId="lastName" />
        <FormInput
          labelText="Email"
          inputType="email"
          inputId="email"
          required={true}
        />
        <FormInput labelText="Subject" inputType="text" inputId="subject" />
        <div className="flex flex-col gap-y-2 mb-3">
          <label htmlFor="message" className="font-light text-lg">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="bg-transparent px-2 py-3 border-[1px] hover:border-[2px] border-gray-300 w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-5 w-32 h-32 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
