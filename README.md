# react-hook-assist

> `react-hook-assist` is a collection of custom React hooks designed to simplify common use cases and enhance your React application development. From form handling and debouncing to local storage and media queries, these hooks aim to streamline your code and improve productivity.

## Installation

To install `react-hook-assist`, use npm or yarn:

```bash
npm install react-hook-assist
# or
yarn add react-hook-assist
```

## Hook Overview

- `useForm` : Manage form state and validation.
- `useMetaData` : Manage document meta tags.
- `useFetch` : Fetch data from an API.
- `useWindowScroll` : Get the current scroll position.
- `useGeolocation` : Get the user's geolocation.
- `useScript` : Load external scripts.
- `useHover` : Detect hover state of an element.
- `useWindowSize` : Get the current window size.
- `useClickOutside` : Detect clicks outside of an element.
- `useOnScreen` : Check if an element is visible on the screen.
- `useEventListener` : Add and remove event listeners.
- `useInterval` : Use setInterval in a declarative way.
- `useClipboard` : Copy text to the clipboard.
- `useAsync` : Handle asynchronous operations.
- `useFocus` : Manage focus state of an element.
- `useMediaQuery` : Manage media query state.
- `useDocumentTitle` : Set the document title.
- `useOnlineStatus` : Detect online/offline status.
- `useDarkMode` : Toggle dark mode.
- `useTimeout` : Use setTimeout in a declarative way.
- `useLockBodyScroll` : Lock the body scroll.
- `useWhyDidYouUpdate` : Debug why a component re-renders.
- `useIsMounted` : Check if a component is mounted.
- `useMount` : Run an effect when the component mounts.
- `useUnmount` : Run an effect when the component unmounts.
- `useAnimationFrame` : Use requestAnimationFrame in a declarative way.
- `useUniqueId` : Generate unique IDs.
- `useIdle` : Detect when the user is idle.
- `useScrollToElement` : Scroll to a specific element.
- `useDebounce` : Debounce a value.
- `useDebouncedCallback` : Debounce a callback function.
- `useLocalStorage` : Manage state synchronized with localStorage.
- `usePrevious` : Get the previous value of a state or prop.
- `useToggle` : Toggle between boolean states.


### useForm
`Description` : Manage form state and validation.

## Usage
```jsx
// form

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  age: '',
  gender: '', // Added for radio button
  agreeTerms: false, // Added for checkbox
  country: '', // Added for select
};

// Call the useForm hook
const { addField, handleSubmit, errors } = useForm(initialValues);

const usernameField = addField('username', { required: true, minLength: 3, maxLength: 15 });
const emailField = addField('email', { required: true, email: true });
const passwordField = addField('password', { required: true, minLength: 8 });
const confirmPasswordField = addField('confirmPassword', { required: true, match: 'password' });
const ageField = addField('age', { type: 'number', min: 18, max: 100 });
const genderField = addField('gender', { required: true }); // Radio button field
const agreeTermsField = addField('agreeTerms', { required: true }); // Checkbox field
const countryField = addField('country', { required: true }); // Select field

// Example

import { useForm } from 'react-hook-assist';

const MyForm = () => {
  const { values, handleChange, handleSubmit } = useForm({ name: '', email: '' }, () => {
    console.log(values);
  });

  return (
     <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label>Username:</label>
        <input {...usernameField} />
        {errors.username && <span>{errors.username.msg}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input {...emailField} />
        {errors.email && <span>{errors.email.msg}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...passwordField} />
        {errors.password && <span>{errors.password.msg}</span>}
        </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" {...confirmPasswordField} />
        {errors.confirmPassword && <span>{errors.confirmPassword.msg}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input type="number" {...ageField} />
        {errors.age && <span>{errors.age.msg}</span>}
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" value="male" {...genderField} /> Male
        <input type="radio" value="female" {...genderField} /> Female
        {errors.gender && <span>{errors.gender.msg}</span>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...agreeTermsField} /> I agree to the terms and conditions
        </label>
        {errors.agreeTerms && <span>{errors.agreeTerms.msg}</span>}
      </div>
      <div>
        <label>Country:</label>
        <select {...countryField}>
          <option value="">Select country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.country && <span>{errors.country.msg}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )

```

## License

MIT © [AishwaryaMurade](https://github.com/AishwaryaMurade)
