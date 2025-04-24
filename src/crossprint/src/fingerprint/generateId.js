import { collectFingerprintData } from './collectData.js';
import { hashData } from './hashData.js';

const generateDeviceId = async () => {
  const data = collectFingerprintData();
  const dataString = JSON.stringify(data);
  const hashedId = await hashData(dataString);
  return hashedId;
};

export default generateDeviceId;
