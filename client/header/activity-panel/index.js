/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import clickOutside from 'react-click-outside';
import { Component, Fragment, lazy, Suspense } from '@wordpress/element';
import { IconButton, NavigableMenu } from '@wordpress/components';
import { partial, uniqueId, find } from 'lodash';
import { getSetting } from '@woocommerce/wc-admin-settings';
import PagesIcon from 'gridicons/dist/pages';
import CrossIcon from 'gridicons/dist/cross-small';

/**
 * Internal dependencies
 */
import './style.scss';
import './activity-card/style.scss';
import ActivityCardPlaceholder from './activity-card/placeholder';
import ActivityHeader from './activity-header';
import ActivityPanelToggleBubble from './toggle-bubble';
import { H, Section, Spinner } from '@woocommerce/components';
import {
	getUnreadNotes,
	getUnreadOrders,
	getUnapprovedReviews,
	getUnreadStock,
} from './unread-indicators';
const InboxPanel = lazy( () =>
	import( /* webpackChunkName: "activity-panels-inbox" */ './panels/inbox' )
);
const OrdersPanel = lazy( () =>
	import( /* webpackChunkName: "activity-panels-orders" */ './panels/orders' )
);
const StockPanel = lazy( () =>
	import( /* webpackChunkName: "activity-panels-stock" */ './panels/stock' )
);
const ReviewsPanel = lazy( () =>
	import( /* webpackChunkName: "activity-panels-reviews" */ './panels/reviews' )
);

import { recordEvent } from 'lib/tracks';
import withSelect from 'wc-api/with-select';

const manageStock = getSetting( 'manageStock', 'no' );
const reviewsEnabled = getSetting( 'reviewsEnabled', 'no' );

class ActivityPanel extends Component {
	constructor() {
		super( ...arguments );
		this.togglePanel = this.togglePanel.bind( this );
		this.clearPanel = this.clearPanel.bind( this );
		this.toggleMobile = this.toggleMobile.bind( this );
		this.renderTab = this.renderTab.bind( this );
		this.state = {
			isPanelOpen: false,
			mobileOpen: false,
			currentTab: '',
			isPanelSwitching: false,
		};
	}

	togglePanel( tabName ) {
		const { isPanelOpen, currentTab } = this.state;

		// If a panel is being opened, or if an existing panel is already open and a different one is being opened, record a track.
		if ( ! isPanelOpen || tabName !== currentTab ) {
			recordEvent( 'activity_panel_open', { tab: tabName } );
		}

		this.setState( ( state ) => {
			if ( tabName === state.currentTab || state.currentTab === '' ) {
				return {
					isPanelOpen: ! state.isPanelOpen,
					currentTab: tabName,
					mobileOpen: ! state.isPanelOpen,
				};
			}
			return { currentTab: tabName, isPanelSwitching: true };
		} );
	}

	clearPanel() {
		this.setState( ( { isPanelOpen } ) =>
			isPanelOpen ? { isPanelSwitching: false } : { currentTab: '' }
		);
	}

	// On smaller screen, the panel buttons are hidden behind a toggle.
	toggleMobile() {
		const tabs = this.getTabs();
		this.setState( ( state ) => ( {
			mobileOpen: ! state.mobileOpen,
			currentTab: state.mobileOpen ? '' : tabs[ 0 ].name,
			isPanelOpen: ! state.mobileOpen,
		} ) );
	}

	handleClickOutside() {
		const { isPanelOpen, currentTab } = this.state;

		if ( isPanelOpen ) {
			this.togglePanel( currentTab );
		}
	}

	// @todo Pull in dynamic unread status/count
	getTabs() {
		const {
			hasUnreadNotes,
			hasUnreadOrders,
			hasUnapprovedReviews,
			hasUnreadStock,
		} = this.props;
		return [
			{
				name: 'inbox',
				title: __( 'Inbox', 'woocommerce-admin' ),
				icon: <i className="material-icons-outlined">inbox</i>,
				unread: hasUnreadNotes,
				placeholder: (
					<ActivityCardPlaceholder
						className="woocommerce-inbox-activity-card"
						hasAction
						hasDate
						lines={ 2 }
					/>
				),
			},
			{
				name: 'orders',
				title: __( 'Orders', 'woocommerce-admin' ),
				icon: <PagesIcon />,
				unread: hasUnreadOrders,
				placeholder: (
					<ActivityCardPlaceholder
						className="woocommerce-order-activity-card"
						hasAction
						hasDate
						lines={ 2 }
					/>
				),
			},
			manageStock === 'yes'
				? {
						name: 'stock',
						title: __( 'Stock', 'woocommerce-admin' ),
						icon: (
							<i className="material-icons-outlined">widgets</i>
						),
						unread: hasUnreadStock,
						placeholder: (
							<ActivityCardPlaceholder
								className="woocommerce-stock-activity-card"
								hasAction
								lines={ 1 }
							/>
						),
				  }
				: null,
			reviewsEnabled === 'yes'
				? {
						name: 'reviews',
						title: __( 'Reviews', 'woocommerce-admin' ),
						icon: (
							<i className="material-icons-outlined">
								star_border
							</i>
						),
						unread: hasUnapprovedReviews,
						placeholder: (
							<ActivityCardPlaceholder
								className="woocommerce-review-activity-card"
								hasAction
								hasDate
								lines={ 2 }
							/>
						),
				  }
				: null,
		].filter( Boolean );
	}

