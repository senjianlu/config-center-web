import {
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from '@ant-design/icons';

export default {
  route: {
    path: '/',
    routes: [
      {
        name: '欢迎',
        icon: <SmileFilled />,
        path: '/welcome',
        component: './Welcome',
      },
      {
        name: 'senjianlu/proxy-pool',
        icon: <CrownFilled />,
        path: '/senjianlu-proxy-pool',
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/proxy-pool/sub-page1',
            name: '一级页面',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: './Welcome',
          },
          {
            path: '/proxy-pool/sub-page2',
            name: '二级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/proxy-pool/sub-page3',
            name: '三级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        name: 'senjianlu/steam-market',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '列表页面',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      // {
      //   path: 'https://ant.design',
      //   name: 'Ant Design 官网外链',
      //   icon: <ChromeFilled />,
      // },
    ],
  },
  location: {
    pathname: '/',
  },
  appList: [
  ],
};
