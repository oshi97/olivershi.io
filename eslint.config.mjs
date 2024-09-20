import unusedImports from "eslint-plugin-unused-imports";
import tsParser from "@typescript-eslint/parser";

export default [{
    ignores: ["**/lib", "**/public"],
}, {
    plugins: {
        "unused-imports": unusedImports,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "script",
    },

    rules: {
        "unused-imports/no-unused-imports": "warn",
    },
}];