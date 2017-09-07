import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/pages/admin'
import sign from '@/pages/login'
import ii from '@/pages/ii'
import forget from '@/pages/forget'
import table from '@/components/content/table'
import table1 from '@/components/content/table1'
import table2 from '@/components/content/table2'
import table3 from '@/components/content/table3'
import table4 from '@/components/content/table4'
import table5 from '@/components/content/table5'
import table6 from '@/components/content/table6'
import table7 from '@/components/content/table7'
import table8 from '@/components/content/table8'
import table9 from '@/components/content/table9'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: sign
  },
  {
    path: '/admin',
    component: admin,
    children: [
      {
        path: '/',
        component: table
      },
      {
        path: 'types',
        component: table1
      },
      {
        path: 'types2',
        component: table2
      },
      {
        path: 'types3',
        component: table3
      },
      {
        path: 'types4',
        component: table4
      },
      {
        path: 'types5',
        component: table5
      },
      {
        path: 'types6',
        component: table6
      },
      {
        path: 'types7',
        component: table7
      },
      {
        path: 'types8',
        component: table8
      },
      {
        path: 'types9',
        component: table9
      }
    ]
  },
  {
    path: '/ii',
    component: ii
  },
  {
    path: '/forget',
    component: forget
  }
]

export default routes

