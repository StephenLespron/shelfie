import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

export default function Product(props) {
	const product = props.inventory.map((prod) => {
		return (
			<div key={[prod.id]} className='Product'>
				<div className='imgContainer'>
					<img alt={prod.name} src={prod.img} className='prodImg' />
				</div>
				<div className='descBox'>
					<div className='namePrice'>
						<h3>{prod.name}</h3>
						<p>${prod.price}</p>
					</div>
					<div className='btnBox'>
						<Link to={`/form/${prod.id}`}>
							<button>Edit</button>
						</Link>
						<button onClick={() => props.delete(prod.id)}>Delete</button>
					</div>
				</div>
			</div>
		);
	});
	return <div>{product}</div>;
}
