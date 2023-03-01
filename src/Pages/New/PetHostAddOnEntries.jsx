export const PetHostAddOnEntries = [
  {
    isTextInput: true,
    name: " Add On Package",
    label: "Name Of Your Add On Package",
    placeholder: "Enter Package Name",
    breakpoint: 11,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },

  {
    isSubmitButton: true,
    name: "submit_button",
    buttonTitle: "+",
    breakpoint: 1,
    customClass: "sourceButton",
  },

  {
    isTextInput: true,
    name: "What is Included",
    label: "What is Included ?",
    placeholder: "List what are included with the package",
    breakpoint: 12,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
    multiline: true,
    rows: 2,
  },
  {
    isTextInput: true,
    name: "Rate",
    label: "Rate",
    placeholder: "Enter the rate of packages",
    breakpoint: 12,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isFileUploader: true,
    name: "fileUploader",
    label: "Upload Image",
    // pattern: /^.*\.(jpg|jpeg|gif|JPG|png|PNG)$/,
    pattern: /\.(jpeg|png|gif|bmp)$/i,
    breakpoint: 3,
    customClass: "uploadImageContainer",
    validation: { required: true },
    error_message: "Upload Image",
  },
  {
    isEmptySpace: true,
    breakpoint: 10,
    name: "space",
  },
  {
    isSubmitButton: true,
    name: "submit_button",
    buttonTitle: "Save & Submit",
    breakpoint: 2,
    customClass: "sourceButton",
  },
];