	getPanelFallback( tab ) {
		const { title, placeholder } = tab;

		return (
			<Fragment>
				<ActivityHeader title={ title } />
				<Section>
					{ placeholder || <Spinner /> }
				</Section>
			</Fragment>
		);
	}

	getPanelContent( tab ) {
		switch ( tab ) {
			case 'inbox':
				return <InboxPanel />;
			case 'orders':
				const { hasUnreadOrders } = this.props;
				return <OrdersPanel hasActionableOrders={ hasUnreadOrders } />;
			case 'stock':
				return <StockPanel />;
			case 'reviews':
				const { hasUnapprovedReviews } = this.props;
				return (
					<ReviewsPanel
						hasUnapprovedReviews={ hasUnapprovedReviews }
					/>
				);
			default:
				return null;
		}
	}

	renderPanel() {
		const { isPanelOpen, currentTab, isPanelSwitching } = this.state;

		const tab = find( this.getTabs(), { name: currentTab } );
		if ( ! tab ) {
			return (
				<div className="woocommerce-layout__activity-panel-wrapper" />
			);
		}

		const classNames = classnames(
			'woocommerce-layout__activity-panel-wrapper',
			{
				'is-open': isPanelOpen,
				'is-switching': isPanelSwitching,
			}
		);

		return (
			<div
				className={ classNames }
				tabIndex={ 0 }
				role="tabpanel"
				aria-label={ tab.title }
				onTransitionEnd={ this.clearPanel }
				onAnimationEnd={ this.clearPanel }
			>
				<div
					className="woocommerce-layout__activity-panel-content"
					key={ 'activity-panel-' + currentTab }
					id={ 'activity-panel-' + currentTab }
				>
					<Suspense fallback={ this.getPanelFallback( tab ) }>
						{ this.getPanelContent( currentTab ) }
					</Suspense>
				</div>
			</div>
		);
	}

	renderTab( tab, i ) {
		const { currentTab, isPanelOpen } = this.state;
		const className = classnames(
			'woocommerce-layout__activity-panel-tab',
			{
				'is-active': isPanelOpen && tab.name === currentTab,
				'has-unread': tab.unread,
			}
		);

		const selected = tab.name === currentTab;
		let tabIndex = -1;

		// Only make this item tabbable if it is the currently selected item, or the panel is closed and the item is the first item.
		if ( selected || ( ! isPanelOpen && i === 0 ) ) {
			tabIndex = null;
		}

		return (
			<IconButton
				role="tab"
				className={ className }
				tabIndex={ tabIndex }
				aria-selected={ selected }
				aria-controls={ 'activity-panel-' + tab.name }
				key={ 'activity-panel-tab-' + tab.name }
				id={ 'activity-panel-tab-' + tab.name }
				onClick={ partial( this.togglePanel, tab.name ) }
				icon={ tab.icon }
			>
				{ tab.title }{ ' ' }
				{ tab.unread && (
					<span className="screen-reader-text">
						{ __( 'unread activity', 'woocommerce-admin' ) }
					</span>
				) }
			</IconButton>
		);
	}

	render() {
		const tabs = this.getTabs();
		const { mobileOpen } = this.state;
		const headerId = uniqueId( 'activity-panel-header_' );
		const panelClasses = classnames( 'woocommerce-layout__activity-panel', {
			'is-mobile-open': this.state.mobileOpen,
		} );

		const hasUnread = tabs.some( ( tab ) => tab.unread );
		const viewLabel = hasUnread
			? __(
					'View Activity Panel, you have unread activity',
					'woocommerce-admin'
			  )
			: __( 'View Activity Panel', 'woocommerce-admin' );

		return (
			<div>
				<H id={ headerId } className="screen-reader-text">
					{ __( 'Store Activity', 'woocommerce-admin' ) }
				</H>
				<Section
					component="aside"
					id="woocommerce-activity-panel"
					aria-labelledby={ headerId }
				>
					<IconButton
						onClick={ this.toggleMobile }
						icon={
							mobileOpen ? (
								<CrossIcon />
							) : (
								<ActivityPanelToggleBubble
									hasUnread={ hasUnread }
								/>
							)
						}
						label={
							mobileOpen
								? __(
										'Close Activity Panel',
										'woocommerce-admin'
								  )
								: viewLabel
						}
						aria-expanded={ mobileOpen }
						tooltip={ false }
						className="woocommerce-layout__activity-panel-mobile-toggle"
					/>
					<div className={ panelClasses }>
						<NavigableMenu
							role="tablist"
							orientation="horizontal"
							className="woocommerce-layout__activity-panel-tabs"
						>
							{ tabs && tabs.map( this.renderTab ) }
						</NavigableMenu>
						{ this.renderPanel() }
					</div>
				</Section>
			</div>
		);
	}
}

export default withSelect( ( select ) => {
	const hasUnreadNotes = getUnreadNotes( select );
	const hasUnreadOrders = getUnreadOrders( select );
	const hasUnreadStock = getUnreadStock();
	const hasUnapprovedReviews = getUnapprovedReviews( select );

	return {
		hasUnreadNotes,
		hasUnreadOrders,
		hasUnreadStock,
		hasUnapprovedReviews,
	};
} )( clickOutside( ActivityPanel ) );
