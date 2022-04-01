import AdminSvg from '../Svg/admin.svg';
import Know from '../Svg/know.svg';
import Train from '../Svg/train.svg';
import Agent from '../Svg/agent.svg';
import Help from '../Svg/help.svg';
import Analytics from '../Svg/analytics.svg';

export const sidebarItem = [
  'Admin', 
  'Knowledge Base', 
  'Train SAM', 
  'Agent Inbox', 
  'Help Center', 
  'Analytics'
];

export const sidebarLogo = {
  'Admin': AdminSvg,
  'Knowledge Base': Know,
  'Train SAM': Train,
  'Agent Inbox': Agent,
  'Help Center': Help ,
  'Analytics': Analytics,
}

export const analyticDatas = [
  {
    id: 1,
    averageResponse: '+4.14%',
    responseTime: '1:30min',
    averageResponseTime: '30 min',
    priority: 'high', 
    data: [
      {
        "x": "Jan",
        "y": 13
      },
      {
        "x": "Feb",
        "y": 19
      },
      {
        "x": "Mar",
        "y": 30
      },
      {
        "x": "Apr",
        "y": 48
      },
      {
        "x": "May",
        "y": 19
      },
      {
        "x": "Jun",
        "y": 30
      },
      {
        "x": "Jul",
        "y": 40
      },
      {
        "x": "Aug",
        "y": 33
      },
    ]
  },
  {
    id: 2,
    averageResponse: '+4.14%',
    responseTime: '1:30min',
    averageResponseTime: '30 min',
    priority: 'low', 
    data: [
      {
        "x": "Jan",
        "y": 13
      },
      {
        "x": "Feb",
        "y": 19
      },
      {
        "x": "Mar",
        "y": 30
      },
      {
        "x": "Apr",
        "y": 48
      },
      {
        "x": "May",
        "y": 19
      },
      {
        "x": "Jun",
        "y": 30
      },
      {
        "x": "Jul",
        "y": 40
      },
      {
        "x": "Aug",
        "y": 33
      },
    ]
  },
  {
    id: 3,
    averageResponse: '+4.14%',
    responseTime: '1:30min',
    averageResponseTime: '30 min',
    priority: 'high', 
    data: [
      {
        "x": "Jan",
        "y": 13
      },
      {
        "x": "Feb",
        "y": 19
      },
      {
        "x": "Mar",
        "y": 30
      },
      {
        "x": "Apr",
        "y": 48
      },
      {
        "x": "May",
        "y": 19
      },
      {
        "x": "Jun",
        "y": 30
      },
      {
        "x": "Jul",
        "y": 40
      },
      {
        "x": "Aug",
        "y": 33
      },
    ]
  },
  {
    id: 4,
    averageResponse: '+4.14%',
    responseTime: '1:30min',
    averageResponseTime: '30 min',
    priority: 'medium', 
    data: [
      {
        "x": "Jan",
        "y": 13
      },
      {
        "x": "Feb",
        "y": 19
      },
      {
        "x": "Mar",
        "y": 30
      },
      {
        "x": "Apr",
        "y": 48
      },
      {
        "x": "May",
        "y": 19
      },
      {
        "x": "Jun",
        "y": 30
      },
      {
        "x": "Jul",
        "y": 40
      },
      {
        "x": "Aug",
        "y": 33
      },
    ]
  },
];

export const priorityType = {
  low: '#3E68FF',
  medium: '#07C9E2',
  high: '#FB6491',
};

export const sidebarSubMenu = {
  Admin: [ 'Teams', 'Knowledge Base', ],
  'Knowledge Base':  ['Raining SAM', 'Help Center'],
  'Train SAM': ['Train'],
  'Agent Inbox': ['Teams', 'Raining SAM', 'Help Center'],
  'Help Center': ['Knowledge Base'],
  Analytics: [ 'Teams', 'Knowledge Base',  'Raining SAM', 'Help Center'],
} ;

export const topMenus = [
  'Efficiency',
  'Volume',
  'Customer Satisfaction',
  'Backlog',
];