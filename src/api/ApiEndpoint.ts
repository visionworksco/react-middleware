export const ApiEndpoint = {
  gapi: {
    search: '/gapi/search',
    meta: '/gapi/search/meta',
  },
  statkraft: {
    enobotRequests: '/statkraft/enobotRequests',
  },
  mule: {
    enobotStrategies: '/mule/enobotStrategies',
    enobotCustomerStrategies: '/mule/enobotCustomerStrategies',
    enobotRequests: '/mule/enobotRequests',
    epexMeta: '/mule/epexMeta',
    epexAvg: '/mule/epexAvg',
    epexObContracts: '/mule/epexObContracts',
    epexPublicTradeContracts: '/mule/epexPublicTradeContracts',
  },
  info: '/info',
  settings: '/settings',
  chartWidgets: '/chartWidgets',
  accounts: '/accounts',
  ampq: {
    enobotOrders: '/ampq/enobotOrders',
    enobotStrategies: '/ampq/enobotStrategies',
    enobotCustomerStrategies: '/ampq/enobotCustomerStrategies',
  },
  heartbeats: '/heartbeats',
  notifications: '/cmdExchangeLogs',
};
