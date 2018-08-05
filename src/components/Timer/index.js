import React, {Component} from "react";
import "./Timer.css";

export default class Timer extends Component {
	state = {
		tasks: [],
		name:  ""
	};

	addTask = (e) => {
		e.preventDefault();
		const {name} = this.state;
		if (name) {
			const newTask = {
				name,
				time: 0
			};
			this.setState(prevState => ({
				tasks: [...prevState.tasks, newTask]
			}));
		}
	};


	removeTask = (e) => {
		const copy = [...this.state.tasks]; // make a separate copy of the array
		copy.splice(e.target.value, 1);
		this.setState({tasks: copy});
	};

	changeName = (e) => this.setState({
		name: e.target.value
	});

	render () {
		return (
			<div className="timer">
				<form className="block">
					<button type="submit" className="btn red-btn" onClick={this.addTask}>
						<i className="fa fa-plus"/>
					</button>
					<input className="task-input-name" placeholder="Введите название задачи" name="name" onChange={this.changeName}/>
				</form>
				{
					this.state.tasks.map((e, i) => (
						<div className="block">
							<div className="name">{e.name}</div>
							<div className="time">{e.time}</div>
							<button className="btn">
								<i className="fa fa-play"/>
							</button>
							<button className="btn red-btn" value={i} onClick={this.removeTask}>
								<i className="fa fa-times"/>
							</button>
						</div>
					))
				}
			</div>
		);
	}
}
