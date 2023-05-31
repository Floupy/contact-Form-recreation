/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./contact-form.html", "./contact-form-submited.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

