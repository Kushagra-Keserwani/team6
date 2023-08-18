import React from 'react'
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome></AiIcons.AiFillHome>,
        cName: 'nav-text'

    },
    {
        title: 'Add Customer',
        path: '/addCustomer',
        icon: <AiIcons.AiOutlineUserAdd></AiIcons.AiOutlineUserAdd>,
        cName: 'nav-text'

    }, {
        title: 'View Customer',
        path: '/viewCustomer',
        icon: <AiIcons.AiOutlineFileSearch />,
        cName: 'nav-text'

    }, 
    {
        title: 'Add Transactions',
        path: '/addTransactions',
        icon: <AiIcons.AiOutlineDollar />,
        cName: 'nav-text'

    }, 
    {
        title: 'Transactions',
        path: '/transactions',
        icon: <AiIcons.AiOutlineDollar />,
        cName: 'nav-text'

    }, {
        title: 'Edit Customer',
        path: '/editCustomer',
        icon: <AiIcons.AiFillCreditCard />,
        cName: 'nav-text'

    }, {
        title: 'Logout',
        path:'/login',
        icon: <AiIcons.AiOutlineLogout></AiIcons.AiOutlineLogout>,
        cName:'nav-text'
    }
]