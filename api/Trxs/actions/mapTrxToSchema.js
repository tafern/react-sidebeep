/* eslint-disable consistent-return */

export default (data) => {
  try {
    const normalizedTrxData = data;

    return {
      _id: normalizedTrxData._id,
      name: normalizedTrxData.name,
      email: normalizedTrxData.emailAddress,
    };
  } catch (exception) {
    throw new Error(`[mapTrxToSchema] ${exception.message}`);
  }
};
