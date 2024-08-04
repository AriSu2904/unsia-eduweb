// components/SweetAlert.js
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ShowAlert = (options) => {
    const {
        title = 'Alert',
        text = '',
        icon = 'info',
        confirmButtonText = 'OK',
        customClass = {},
        ...rest
    } = options;

    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
        customClass: {
            ...customClass,
            popup: 'bg-white shadow-lg rounded-lg p-6', // Tambahkan kelas Tailwind
            title: 'text-xl font-semibold',
            icon: 'text-blue-500',
            confirmButton: 'bg-blue-500 text-white rounded px-4 py-2 mt-4',
            ...customClass
        },
        ...rest,
    });
};

export default ShowAlert;
