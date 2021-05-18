import {React, useEffect} from 'react' ;
import {Modal} from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

export default function AuthorModal({authorsList, setSenderName, modalState, setModalState}) {

    const onCloseModal = () => setModalState(false);
    const onOpenModal = () => setModalState(true);

    const handleSelect = (e) => setSenderName(e.target.value);
    
    useEffect(() => {
        if (authorsList.length > 1) {
            onOpenModal();
        }
    },[authorsList]);

    const styles = {
        'forModal' : {
            'modal' : {
                borderRadius: '4px',
                maxWidth: '30vw',
            },
        },
        'div' : {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            lineHeight: '21px',
        },
        'select' : {
            margin: '10px 0 10px 0',
            backgroundColor: '#EEE',
            borderRadius: '2px',
            height: '5vh',
            border: 'none',
            padding: '0 5px 0 5px',
            appearence: 'none',
            fontSize: '18px',
        },
        'okButton' : {
            backgroundColor: '#00565A',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            // width: 140,
            height: 45,
            color: '#fff',
            cursor: 'pointer',
            fontSize: 18,
            marginTop: 20,
        }
    };

    return (
        <Modal open={modalState} onClose={onCloseModal} center closeOnEsc styles={styles.forModal} >
            <div style={styles.div} >
                <h3>Select a sender please!</h3>
                <p>
                    Please select the sender for this conversation from the below list of participants.
                    You can change the sender anytime for a conversation by clicking on the profile icon on the top right of chatroom.
                    Messages sent by this person will appear to the right side.
                </p>
                <select onChange={handleSelect} style={styles.select}>
                    {authorsList.map( (author, key) => {
                        return <option value={author} key={key}>{author}</option>
                    })}
                </select>
                <button onClick={onCloseModal} style={styles.okButton} >See My Chats</button>
            </div>
        </Modal>
    )
}
