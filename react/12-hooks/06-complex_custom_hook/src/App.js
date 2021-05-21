import logo from './logo.svg';
import './App.css';
import ShoppingForm from './ShoppingForm';
import ShoppingList from './ShoppingList';
import useAppState from './hooks/useappstate';
import useAction from './hooks/useaction';
import {useEffect} from 'react';

function App() {
	
	const state = useAppState();
	const {fetchList,add,remove} = useAction();
	
	useEffect(() => {
		fetchList();
	},[]);
	
	let header = <h2>Shopping App</h2>
	if(state.loading) {
		header = <h2>Loading ...</h2>
	}
	if(state.error) {
		header = <h2>{state.error}</h2>
	}
	
	return (
		<div className="App">
			<div style={{height:100,backgroundColor:"lightblue"}}>
				{header}
			</div>
			<ShoppingForm/>
			<hr/>
			<ShoppingList/>
		</div>	
	);
}

export default App;
