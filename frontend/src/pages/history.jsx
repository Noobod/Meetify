import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton, Snackbar, Alert } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import styles from "../styles/history.module.css";

export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const [errorOpen, setErrorOpen] = useState(false);

    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                setErrorOpen(true);
            }
        }

        fetchHistory();
    }, [getHistoryOfUser])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <div className={styles.historyContainer}>
            <IconButton onClick={() => routeTo("/home")}>
                <HomeIcon />
            </IconButton>

            {meetings.length !== 0 ? meetings.map((e, i) => (
                <Card key={i} className={styles.historyCard} variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Code: {e.meetingCode}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Date: {formatDate(e.date)}
                        </Typography>
                    </CardContent>
                </Card>
            )) : <Typography>No meeting history found.</Typography>}

            <Snackbar
                open={errorOpen}
                autoHideDuration={4000}
                onClose={() => setErrorOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="error" onClose={() => setErrorOpen(false)}>
                    Failed to fetch meeting history!
                </Alert>
            </Snackbar>
        </div>
    )
}
