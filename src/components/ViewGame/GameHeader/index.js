import React, {useState} from 'react';
import { Icon, Button, Modal, Input } from 'antd';
import './index.css';

export const GameHeader = () => {
    
    const [showModal, setShowModal] = useState(false);

    const onCreateGame = () => {
        setShowModal(true);
    }

    const handleOk = e => {
        setShowModal(false);
    };
  
    const handleCancel = e => {
        setShowModal(false);
    };

    return (
        <div className="gameHeaderWrapper">
            <span style={{fontSize: 24}}>Game List:</span>
            <Button type="primary" onClick={onCreateGame}>Create New Game</Button>
            <Modal
                title="Create Game"
                visible={showModal}
                onOk={handleOk}
                onCancel={handleCancel}
                >
                    <div className="modalItemWrapper">
                        <span>Title:</span>
                        <Input placeholder="title" style={{width: 350}}/>
                    </div>
                    <div className="modalItemWrapper">
                        <span>IP Address:</span>
                        <Input placeholder="ip address" style={{width: 350}}/>
                    </div>
                    <div className="modalItemWrapper">
                        <span>Port: </span>
                        <Input placeholder="port number" style={{width: 350}}/>
                    </div>
            </Modal>
        </div>
    );
}