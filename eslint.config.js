export default [
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "testing-library/no-render-in-lifecycle": [
        "error",
        { allowTestingFrameworkSetupHook: "beforeEach" },
      ],
    },
  },
];
