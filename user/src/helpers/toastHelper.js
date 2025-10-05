import { toast as reactToast } from 'react-toastify';

const capitalizeFirst = (str) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Clean error messages - remove technical details
const cleanErrorMessage = (message) => {
  if (!message) return 'An error occurred';
  
  // If message contains SQL error details, show generic message
  if (message.toLowerCase().includes('unknown column') || 
      message.toLowerCase().includes('at line no') ||
      message.toLowerCase().includes('undefined') ||
      message.toLowerCase().includes('sql')) {
    return 'Unable to complete request. Please try again.';
  }
  
  // If message is too long (likely a technical error), show generic message
  if (message.length > 100) {
    return 'Something went wrong. Please try again.';
  }
  
  return message;
};

export const toast = {
  success: (message) => reactToast.success(capitalizeFirst(message)),
  error: (message) => reactToast.error(capitalizeFirst(cleanErrorMessage(message))),
  info: (message) => reactToast.info(capitalizeFirst(message)),
  warning: (message) => reactToast.warning(capitalizeFirst(message)),
};
