import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ list, deleteItem }) => (
	<ul>
		{list.map((item, index) => (
			<li key={index}>
				{item.text}
				<button className="delete-item" onClick={() => deleteItem(item.id)}>X</button>
			</li>
		))}
	</ul>
);

TodoList.propTypes = {
	list: PropTypes.array,
	deleteItem: PropTypes.func
}

export default TodoList;
