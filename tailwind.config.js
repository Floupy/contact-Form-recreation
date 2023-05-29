/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./contactForm.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

