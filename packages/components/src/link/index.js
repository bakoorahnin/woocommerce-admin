/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import PropTypes from 'prop-types';

/**
 * WooCommerce dependencies
 */
import { getAdminLink, getHistory } from '@woocommerce/navigation';

/**
 * Use `Link` to create a link to another resource. It accepts a type to automatically
 * create wp-admin links, wc-admin links, and external links.
 */
class Link extends Component {
	// @todo Investigate further if we can use <Link /> directly.
	// With React Router 5+, <RouterLink /> cannot be used outside of the main <Router /> elements,
	// which seems to include components imported from @woocommerce/components. For now, we can use the history object directly.
	wcAdminLinkHandler( e ) {
		e.preventDefault();
		getHistory().push( e.target.closest( 'a' ).getAttribute( 'href' ) );
	}

	render() {
		const { children, href, type, ...props } = this.props;

		let path;
		if ( 'wp-admin' === type ) {
			path = getAdminLink( href );
		} else {
			path = href;
		}

		const passProps = {
			...props,
			'data-link-type': type,
		};

		if ( 'wc-admin' === type ) {
			passProps.onClick = this.wcAdminLinkHandler;
		}

		return (
			<a href={ path } { ...passProps }>
				{ children }
			</a>
		);
	}
}

Link.propTypes = {
	/**
	 * The resource to link to.
	 */
	href: PropTypes.string.isRequired,
	/**
	 * Type of link. For wp-admin and wc-admin, the correct prefix is appended.
	 */
	type: PropTypes.oneOf( [ 'wp-admin', 'wc-admin', 'external' ] ).isRequired,
};

Link.defaultProps = {
	type: 'wc-admin',
};

Link.contextTypes = {
	router: PropTypes.object,
};

export default Link;
