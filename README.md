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


<details>
  <summary>useForm</summary>

 Manage form state and validation.

## Usage
```jsx

// Example

import { useForm } from 'react-hook-assist';

const MyForm = () => {

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
</details>


<details>
  <summary>useMetaData</summary>

 Manage document meta tags.

## Usage
```jsx

// Example

import { useMetaData } from 'react-hook-assist';

.....

const { setTitle, setMeta, setLink, setScript, setStyle } = useMetaData();

  useEffect(() => {
    setTitle('My App');
    setMeta('description', 'This is my awesome app!');
    setLink('icon', '/favicon.ico');
    setScript('/analytics.js');
    setStyle('custom-style', 'body { background-color: lightblue; }');
  }, []);

```
</details>


<details>
  <summary>useFetch</summary>

 Fetch data from an API.

## Usage
```jsx

// Example

import { useFetch } from 'react-hook-assist';

.....

  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );

```
</details>


<details>
  <summary>useWindowScroll</summary>

 Get the current scroll position.

## Usage
```jsx

// Example

import { useWindowScroll } from 'react-hook-assist';

.....

  const { x, y } = useWindowScroll();

 return (
   <div>
      <p>Scroll X: {x}</p>
      <p>Scroll Y: {y}</p>
    </div>
  );

```
</details>

<details>
  <summary>useGeolocation</summary>

 Get the user's geolocation.

## Usage
```jsx

// Example

import { useGeolocation } from 'react-hook-assist';

.....

  const { latitude, longitude, locationError } = useGeolocation();

 return (
   <div>
      {locationError ? (
        <p>Error: {locationError}</p>
      ) : (
        <>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </>
      )}
    </div>
  );

```
</details>

<details>
  <summary>useScript</summary>

 Load external scripts.

## Usage
```jsx

// Example

import { useScript } from 'react-hook-assist';

.....

 const scriptLoaded = useScript('https://example.com/some-external-script.js');

 return (
   <div>{scriptLoaded ? 'Script loaded!' : 'Loading script...'}</div>
  );

```
</details>

<details>
  <summary>useHover</summary>

 Detect hover state of an element.

## Usage
```jsx

// Example

import { useHover } from 'react-hook-assist';

.....

const [hoverRef, isHovered] = useHover();

 return (
   <div ref={hoverRef} style={{ padding: '20px', backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}>
      {isHovered ? 'Hovered!' : 'Hover over me!'}
    </div>
  );

```
</details>


<details>
  <summary>useWindowSize</summary>

 Get the current window size.

## Usage
```jsx

// Example

import { useWindowSize } from 'react-hook-assist';

.....

const { width, height } = useWindowSize();

 return (
  <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );

```
</details>

<details>
  <summary>useClickOutside</summary>

 Detect clicks outside of an element.

## Usage
```jsx

// Example

import { useClickOutside } from 'react-hook-assist';

.....

const [isOpen, setIsOpen] = useState(false);
const ref = useClickOutside(() => setIsOpen(false));

 return (
   <div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      {isOpen && (
        <div ref={ref} style={{ border: '1px solid black', padding: '10px', position: 'absolute',background: '#fff' }}>
          <p>Menu</p>
          <p>Click outside to close</p>
        </div>
      )}
    </div>
  );

```
</details>

<details>
  <summary>useOnScreen</summary>

 Check if an element is visible on the screen.

## Usage
```jsx

// Example

import { useOnScreen } from 'react-hook-assist';

.....

const [screenRef, isVisible] = useOnScreen('-100px');

 return (
    <div>
      <div style={{ height: '150vh' }}>
        <div ref={screenRef} style={{ background: isVisible ? 'green' : 'red', height: '100px' }}>
          {isVisible ? 'Visible' : 'Not visible'}
        </div>
      </div>
    </div>
  );

```
</details>

<details>
  <summary>useEventListener</summary>

 Add and remove event listeners.

## Usage
```jsx

// Example

import { useEventListener } from 'react-hook-assist';

.....

const [key, setKey] = useState('');

useEventListener('keydown', (event) => {
  setKey(event.key);
});

 return (
   <div>Last Key Pressed: {key}</div>
  );

```
</details>

<details>
  <summary>useInterval</summary>

 Use setInterval in a declarative way.

## Usage
```jsx

// Example

import { useInterval } from 'react-hook-assist';

.....

const [interVal, setInterVal] = useState(0);

  useInterval(() => {
    setInterVal(interVal + 1);
  }, 1000); // Update every second

 return (
   <div>Count: {interVal}</div>
  );

```
</details>

<details>
  <summary>useClipboard</summary>

 Copy text to the clipboard.

## Usage
```jsx

// Example

import { useClipboard } from 'react-hook-assist';

.....

const [text, setText] = useState('Hello, World!');
const [copied, copy] = useClipboard();

  useInterval(() => {
    setInterVal(interVal + 1);
  }, 1000); // Update every second

 return (
   <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>Copy</button>
      {copied && <span>Copied!</span>}
    </div>
  );

```
</details>

<details>
  <summary>useAsync</summary>

 Handle asynchronous operations.

## Usage
```jsx

// Example

import { useAsync } from 'react-hook-assist';

.....

 const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  };

  const { data, loading, error, execute } = useAsync(fetchData);

 return (
  <div>
      <button onClick={execute}>Refetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );

