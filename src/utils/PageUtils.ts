const getTitle = (title?: string): string => {
  const companyName = process.env.REACT_APP_COMPANY_NAME || '';
  const appName = process.env.REACT_APP_APP_NAME || '';
  const appFullName = companyName + ' ' + appName;
  return title ? title + ' - ' + appFullName : appFullName;
};

export const PageUtils = {
  getTitle,
};
