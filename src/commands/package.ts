const action = () => {
  console.log('package action here');
};
export default {
  command: 'package <package-name> [scope]',
  description: '将<package-name>包处理为离线包',
  action,
};
