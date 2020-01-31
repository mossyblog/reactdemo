import uuid from 'uuid/v1';
import moment from 'moment';

export default {
  notifications: [
    {
      id: uuid(),
      title: 'New order has been received',
      type: 'order',
      created_at: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      title: 'New customer is registered',
      type: 'user',
      created_at: moment().subtract(1, 'day')
    },
    {
      id: uuid(),
      title: 'Project has been approved',
      type: 'project',
      created_at: moment().subtract(3, 'days')
    },
    {
      id: uuid(),
      title: 'New feature has been added',
      type: 'feature',
      created_at: moment().subtract(7, 'days')
    }
  ]
};
