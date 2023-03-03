export const PetDetailsEntries = [
  {
    isTextInput: true,
    name: "Name of Pet",
    label: "My Pet Details",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isDropdown: true,
    name: "ads_place",
    breakpoint: 3,
    labelText: "Select Ads Place",
    placeholder: "Ads Place",
    disabled: false,
    error_message: "Select Ads Place ",
    DropdownData: [
      {
        id: 1,
        value: "Home Gallery",
      },
      {
        id: 2,
        value: "Home Video",
      },
    ],
    validation: { required: true },
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Brief description about the pet",
    breakpoint: 3,
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
    name: "firstText",
    label: "Bread",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Banner ",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Weight",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Interests",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Food Preference",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Walking Routine",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
  {
    isTextInput: true,
    name: "firstText",
    label: "Add Vaccination Card",
    breakpoint: 3,
    type: "text",
    customClass: "",
    pattern: /^[a-zA-Z ]*$/,
    validation: { required: true },
    requiredField: true,
    validation_error_message: "Text is in Invalid format",
    error_message: "First Text",
  },
 
  {
    isTextInput: true,
    name: "firstText",
    label: "Add License Details(Optional)",
    breakpoint: 3,
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
    isSubmitButton: true,
    name: "submit_button",
    buttonTitle: "Submit",
    breakpoint: 1,
    customClass: "sourceButton",
  },
];
