import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CommentTest from './components/Comment/ItemC/CommentItem1';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
	return (
		<div className="App">
			{/* Cái naỳ cần co domail online */}
			<div>Hello</div>
			<MessengerCustomerChat
				pageId="106941058270737"
				appId="2816003648662993"
				// htmlRef="<REF_STRING>"
			/>
		</div>
	);
}

export default App;
