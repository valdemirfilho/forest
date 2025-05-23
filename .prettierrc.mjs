/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-organize-attributes",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  attributeGroups: ["^class$", "^(id|name)$", "$DEFAULT", "^aria-", "^data-"],
  attributeSort: "ASC",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  printWidth: 80,
  bracketSameLine: false,
  tailwindFunctions: ["clsx", "tw"],
  tailwindStylesheet: "./src/styles/global.css",
};