```
</details>

<details>
  <summary>useFocus</summary>

 Manage focus state of an element.

## Usage
```jsx

// Example

import { useFocus } from 'react-hook-assist';

.....

const [inputRef, setInputFocus] = useFocus();

 return (
  <div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={setInputFocus}>Set Focus</button>
  </div>
  );

```
</details>

<details>
  <summary>useMediaQuery</summary>

 Manage media query state.

## Usage
```jsx

// Example

import { useMediaQuery } from 'react-hook-assist';

.....

const isSmallScreen = useMediaQuery('(max-width: 600px)');

 return (
  <div>
      <p>{isSmallScreen ? 'Small Screen' : 'Large Screen'}</p>
  </div>
  );

```
</details>

<details>
  <summary>useDocumentTitle</summary>

 Set the document title.

## Usage
```jsx

// Example

import { useDocumentTitle } from 'react-hook-assist';

.....

useDocumentTitle('My Custom Title');

```
</details>

<details>
  <summary>useOnlineStatus</summary>

 Detect online/offline status.

## Usage
```jsx

// Example

import { useOnlineStatus } from 'react-hook-assist';

.....

const isOnline = useOnlineStatus();

return (
  <div>{isOnline ? 'Online' : 'Offline'}</div>
)

```
</details>

<details>
  <summary>useDarkMode</summary>

 Toggle dark mode.

## Usage
```jsx

// Example

import { useDarkMode } from 'react-hook-assist';

.....

const [isDarkMode, toggleDarkMode] = useDarkMode();

return (
  <div>
      <button onClick={() => toggleDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
  </div>
)

```
</details>

<details>
  <summary>useTimeout</summary>

 Use setTimeout in a declarative way.

## Usage
```jsx

// Example

import { useTimeout } from 'react-hook-assist';

.....

  const [timeoutCount, setTimeoutCount] = useState(0);

  useTimeout(() => {
    setTimeoutCount(timeoutCount + 1);
  }, 1000); // Increment count after 1 second

return (
  <div>Count: {timeoutCount}</div>
)

```
</details>

<details>
  <summary>useLockBodyScroll</summary>

 Lock the body scroll.

## Usage
```jsx

// Example

import { useLockBodyScroll } from 'react-hook-assist';

.....

  const [isLocked, setIsLocked] = useState(false);

  if (isLocked) {
    useLockBodyScroll();
  }

return (
  <div>
      <button onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? 'Unlock Scroll' : 'Lock Scroll'}
      </button>
  </div>
)

```
</details>

<details>
  <summary>useIsMounted</summary>

 Check if a component is mounted.

## Usage
```jsx

// Example

import { useIsMounted } from 'react-hook-assist';

