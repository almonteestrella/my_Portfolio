import { useState } from 'react';

import { Main, ContentDiv, Button } from './ContactStyles';

import { BsArrowRight } from 'react-icons/bs';
import Modal from '@/components/Modal';

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Main id='contact'>
            <ContentDiv>
                <h1>
                    Have a project in mind that requires technical expertise?
                </h1>
                <div>
                    <Button type='button' onClick={handleShow}>
                        <p>get in touch with me </p>
                        <span>
                            <BsArrowRight />
                        </span>
                    </Button>
                </div>
            </ContentDiv>

            <Modal isOpen={show} onClose={handleClose} />
        </Main>
    );
};

export default Contact;
