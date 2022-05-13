import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { store } from './redux-store/store';
import '../src/firebase/firebase';
import { RegistrationForm } from './components/account/RegistrationForm/RegistrationForm';
import { LoginForm } from './components/account/LoginForm/LoginForm';
import { ForgotPassword } from './components/account/ForgotPassword/ForgotPassword';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<App />} />
				<Route path="registration" element={<RegistrationForm />} />
				<Route path="authorization" element={<LoginForm />} />
				<Route path="forgot-password" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
