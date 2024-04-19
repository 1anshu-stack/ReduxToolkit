# ReduxToolkit
State Management

Old Redux:-
1:- you have to configure redux devTool extension explicitly.
2:- we need to manually handle and change the state immutably.
3:- Configuring a Redux store is too complicated.
4:- Need to create reducers and creators separately - lots of boilerplate code.
5:- Lots of code need to write to handle asynchronous requests and handling error code was also manual.
6:- Class Based Implementation.

Redux-Toolkit:-
1:- It provides automatic support for Redux DevTools Extension.
2:- It provides the support for Immer.js library which automatically changes the code immutably.
3:- Configuring a Redux store is much easier and built in support of middleware.
4:- A createSlice() function that comes in handy to replace create action and create Reducer functions with a single function.
5:- createAsyncThunk to make asynchronous requests.
6:- Functional implementation with Typescript and supports of Hooks.

