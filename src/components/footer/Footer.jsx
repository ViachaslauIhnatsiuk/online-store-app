import React from 'react';
import s from './Footer.module.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.back} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</div>
			<div className={s.info}>
				<div className={s.info__wrapper}>
					<div className={s.info__column}>
						<h3 className={s.info__title}>Get to Know Us</h3>
						<ul className={s.info__list}>
							<li className={s.info__link}>Careers</li>
							<li className={s.info__link}>Blog</li>
							<li className={s.info__link}>About Marathon Store</li>
							<li className={s.info__link}>Investor Relations</li>
							<li className={s.info__link}>Marathon Store Devices</li>
							<li className={s.info__link}>Marathon Store Science</li>
						</ul>
					</div>
					<div className={s.info__column}>
						<h3 className={s.info__title}>Make Money with Us</h3>
						<ul className={s.info__list}>
							<li className={s.info__link}>Sell products on Marathon Store</li>
							<li className={s.info__link}>Sell on Marathon Store Business</li>
							<li className={s.info__link}>Sell apps on Marathon Store</li>
							<li className={s.info__link}>Become an Affiliate</li>
							<li className={s.info__link}>Advertise Your Products</li>
							<li className={s.info__link}>Self-Publish with Us</li>
							<li className={s.info__link}>Host an Marathon Store Hub</li>
						</ul>
					</div>
					<div className={s.info__column}>
						<h3 className={s.info__title}>Marathon Store Payment Products</h3>
						<ul className={s.info__list}>
							<li className={s.info__link}>Marathon Store Business Card</li>
							<li className={s.info__link}>Shop with Points</li>
							<li className={s.info__link}>Reload Your Balance</li>
							<li className={s.info__link}>Marathon Store Currency Converter</li>
						</ul>
					</div>
					<div className={s.info__column}>
						<h3 className={s.info__title}>Let Us Help You</h3>
						<ul className={s.info__list}>
							<li className={s.info__link}>Your Account</li>
							<li className={s.info__link}>Your Orders</li>
							<li className={s.info__link}>Shipping Rates & Policies</li>
							<li className={s.info__link}>Returns & Replacements</li>
							<li className={s.info__link}>Manage Your Content and Devices</li>
							<li className={s.info__link}>Marathon Store Assistant</li>
							<li className={s.info__link}>Help</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={s.about}>
				<img className={s.logo} src={logo} alt="logo" />
				<div className={s.copyright}>© 2022, Marathon Store, Inc.</div>
			</div>
		</div>
	)
}

export { Footer };