import { toast } from 'react-toastify';

export default function showError(message) {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export function showMessage(message) {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 1000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};
