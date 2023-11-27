import { useRef, useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import copy from 'clipboard-copy';
import { CopyDiv } from './componentStyles/ComponentsStyles';
import { toast } from 'react-toastify';

const CopyToClipboard = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        copy('almonteestrella@gmail.com');
        setCopied(true);
        customAlert();
    };

    function customAlert() {
        toast.success('copied email address to clickboard', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    return (
        <CopyDiv>
            <span>almonteestrella@gmail.com</span>
            <button onClick={handleCopyClick}>
                <FiCopy />
            </button>
        </CopyDiv>
    );
};

export default CopyToClipboard;
