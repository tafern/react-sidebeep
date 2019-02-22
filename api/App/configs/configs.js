const configs = {
  trxs: {
    type: {
      fix: 'FIX',
      flex: 'FLEX',
    },
    status: {
      open: 'OPEN',
      wait_approval: 'WAIT_APPROVAL',
      approved: 'APPROVED',
      cancelled: 'CANCELLED',
      rejected: 'REJECTED',
    },
  },
};

module.exports = {
  configs,
};