.....

  const isMounted = useIsMounted();
  const [mountData, setMountData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setMountData(data);
        }
      });
  }, [isMounted]);

return (
  <div>{mountData ? mountData.title : 'Loading...'}</div>
)

```
</details>

<details>
  <summary>useMount</summary>

 Run an effect when the component mounts.

## Usage
```jsx

// Example

import { useMount } from 'react-hook-assist';

.....

  useMount(() => {
   console.log('Component mounted');
  });


```
</details>


<details>
  <summary>useUnmount</summary>

Run an effect when the component unmounts.

## Usage
```jsx

// Example

import { useUnmount } from 'react-hook-assist';

.....

   const cleanupFunction = () => {
    console.log('Component unmounted');
// Your cleanup logic here
  };

  // This function will be called when the component is unmounted
  useUnmount(cleanupFunction);

```
</details>

<details>
  <summary>useAnimationFrame</summary>

 Use requestAnimationFrame in a declarative way.

## Usage
```jsx

// Example

import { useAnimationFrame } from 'react-hook-assist';

.....

const Animateref = useRef();

useAnimationFrame((time) => {
  Animateref.current.style.transform = `translateX(${Math.sin(time / 1000) * 100}px)`;
});

return (
 <div ref={Animateref}>Animating element</div>
)

```
</details>

<details>
  <summary>useUniqueId</summary>

 Generate unique IDs.

## Usage
```jsx

// Example

import { useUniqueId } from 'react-hook-assist';

.....

const uniqueId = useUniqueId('prefix_');

return (
   <div>Unique ID: {uniqueId}</div>
)

```
</details>

<details>
  <summary>useIdle</summary>

 Detect when the user is idle.

## Usage
```jsx

// Example

import { useIdle } from 'react-hook-assist';

.....

const isIdle = useIdle(30000);

return (
   <div>
      {isIdle ? (
        <p>You are idle.</p>
      ) : (
        <p>You are active.</p>
      )}
  </div>
)

```
</details>

<details>
  <summary>useScrollToElement</summary>

 Scroll to a specific element.

## Usage
```jsx

// Example

import { useScrollToElement } from 'react-hook-assist';

.....

const elementRef = useRef(null);
useScrollToElement(elementRef);

return (
   <div>
      <p>Content above</p>
      <div ref={elementRef}>Target Element</div>
      <p>Content below</p>
    </div>
)

```
</details>

<details>
  <summary>useDebounce , useDebouncedCallback</summary>

- `useDebounce` : Debounce a value.
- `useDebouncedCallback` : Debounce a callback function.

## Usage
```jsx

// Example

import { useDebounce , useDebouncedCallback } from 'react-hook-assist';

.....

const [inputValue, setInputValue] = useState('');
const debouncedInputValue = useDebounce(inputValue, 5000);

useDebouncedCallback(() => {
  // Your callback logic here
  console.log('Debounced value:', debouncedInputValue);
}, 5000, [debouncedInputValue]);

return (
 <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedInputValue}</p>
  </div>
)

```
</details>

<details>
  <summary>useLocalStorage</summary>

 Manage state synchronized with localStorage.

## Usage
```jsx

// Example

import { useLocalStorage } from 'react-hook-assist';

.....

const [name, setName] = useLocalStorage('name', '');

return (
  <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name in local storage: {name}</p>
  </div>
)

```
</details>

<details>
  <summary>usePrevious</summary>

 Get the previous value of a state or prop.

## Usage
```jsx

// Example

import { usePrevious } from 'react-hook-assist';

.....

const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

useEffect(() => {
  console.log('Current:', count, 'Previous:', prevCount);
}, [count, prevCount]);

return (
  <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
  </div>
)

```
</details>

<details>
  <summary>useToggle</summary>

 Toggle between boolean states.

## Usage
```jsx

// Example

import { useToggle } from 'react-hook-assist';

.....

const [isToggled, toggle] = useToggle(false);

return (
  <div>
      <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
  </div>
)

```
</details>


## License

MIT © [AishwaryaMurade](https://github.com/AishwaryaMurade)
