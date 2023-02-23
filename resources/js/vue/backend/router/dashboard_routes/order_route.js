import Layout from '../../views/order/Layout'
import AllOrder from '../../views/order/All'
import CreateOrder from '../../views/order/Create'
import EditOrder from '../../views/order/Edit'
import DetailsOrder from '../../views/order/Details'
import ImportOrder from '../../views/order/Import'

export default {
    path: 'order',
    component: Layout,
    props: {
        role_permissions: ['super_admin','admin'],
        layout_title: 'Order Management',
    },
    children: [{
            path: '',
            name: 'AllOrder',
            component: AllOrder,
        },
        {
            path: 'import',
            name: 'ImportOrder',
            component: ImportOrder,
        },
        {
            path: 'create',
            name: 'CreateOrder',
            component: CreateOrder,
        },
        {
            path: 'edit/:id',
            name: 'EditOrder',
            component: EditOrder,
        },
        {
            path: 'details/:id',
            name: 'DetailsOrder',
            component: DetailsOrder,
        },
    ],

};
