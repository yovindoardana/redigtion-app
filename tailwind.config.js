import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php", "./storage/framework/views/*.php", "./resources/views/**/*.blade.php", "./resources/js/**/*.jsx"],

  theme: {
    extend: {
      colors: {
          "primary": "#1C58DD",
          "primary-dark": "#131943",
          "primary-light": "#ffffff",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [forms, require("daisyui")],
};
