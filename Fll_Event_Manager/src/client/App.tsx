import * as React from 'react';
import { useState, useEffect } from 'react';

//All this page needs to do is rederict to the other pages

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	//	const [greeting, setGreeting] = useState<string>('');
	const [showProjected, setShowProjected] = React.useState(false)

	useEffect(() => {
		/*
		async function getGreeting() {
			try {
				const res = await fetch('/api/hello');
				const greeting = await res.json();
				setGreeting(greeting);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();

		*/
	}, []);

	//This is pretty quick now
	function OpenMain() {
		async function getGreeting() {
			try {
				const res = fetch('/api/test');
				await res.catch;
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}
	function OpenPit() {

	}
	function OpenManager() {
		
	}


	//All of the html stuff goes here
	return (
		<main className="container-fluid">
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid" >
					<a className="navbar-brand">Fll Event Manager</a>
				</div>
			</nav>

			<div className="d-grid gap-2">
				<button className="btn btn-primary" type="button" onClick={OpenMain}>Open Main Monitor</button>
				<button className="btn btn-primary" type="button" onClick={OpenPit}>Open Pit Monitor</button>
				<button className="btn btn-primary" type="button" onClick={OpenManager}>Open Event Manager</button>
			</div>

			<div className="text-center">
				Centered element
			</div>
		</main>
	);







};

interface AppProps { }

export default App;
