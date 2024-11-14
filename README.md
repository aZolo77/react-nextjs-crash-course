# React & Next.js Crash Course

This repository contains the code and projects developed during studying the React and Next.js video course.

## Contents

- [About the course](#about-the-course)
- [Projects](#projects)

## About the course

A practice-heavy approach to master React by building polished apps, backed up by diagrams, theory, and looks under the hood of React.

## Projects

1. **Project 1: [Pure React](./1-pure-react/)**

   - Description: It's not even a project, just an HTML file with dependencies for React

2. **Project 2: [Pizza Menu](./2-pizza-menu/)**

   - Description: A simple React application to understand the basics.
   - Topics Covered: Components, State, Props, JSX.

3. **Project 3: [Steps Component](./3-steps/)**

   - Description: Simple Stepper.
   - Topics Covered: State, Events, Children.

4. **Project 4: [Travel List](./4-travel-list/)**

   - Description: List of things to take on a trip.
   - Topics Covered: Handling Forms, Updating State, Child-to-Parent Communication, Derived State, Moving components into Separate Files.

5. **Project 5: [Eat-'N-Split](./5-eat-n-split/)**

   - Description: A simple App for spliting a Bill with your friends.
   - Topics Covered: Practicing the covered concepts.

6. **Project 6: [usePopcorn](./6-use-popcorn/)**

   - Description: a web App to search for Movies and add them to favourites.
   - Topics Covered: Prop Drilling, Component Composition, Props as an API, PropTypes, useEffect Hook, async code in useEffect, handling Errors, Dependency Array, changing the Page Title, Cleanup Function, Race Condition, Browser API: AbortController, Key Press Event, Callback Function in useState, useRef Hook, [Custom Hooks](./6-use-popcorn/src/useMovies.js)

7. **Project 7: [How React Works](./7-how-react-works/)**

   - Description: Project was made to understand how React works behind the Scenes
   - Topics Covered: How rendering Works, Fiber, How Diffing works, Resetting the State with the Key Prop, State update Batching

8. **Project 8: [Class Based Components](./8-classy-weather/)**

   - Description: Project was made to understand how class based Components work: shows weather in user's location for a week
   - Topics Covered: [render method and this.state](./8-classy-weather/src/Counter.js), [this.props and async Functions](./8-classy-weather/src/App.js), Class Fields feature, Child to Parent Communication, Lifecycle Methods

9. **Project 9: [Quiz: useReducer](./9-react-quiz/)**

   - Description: React Quiz
   - Topics Covered: useReducer Hook, json-server to emulate API call, updating the State in the Reducer Function, dispatch function, Timer feature, using Context

10. **Project 10: [WorldWise SPA](./10-worldwise/)**

    - Description: WorldWise SPA Project
    - Topics Covered: React Router, NavLink | Link, css modules, global css function, nested Routes (Outlet component), Index Route, [Params String with useParams](./10-worldwise/src/components/City.jsx) | [Query String with useSearchParams](./10-worldwise/src/components/Map.jsx), [programmatic Navigation with useNavigate Hook](./10-worldwise/src/components/Form.jsx), [redirecting with Navigate component](./10-worldwise/src/App.jsx), [useMap && useMapEvents hooks](./10-worldwise/src/components/Map.jsx), [geolocation hook](./10-worldwise//src/hooks/useGeolocation.js), [Date Picker](./10-worldwise/src/components/Form.jsx), createing and deleting an Item with a Server API, [Context + useReducer](./10-worldwise//src/contexts/CitiesContext.jsx), [login | logout](./10-worldwise/src/contexts/FakeAuthContext.jsx), Fake Authentication, [prevent Infinite Loop with useCallback](./10-worldwise/src/contexts/CitiesContext.jsx), [Code splitting with lazy loading and Suspense component](./10-worldwise/src/App.jsx)

11. **Project 11: [Atomic Blog](./11-atomic-blog/)**

    - Description: Just an App with Posts
    - Topics Covered: [Context API](./11-atomic-blog/src/App-v1.js), [Context Provider Component](./11-atomic-blog/src/PostContext.js), [Custom useContext Hook](./11-atomic-blog/src/PostContext.js), [optimization Trick with Children](./11-atomic-blog/src/Test.js), [memoization component with memo Function](./11-atomic-blog/src/App-memo.js), [useMemo and useCallback hooks](./11-atomic-blog/src/App-memo.js), [optimizing Context with useMemo hook](./11-atomic-blog/src/PostContext.js)

12. **Project 12: [Workout Timer](./12-workout-timer/)**

    - Description: A Calculator for your Workouts
    - Topics Covered: Memoization, [State based on Other State updates](./12-workout-timer/src/Calculator.js)

13. **Project 13: [Redux Introduction](./13-redux-intro/)**

    - Description: Redux Basics
    - Topics Covered: [Action Creators | Reducers | Initial State](./13-redux-intro/src/store-v1.js), [Conventional File Structure](./13-redux-intro/src/store-v1.js), [React-Redux Library](./13-redux-intro/src/index.js), [useSelector hook to get data from the Store](./13-redux-intro/src/features/customers/Customer.js), [useDispatch hook to dispatch Actions](./13-redux-intro/src/features/customers/CreateCustomer.js), [Legacy way of connecting components with Redux](./13-redux-intro/src/features/accounts/BalanceDisplay.js), [thunk middleware](./13-redux-intro/src/store-v2.js), [async code for thunk](./13-redux-intro/src/features/accounts/accountSlice.js), [redux toolkit configureStore method](./13-redux-intro/src/store.js), [createSlice | prepare method](./13-redux-intro/src/features/accounts/accountSlice.js)

14. **Project 14: [Fast Pizza Advanced App](./14-fast-react-pizza/)**

    - Description: Advanced version of React Pizza using React Router with Data Loading
    - Topics Covered: setting up a professional File Structure, [new createBrowserRouter function from react-router-dom@6](./14-fast-react-pizza/src/App.jsx), [App Layout with an react-router-dom Outlet Component](./14-fast-react-pizza//src/ui/AppLayout.jsx), [loading data with `render as you fetch` method using loader function and useLoaderData Hook](./14-fast-react-pizza/src/features/menu/Menu.jsx), [Global Loader with useNavigation Hook](./14-fast-react-pizza/src/ui/AppLayout.jsx), [Error Element rendering](./14-fast-react-pizza/src/ui/Error.jsx), [POST request and action creation | redirect from action with react-router-dom | useActionData Hook](./14-fast-react-pizza/src/features/order/CreateOrder.jsx), [tailwind setup](./14-fast-react-pizza/tailwind.config.js), Taiwind CSS: text | box-model | colors | layout | responsive design | element states | [reusing styles with @apply](./14-fast-react-pizza/src/index.css) | [positioning](./14-fast-react-pizza/src/ui/Loader.jsx) | [customization](./14-fast-react-pizza/tailwind.config.js), [caseReducers](./14-fast-react-pizza/src/features/cart/cartSlice.js), [createAsyncThunk and extraReducers](./14-fast-react-pizza/src/features/user/userSlice.js), [useFetcher Hook to Load Data from another Route](./14-fast-react-pizza/src/features/order/Order.jsx), [revalidate the page with fetcher.Form](./14-fast-react-pizza/src/features/order/UpdateOrder.jsx)

15. **Project 15: [The Wild Oasis](./15-the-wild-oasis/)**

    - Description: An internal App for the Hotel employees
    - Topics Covered:
      - styled Components
      - [createGlobalStyle function](./15-the-wild-oasis/src/styles/GlobalStyles.js)
      - [props and `css` function](./15-the-wild-oasis/src/ui/Heading.jsx)
      - [default props](./15-the-wild-oasis/src/ui/Row.jsx)
      - [setting up Routes](./15-the-wild-oasis/src/App.jsx)
      - [styling third-party components with `styled`(component) function](./15-the-wild-oasis/src/ui/MainNav.jsx)
      - [Supabase connect](./15-the-wild-oasis/src/services/supabase.js)
      - [`React Query` setup](./15-the-wild-oasis/src/App.jsx)
      - [loading Data with `useQuery` hook](./15-the-wild-oasis/src/features/cabins/CabinTable.jsx)
      - [`useMutation` hook to delete an Item](./15-the-wild-oasis/src/features/cabins/useDeleteCabin.js)
      - [`useQueryClient` Hook to refetch the Data](./15-the-wild-oasis/src/features/cabins/CabinRow.jsx)
      - [a library for displaying Toasts](./15-the-wild-oasis/src/App.jsx)
      - [`useForm` Hook for managing Forms](./15-the-wild-oasis/src/features/cabins/CreateCabinForm.jsx)
      - [setting the type in styled component](./15-the-wild-oasis/src/ui/FileInput.jsx)
      - custom hooks for reading / creating / editing / deleting Data
