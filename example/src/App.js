import React,{useEffect,useState,useRef} from 'react'

import { useForm,useDebouncedCallback,useDebounce,useLocalStorage,usePrevious,useToggle,useFetch, useHover,useWindowSize,useClickOutside,useOnScreen,useEventListener,useInterval,useClipboard,useAsync,useFocus,useMediaQuery,useDocumentTitle,useOnlineStatus,useDarkMode,useTimeout,useWindowScroll,useGeolocation,useScript,useLockBodyScroll,useWhyDidYouUpdate,useIsMounted,useMount,useUnmount,useAnimationFrame,useUniqueId,useIdle,useScrollToElement,useMetaData} from 'react-hook-assist'
import 'react-hook-assist/dist/index.css'
const App = () => {

// animationfram
const Animateref = useRef();

useAnimationFrame((time) => {
  Animateref.current.style.transform = `translateX(${Math.sin(time / 1000) * 100}px)`;
});

// usemeta
const { setTitle, setMeta, setLink, setScript, setStyle } = useMetaData();

  useEffect(() => {
    setTitle('My App');
    setMeta('description', 'This is my awesome app!');
    setLink('icon', '/favicon.ico');
    setScript('/analytics.js');
    setStyle('custom-style', 'body { background-color: lightblue; }');
  }, []);

// unique id
const uniqueId = useUniqueId('prefix_');

// virtual list

// const containerRef = useRef(null);
// const [totalItems, setTotalItems] = useState(100);
// const itemHeight = 30; // Height of each item in pixels

// const { startIndex, endIndex, virtualList } = useVirtualList(
//   totalItems,
//   itemHeight,
//   containerRef.current ? containerRef.current.clientHeight : 0
// );


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

// useisMounter
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

// scrolltoelement
const elementRef = useRef(null);
useScrollToElement(elementRef);

// debouce
const [inputValue, setInputValue] = useState('');

const debouncedInputValue = useDebounce(inputValue, 5000);

// Use the debouncedInputValue in your callback logic, not directly
useDebouncedCallback(() => {
  // Your callback logic here
  console.log('Debounced value:', debouncedInputValue);
}, 5000, [debouncedInputValue]);

// mount
useMount(() => {
  console.log('Component mounted');
});

// unmount

const [show, setShow] = useState(true);

const Child = () => {
  useUnmount(() => {
    console.log('Component unmounted');
  });

  return <div>Unmount me</div>;
};


// localstorage
const [name, setName] = useLocalStorage('name', '');

// previous
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

useEffect(() => {
  console.log('Current:', count, 'Previous:', prevCount);
}, [count, prevCount]);

// toggle
const [isToggled, toggle] = useToggle(false);
// hover
const [hoverRef, isHovered] = useHover();

// windowsize
const { width, height } = useWindowSize();

// outclick
const [isOpen, setIsOpen] = useState(false);
const ref = useClickOutside(() => setIsOpen(false));

// idle

const isIdle = useIdle(30000);

// fetch
// const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

// if (loading) return <p>Loading...</p>;
// if (error) return <p>Error: {error.message}</p>;

// onScreeen
const [screenRef, isVisible] = useOnScreen('-100px');

// eventListner
const [key, setKey] = useState('');

useEventListener('keydown', (event) => {
  setKey(event.key);
});

// Interval
const [interVal, setInterVal] = useState(0);

  useInterval(() => {
    setInterVal(interVal + 1);
  }, 1000); // Update every second

  // Clipboard
  const [text, setText] = useState('Hello, World!');
  const [copied, copy] = useClipboard();

  // async
  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  };

  const { data, loading, error, execute } = useAsync(fetchData);

  // focus

  const [inputRef, setInputFocus] = useFocus();

  // mediaQuery
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  // documentTitle
  useDocumentTitle('My Custom Title');

  // onoffstatus
  const isOnline = useOnlineStatus();

  // darkMode
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  // timeout
  const [timeoutCount, setTimeoutCount] = useState(0);

  useTimeout(() => {
    setTimeoutCount(timeoutCount + 1);
  }, 1000); // Increment count after 1 second

  // windowScroll
  const { x, y } = useWindowScroll();

  // geolocation

  const { latitude, longitude, locationError } = useGeolocation();

  // script
  // const scriptLoaded = useScript('https://example.com/some-external-script.js');

  // lock body scroll

  // const [isLocked, setIsLocked] = useState(false);

  // if (isLocked) {
  //   useLockBodyScroll();
  // }

  return (

    <section>

{/* virtual list */}
{/* <div ref={containerRef} style={{ height: '300px', overflow: 'auto' }}>
      <div style={{ height: `${totalItems * itemHeight}px` }}>
        {virtualList.map((index) => (
          <div key={index} style={{ height: `${itemHeight}px` }}>
            Item {index}
          </div>
        ))}
      </div>
    </div> */}

{/* scroll to element */}
<div>
      <p>Content above</p>
      <div ref={elementRef}>Target Element</div>
      <p>Content below</p>
    </div>

{/*unique id  */}
<div>Unique ID: {uniqueId}</div>

{/* lock body scroll */}

{/* <div>
      <button onClick={() => setIsLocked(!isLocked)}>
        {isLocked ? 'Unlock Scroll' : 'Lock Scroll'}
      </button>
    </div> */}

{/* script */}

{/* <div>{scriptLoaded ? 'Script loaded!' : 'Loading script...'}</div> */}

{/* unmount */}
{/* <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Unmount' : 'Mount'} Child Component
      </button>
      {show && <Child />}
    </div> */}

    {/* idle */}
    <div>
      {isIdle ? (
        <p>You are idle.</p>
      ) : (
        <p>You are active.</p>
      )}
    </div>

{/* useisMounter */}
<div>{mountData ? mountData.title : 'Loading...'}</div>

{/* geoLocation */}

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

      {/* windowScroll */}

      <div>
      <p>Scroll X: {x}</p>
      <p>Scroll Y: {y}</p>
    </div>

{/* timeout */}
<div>Count: {timeoutCount}</div>

{/* darkMode */}
<div>
      <button onClick={() => toggleDarkMode(!isDarkMode)}>
        Toggle Dark Mode
      </button>
    </div>

      {/* onoffstatus */}
      <div>{isOnline ? 'Online' : 'Offline'}</div>

      {/* documentTitle */}
<div>Check the document title!</div>

{/* mediaQuery */}
<div>
      <p>{isSmallScreen ? 'Small Screen' : 'Large Screen'}</p>
    </div>
{/* focus */}

<div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
      <button onClick={setInputFocus}>Set Focus</button>
    </div>

{/* Async */}
<div>
      <button onClick={execute}>Refetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>

{/* Clipboard */}
<div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copy(text)}>Copy</button>
      {copied && <span>Copied!</span>}
    </div>

