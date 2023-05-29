/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./contact-form.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

