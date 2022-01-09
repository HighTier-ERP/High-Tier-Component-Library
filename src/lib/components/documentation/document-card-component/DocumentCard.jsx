import React from 'react';

const DocumentCard = ({ children, componentTitle, componentSummary }) => {
	return (
		<section className="pt-30px">
			<div className="card-header pb-30px">
				<p className="f-s-1_5rem f-w-700 l-s-4_5px l-h-3em">
					{componentTitle}
				</p>
				<p className="f-s-1rem">{componentSummary}</p>
			</div>
			{children}
			<div className="card-footer pt-50px flex flex-row justify-between">
				<div className="column-4 pl-0">
					<p>Version:</p>
					<p>1.0.0</p>
				</div>
				<div className="column-4 flex flex-column items-center justify-center">
					<p>Date Published:</p>
					<p>12/30/2021</p>
				</div>
				<div className="column-4 pr-0 flex flex-column items-end justify-end">
					<p>Last Update:</p>
					<p>12/30/2021</p>
				</div>
			</div>
		</section>
	);
};

export default DocumentCard;
