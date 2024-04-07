import React, { FunctionComponent, HTMLProps } from 'react';

import LogoImg from '@assets/logos/Razorpay-wm-w.png';
import SideBarMenu from '@common/components/molecules/SidebarMenu.js';
import { ReactComponent as SvgCreditCard } from '@assets/svgs/system/credit-card.svg';
import { ReactComponent as SvgCustomers } from '@assets/svgs/product/customers.svg';
import { ReactComponent as SvgHome } from '@assets/svgs/product/dashboard.svg';
import { ReactComponent as SvgInvoices } from '@assets/svgs/product/invoices.svg';
import { ReactComponent as SvgMyAccount } from '@assets/svgs/product/my-account.svg';
import { ReactComponent as SvgOffers } from '@assets/svgs/product/offers.svg';
import { ReactComponent as SvgPaymentButtons } from '@assets/svgs/product/payment-buttons.svg';
import { ReactComponent as SvgPaymentLinks } from '@assets/svgs/product/payment-links.svg';
import { ReactComponent as SvgPaymentPages } from '@assets/svgs/product/payment-pages.svg';
import { ReactComponent as SvgReports } from '@assets/svgs/product/reports.svg';
import { ReactComponent as SvgRoutes } from '@assets/svgs/product/routes.svg';
import { ReactComponent as SvgSettelements } from '@assets/svgs/product/settlements.svg';
import { ReactComponent as SvgSettings } from '@assets/svgs/product/settings.svg';
import { ReactComponent as SvgSmartCollect } from '@assets/svgs/product/smart-collect.svg';
import { ReactComponent as SvgSubscriptions } from '@assets/svgs/product/subscriptions.svg';
import { ReactComponent as SvgTransactions } from '@assets/svgs/product/transactions.svg';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

function SideBar() {
  const allMenus = [
    [
      { label: 'home', icon: <SvgHome /> },
      { label: 'Transactions', icon: <SvgTransactions /> },
      { label: 'Settlements', icon: <SvgSettelements /> },
    ],
    [
      { label: 'Invoices', icon: <SvgInvoices /> },
      { label: 'Payment Links', icon: <SvgPaymentLinks /> },
      { label: 'Payment Pages', icon: <SvgPaymentPages /> },
      { label: 'Payment Buttons', icon: <SvgPaymentButtons /> },
      { label: 'Route', icon: <SvgRoutes /> },
      { label: 'Subscriptions', icon: <SvgSubscriptions /> },
      { label: 'Smart Collect', icon: <SvgSmartCollect /> },
      { label: 'Customers', icon: <SvgCustomers /> },
      { label: 'Offers', icon: <SvgOffers /> },
      { label: 'Cash Advance', icon: <SvgCreditCard /> },
    ],
    [
      { label: 'Reports', icon: <SvgReports /> },
      { label: 'My Account', icon: <SvgMyAccount /> },
      { label: 'Settings', icon: <SvgSettings /> },
    ],
  ];
  return (
    <div className={cx('sidebar-container')}>
      <div className={cx('menu-container')}>
        <div className={cx('logo-container')}>
          <img src={LogoImg} />
        </div>
        {allMenus?.map((menus) => (
          <div className={cx('menu-section')}>
            {menus?.map((menu) => (
              <SideBarMenu label={menu?.label} iconRender={menu?.icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
