import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import { Button, IconButton, TextField } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import { AuthContext } from '../contexts/AuthContext'
import styles from "../styles/home.module.css"

function HomeComponent() {
    let navigate = useNavigate()
    const [meetingCode, setMeetingCode] = useState("")
    const { addToUserHistory } = useContext(AuthContext)

    const handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <>
            <div className={styles.navBar}>
                <div className={styles.navLogo}>
                    <h2>Meetify</h2>
                </div>
                <div className={styles.navActions}>
                    <div className={styles.historyAction} onClick={() => navigate("/history")}>
                        <RestoreIcon />
                        <span>History</span>
                    </div>
                    <Button
                        className={styles.logoutBtn}
                        onClick={() => { localStorage.removeItem("token"); navigate("/") }}
                        variant="contained"
                    >
                        Logout
                    </Button>
                </div>
            </div>

            <div className={styles.meetContainer}>
                <div className={styles.leftPanel}>
                    <h2>Providing Quality Video Call Just Like Quality Education</h2>
                    <div className={styles.joinBox}>
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            id="outlined-basic"
                            label="Meeting Code"
                            variant="outlined"
                        />
                        <Button onClick={handleJoinVideoCall} variant='contained'>
                            Join
                        </Button>
                    </div>
                </div>
                <div className={styles.rightPanel}>
                    <img srcSet='/logo3.png' alt="Meetify Logo" />
                </div>
            </div>
        </>
    )
}

export default withAuth(HomeComponent)