{/* Interval */}
<div>Count: {interVal}</div>

{/* animationfram */}
<div ref={Animateref}>Animating element</div>

{/* eventListner */}
<div>Last Key Pressed: {key}</div>;
{/* eventListner */}
      {/* form */}
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
    {/* form */}

    {/* onScreen */}
    <div>
      <div style={{ height: '150vh' }}>
        <div ref={screenRef} style={{ background: isVisible ? 'green' : 'red', height: '100px' }}>
          {isVisible ? 'Visible' : 'Not visible'}
        </div>
      </div>
    </div>
    {/* onScreen */}

    {/* // debouce */}
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedInputValue}</p>
    </div>

{/* localStorage */}

<div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name in local storage: {name}</p>
    </div>


{/* previous */}
<div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
    </div>

{/* toggle */}
<div>
      <button onClick={toggle}>{isToggled ? 'ON' : 'OFF'}</button>
    </div>

{/* fetch */}
{/* <div>
      <h3>Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div> */}

    {/* hover */}
    <div ref={hoverRef} style={{ padding: '20px', backgroundColor: isHovered ? 'lightblue' : 'lightgray' }}>
      {isHovered ? 'Hovered!' : 'Hover over me!'}
    </div>

{/* windowize */}
<div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>

  {/* outclick */}
    <div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      {isOpen && (
        <div ref={ref} style={{ border: '1px solid black', padding: '10px', position: 'absolute',background: '#fff' }}>
          <p>Menu</p>
          <p>Click outside to close</p>
        </div>
      )}
    </div>


    </section>

  )
}

export default App

// whydid you update

// import React, { useState } from 'react';
// import { useWhyDidYouUpdate } from './hooks';

// const WhyDidYouUpdateExample = (props) => {
//   useWhyDidYouUpdate('WhyDidYouUpdateExample', props);

//   return <div>{props.count}</div>;
// };

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <WhyDidYouUpdateExample count={count} />
//     </div>
//   );
// };

// export default ParentComponent;


