import * as React from 'react';
import { useState, useEffect } from 'react';
import Manager from '../components/Manager';
import PitView from '../components/PitView';
import ProjectedView from '../components/ProjectedView';

//All this page needs to do is rederict to the other pages

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	//	const [greeting, setGreeting] = useState<string>('');
	const [showButtons, setShowButtons] = React.useState(true);
	const [showMain, setShowMain] = React.useState(false);
	const [showPit, setShowPit] = React.useState(false);
	const [showManager, setShowManager] = React.useState(false);

	function ShowScreen(screen: string){
		ClearScreen();
		if(screen === "buttons"){
			setShowButtons(true);
		}else if(screen === "main"){
			setShowMain(true);
		}else if(screen === "manager"){
			setShowManager(true);
		}else if(screen ==="pit"){
			setShowPit(true);
		}else{

		}

	}
	
	function ClearScreen(){
		setShowMain(false);
		setShowManager(false);
		setShowPit(false);
		setShowButtons(false);
	}

	function callTest() {
		async function getTest() {
			try {
				const res = fetch('/api/test');
				await res.catch;
			} catch (error) {
				console.log(error);
			}
		}
		getTest();
	}


	//All of the html stuff goes here
	return (
		<main className="container-fluid">
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container-fluid" >
					<a className="navbar-brand" onClick={() => ShowScreen("buttons")}>Fll Event Manager</a>
					<span className="navbar-text">
						Dev Build 0.0.1
					</span>
				</div>
			</nav>


			{showButtons ?
				<div className="d-grid gap-2">
					<button className="btn btn-primary" type="button" onClick={() => ShowScreen("main")}>Open Main Monitor</button>
					<button className="btn btn-primary" type="button" onClick={() => ShowScreen("pit")}>Open Pit Monitor</button>
					<button className="btn btn-primary" type="button" onClick={() => ShowScreen("manager")}>Open Event Manager</button>
				</div>
				: null}


			{showMain ?
				<ProjectedView></ProjectedView>
				: null}

			{showPit ?
				<PitView></PitView>
				: null}

			{showManager ?
				<Manager></Manager>
				: null}


			<div className="text-center fixed-bottom">
				Hi :)
			</div>
		</main>
	);







};

interface AppProps { }

export default App;
